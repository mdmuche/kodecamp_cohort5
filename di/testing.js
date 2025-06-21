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

function testUserRegistration() {
  const mockEmailService = new MockEmailService();
  const mockLogger = new MockLogger();
  const userService = new UserService();
  const userData = { email: "johndoe@gmail.com", name: "john" };
  userService.registerUser(userData);
}
