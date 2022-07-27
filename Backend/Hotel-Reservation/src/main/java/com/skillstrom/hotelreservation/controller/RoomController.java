package com.skillstrom.hotelreservation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstrom.hotelreservation.beans.Room;
import com.skillstrom.hotelreservation.services.RoomService;

@RestController
@RequestMapping("/rooms")
public class RoomController {

	@Autowired
	private RoomService service;
	
	@GetMapping("/price/{bottom}_{top}")
	public ResponseEntity<List<Room>> findByPrice(@PathVariable(value = "top") double top, @PathVariable(value ="bottom") double bottom) {
		ResponseEntity<List<Room>> response = new ResponseEntity<>(service.findByPrice(bottom, top), HttpStatus.OK);
		return response;
	}
	
	@GetMapping("/tier/{tier}")
	public ResponseEntity<List<Room>> findByTier(@PathVariable(value ="tier") String tier){
		ResponseEntity<List<Room>> response = new ResponseEntity<>(service.findByTier(tier), HttpStatus.OK);
		return response;
	}
	
	@PutMapping()
	public ResponseEntity<Room> update(@RequestBody Room room) {
		ResponseEntity<Room> response = new ResponseEntity<>(service.save(room), HttpStatus.CREATED);
		return response;
	}
	
}
