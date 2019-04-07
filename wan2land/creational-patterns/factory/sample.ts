
class UserFactory {
  public factory() {
    return new User()
  }
}

class User {
}


const factory = new UserFactory()
const user = factory.factory() // factory!

console.log(user)
