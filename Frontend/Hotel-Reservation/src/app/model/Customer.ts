export class Customer{
  customerId :number;
  firstName :string;
  lastName :string;
  phone :number;


  constructor(customerId: number, firstName: string, lastName: string, phone: number) {
    this.customerId = customerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }
}
