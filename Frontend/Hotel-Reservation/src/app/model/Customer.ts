export class Customer{
  id :number;
  firstName :string;
  lastName :string;
  phone :number;


  constructor(id: number, firstName: string, lastName: string, phone: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }
}
