class DiContainer {
  constructor() {
    this.services = new Map();
    this.singleton = new Map();
  }

  register(name, factory, dependencies = []) {
    this.services.set(name, {
      factory,
      dependencies,
      singleton: false,
    });
  }

  registerSingleton(name, factory, dependencies = []) {
    this.services.set(name, {
      factory,
      dependencies,
      singleton: true,
    });
  }

  resolve(name) {
    const serviceConfig = this.services.get(name);

    if (!serviceConfig) {
      throw new Error(`services ${name} not found`);
    }

    if (serviceConfig.singleton && this.singleton.has(name)) {
      return this.singleton.get(name);
    }

    const dependencies = serviceConfig.dependencies.map((dep) =>
      this.resolve(dep)
    );

    const instance = serviceConfig.factory(...dependencies);

    if (serviceConfig.singleton) {
      this.singleton.set(name, instance);
    }

    return instance;
  }
}

class EmailService {
  send(to, subject, body) {
    console.log(`email sent to ${to}: ${subject}`);
  }
}

class LoggerService {
  log(mssg) {
    console.log(`log: ${mssg}`);
  }
}

class UserService {
  constructor(emailService, logger) {
    this.emailService = emailService;
    this.logger = logger;
  }

  registerUser(userData) {
    this.logger.log(`register user: ${userData.email}`);
    this.emailService.send(
      userData.email,
      "welcome",
      "thankyou for registering!"
    );
    this.logger.log(`user registered`);
  }
}

const container = new DiContainer();

container.registerSingleton("emailService", () => new EmailService());
container.registerSingleton("logger", () => new LoggerService());

container.registerSingleton("emailService", () => new EmailService());
container.registerSingleton("logger", () => new LoggerService());

const userServiceName = "userService";
const userServiceName2 = "userService2";

const userServiceInstance = (emailService, logger) =>
  new UserService(emailService, logger);

container.register(userServiceName, userServiceInstance, [
  "emailService",
  "logger",
]);

container.register(
  userServiceName2,
  (emailService, logger) => new UserService(emailService, logger),
  ["emailService", "logger"]
);

const userService = container.resolve(userServiceName);
// const userService2 = container.resolve(userServiceName2);
userService.registerUser({ email: "johndoe@gmail.com" });
// userService2.registerUser({ email: "joedoe@gmail.com" });

class MockEmailService {
  constructor() {
    this.sentEmails = [];
  }

  send(to, subject, body) {
    this.sentEmails.push({ to, subject, body });
  }

  getSentEmails() {
    return this.sentEmails;
  }

  clear() {
    this.sentEmails = [];
  }
}

class MockLogger {
  constructor() {
    this.logs = [];
  }

  log(message) {
    this.logs.push(message);
  }

  getLogs() {
    return this.logs;
  }

  clear() {
    this.log = [];
  }
}

// class UserService {
//   constructor(emailService, logger) {
//     this.emailService = emailService;
//     this.logger = logger;
//   }

//   registerUser(userData) {
//     this.logger.log(`register user: ${userData.email}`);
//     this.emailService.send(
//       userData.email,
//       "welcome",
//       "thankyou for registering!"
//     );
//     this.logger.log(`user registered`);
//   }
// }

function testUserRegistration() {
  const mockEmailService = new MockEmailService();
  const mockLogger = new MockLogger();
  const userService = new UserService(mockEmailService, mockLogger);
  const userData = { email: "johndoe@gmail.com", name: "john" };
  userService.registerUser(userData);

  const sentEmails = mockEmailService.getSentEmails();
  console.log(sentEmails);
  console.log(sentEmails.length === 1, "should send one email");
}

testUserRegistration();
