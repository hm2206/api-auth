import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Person from 'App/Models/Person'
import { DateTime } from 'luxon';

export default class PersonSeeder extends BaseSeeder {
  public async run () {
    Person.create({
      id: 1,
      name: "Admin 1",
      ape_pat: "Admin",
      ape_mat: "System",
      date_birth: DateTime.fromSQL("1999-06-22"),
      gender: "M",
      type_document_id: 1,
      document_number: "12345678",
      address: "En casa",
      phone: "999999999",
      state: true
    })
  }
}
