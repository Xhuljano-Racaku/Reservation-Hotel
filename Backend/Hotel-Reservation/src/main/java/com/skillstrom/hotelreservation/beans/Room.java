package com.skillstrom.hotelreservation.beans;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity(name = "room")
@Table(name = "room")
public class Room {
	
	@Id
	@Column(name = "room_num")
	private int roomNum;
	
	@Column(name = "beds")
	private int beds;
	
	@Column(name = "tier")
	private String tier;
	
	@Column(name = "price")
	private double price;
	
//	@OneToMany(mappedBy = "room")
//	private Set<Reservation> reservations;
	
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
