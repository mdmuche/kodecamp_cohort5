class EmailService {
  send(to, subject, body) {
    console.log(`sending email to ${to}: ${subject}, ${body}`);
  }
}

class UserService {
  constructor(emailService) {
    // this.emailService = new EmailService()
    this.emailService = emailService;
  }

  registerUser(userData) {
    this.emailService.send(
      userData.email,
      "welcome",
      "thanks for registering!"
    );
  }
}

const emailService = new EmailService();
const userService = new UserService(emailService);
userService.registerUser({
  email: "johndoe@gmail.com",
});
