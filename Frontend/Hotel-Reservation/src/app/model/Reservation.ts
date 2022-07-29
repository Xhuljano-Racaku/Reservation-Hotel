export class Reservation{
  id :number;
  roomNumber :number;
  startDate :Date;
  endDate :Date;
  // should this be customer object or just customer id
  customerId :number;


  constructor(id: number = 0, roomNumber: number = 0, startDate: Date = new Date(), endDate: Date = new Date(), customerId: number = 0) {
    this.id = id;
    this.roomNumber = roomNumber;
    this.startDate = startDate;
    this.endDate = endDate;
    this.customerId = customerId;
  }
}
