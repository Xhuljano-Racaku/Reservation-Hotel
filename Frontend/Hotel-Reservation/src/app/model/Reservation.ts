export class Reservation{
  id :number;
  roomNumber :number;
  startDate :Date;
  endDate :Date;
  // should this be customer object or just customer id
  customerId :number;


  constructor(id: number, roomNumber: number, startDate: Date, endDate: Date, customerId: number) {
    this.id = id;
    this.roomNumber = roomNumber;
    this.startDate = startDate;
    this.endDate = endDate;
    this.customerId = customerId;
  }
}
