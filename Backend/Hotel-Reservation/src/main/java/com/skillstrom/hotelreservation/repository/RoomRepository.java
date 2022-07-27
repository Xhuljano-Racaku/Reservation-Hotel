package com.skillstrom.hotelreservation.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.skillstrom.hotelreservation.beans.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer>{
	
	@Query(value = "SELECT room_num, beds, tier, price FROM room WHERE tier = ?1", nativeQuery = true)
	List<Room> findByTier(String tier);
	
	@Query(value = "SELECT room_num, beds, tier, price FROM room WHERE price BETWEEN ?1 AND ?2", nativeQuery = true)
	List<Room> findByPrice(double bottom, double top);
	
}
