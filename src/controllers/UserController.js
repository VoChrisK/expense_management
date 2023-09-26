class UserController {
  constructor() {
    this.userId = 1;
    this.userData = {}
  }

  getAllUsers() {
    return this.userData;
  }

  addUser(firstName, lastName) {
    const newUser = {
      firstName,
      lastName
    }

    this.userData[this.userId++] = newUser;
  }
}

export default UserController;