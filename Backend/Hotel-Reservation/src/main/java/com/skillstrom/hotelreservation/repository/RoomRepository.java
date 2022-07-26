package com.skillstrom.hotelreservation.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstrom.hotelreservation.beans.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer>{
	
//	List<Room> findByTier(String tier);
//	
//	List<Room> findByPrice(double bottom, double top);
}
