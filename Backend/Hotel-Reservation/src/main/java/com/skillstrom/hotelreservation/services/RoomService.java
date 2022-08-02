package com.skillstrom.hotelreservation.services;

import java.sql.Date;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstrom.hotelreservation.beans.Room;
import com.skillstrom.hotelreservation.repository.RoomRepository;

@Service
@Transactional
public class RoomService {
	
	@Autowired // Automatically gives a RoomRepository
	private RoomRepository repository;

	public List<Room> findAll(){return repository.findAll();}

	public List<Room> findByTier(String tier) {
		// If user didn't provide a tier to search by return all rooms
		if(tier.equals("none")) {
			return repository.findAll();
		}else {
			return repository.findByTier(tier);
		}
		
	}
	
	public List<Room> findByPrice(double bottom, double top){
		// if user didn't provide a max price set it to 1000
		if(top == 0.0) {
			top = 1000;
		}
		return repository.findByPrice(bottom, top);
	}
	
	public Room save(Room room) {
		return repository.save(room);
	}
	
	public List<Room> findRoomByAvailability(String startDate, String endDate){
    	return repository.findRoomByAvailability(startDate, endDate);
    }
	
	public List<Room> findByBeds(int beds){
		// if user didnt provide beds set it to the max number of beds
		if(beds == 0) {
			return repository.findAll();
		}
		return repository.findByBeds(beds);
	}
}









