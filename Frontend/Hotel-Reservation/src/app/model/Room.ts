export class Room{
  roomNum :number;
  beds :number;
  tier :string;
  price :number;

//make sure that you have valid default values later
  constructor(roomNum: number = 0, beds: number = 0, tier: string = "", price: number = 0) {
    this.roomNum = roomNum;
    this.beds = beds;
    this.tier = tier;
    this.price = price;
  }
}
