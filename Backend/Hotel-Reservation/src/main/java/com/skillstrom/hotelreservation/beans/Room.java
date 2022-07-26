package com.skillstrom.hotelreservation.beans;

public class Room {
	
	private int roomNum;
	private int beds;
	private String tier;
	private double price;
	
	public Room() {
	}
	
	public Room(int roomNum, int beds, String tier, double price) {
		super();
		this.roomNum = roomNum;
		this.beds = beds;
		this.tier = tier;
		this.price = price;
	}

	public int getRoomNum() {
		return roomNum;
	}

	public void setRoomNum(int roomNum) {
		this.roomNum = roomNum;
	}

	public int getBeds() {
		return beds;
	}

	public void setBeds(int beds) {
		this.beds = beds;
	}

	public String getTier() {
		return tier;
	}

	public void setTier(String tier) {
		this.tier = tier;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}
}
