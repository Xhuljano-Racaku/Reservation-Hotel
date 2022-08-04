import {start} from "@popperjs/core";

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

  switchDateToYearFormat(){
    // var startDateArray = this.startDate.toLocaleDateString().split("-")
    var sDate = new Date(this.startDate)
    var eDate = new Date(this.endDate)

    var startDateArray = sDate.toLocaleDateString().split("/");
    var endDateArray = eDate.toLocaleDateString().split("/");

    var newStartDate = new Date(parseInt(startDateArray[2]),parseInt(startDateArray[0]),parseInt(startDateArray[1]));
    var newEndDate = new Date(parseInt(endDateArray[2]),parseInt(endDateArray[0]),parseInt(endDateArray[1]));

    console.log(newStartDate);
    console.log(newEndDate);

    this.startDate = newStartDate;
    this.endDate = newEndDate;



    // this.startDate = new Date(parseInt(startDateArray[2])),parseInt(startDateArray[0]),parseInt(startDateArray[1]);
    // this.endDate = new Date(parseInt(endDateArray[2])),parseInt(endDateArray[0]),parseInt(endDateArray[1]);
  }
}
