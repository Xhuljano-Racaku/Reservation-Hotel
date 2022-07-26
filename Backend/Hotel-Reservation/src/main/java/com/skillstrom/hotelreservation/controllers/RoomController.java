package com.skillstrom.hotelreservation.controllers;

import java.util.LinkedList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import com.skillstrom.hotelreservation.beans.Room;

public class RoomController {

	@GetMapping("/rooms")
	public List<Room> findAll() {
		
		LinkedList<Room> rooms = new LinkedList<>();
		return rooms;
	}
	
	@GetMapping("/available_rooms")
	public List<Room> findAvailable(){
		
		LinkedList<Room> rooms = new LinkedList<>();
		return rooms;
	}
	
	@PutMapping("/updateroom/{roomNum}")
	public boolean update(@PathVariable(value = "roomNum") String roomNum) {
		return true;
	}
	
}
