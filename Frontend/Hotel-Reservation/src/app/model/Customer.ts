export class Customer{
  customerId :number;
  firstName :string;
  lastName :string;
  phone :number;


  constructor(customerId: number = 0, firstName: string = "", lastName: string = "", phone: number = 0) {
    this.customerId = customerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }
}
