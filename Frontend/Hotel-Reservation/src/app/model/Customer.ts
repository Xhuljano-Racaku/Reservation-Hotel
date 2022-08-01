export class Customer{
  customerId :number;
  firstName :string;
  lastName :string;
  phone :string;


  constructor(customerId: number = 0, firstName: string = "", lastName: string = "", phone: string = "") {
    this.customerId = customerId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
  }
}
