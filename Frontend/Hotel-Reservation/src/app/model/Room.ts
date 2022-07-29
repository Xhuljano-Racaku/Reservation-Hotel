export class Room{
  roomNumber :number;
  numOfBeds :number;
  tier :string;
  price :number;

//make sure that you have valid default values later
  constructor(roomNumber: number = 0, numOfBeds: number = 0, tier: string = "", price: number = 0) {
    this.roomNumber = roomNumber;
    this.numOfBeds = numOfBeds;
    this.tier = tier;
    this.price = price;
  }
}
