import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User';

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.create({
      email: "ccffigueroa.sac@gmail.com",
      username: "ccffigueroa.sac",
      roleId: 1,
      password: "Password123",
      personId: 1
    })    
  }
}
