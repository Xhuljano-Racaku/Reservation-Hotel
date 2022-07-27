package com.skillstrom.hotelreservation.services;

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
	
	public List<Room> findByTier(String tier) {
		return repository.findByTier(tier);
	}
	
	public List<Room> findByPrice(double bottom, double top){
		return repository.findByPrice(bottom, top);
	}
	
	public Room save(Room room) {
		return repository.save(room);
	}
	
	public List<Room> findRoomByAvailability(String startDate, String endDate){
    	return repository.findRoomByAvailability(startDate, endDate);
    }
	
	public List<Room> findByBeds(int beds){
		return repository.findByBeds(beds);
	}
}
