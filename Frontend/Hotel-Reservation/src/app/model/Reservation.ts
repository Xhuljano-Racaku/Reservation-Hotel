export class Reservation{
  reservationId :number;
  roomNum :number;
  startDate :Date;
  endDate :Date;
  // should this be customer object or just customer id
  customerId :number;


  constructor(reservationId: number = 0, roomNum: number = 0, startDate: Date = new Date(), endDate: Date = new Date(), customerId: number = 0) {
    this.reservationId = reservationId;
    this.roomNum = roomNum;
    this.startDate = startDate;
    this.endDate = endDate;
    this.customerId = customerId;
  }
}
