package com.skillstrom.hotelreservation.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.skillstrom.hotelreservation.beans.Room;

@Repository
public interface RoomRepository extends JpaRepository<Room, Integer>{
	
	@Query(value = "SELECT room_num, beds, tier, price FROM room WHERE tier = ?1", nativeQuery = true)
	List<Room> findByTier(String tier);
	
	@Query(value = "SELECT room_num, beds, tier, price FROM room WHERE price BETWEEN ?1 AND ?2", nativeQuery = true)
	List<Room> findByPrice(double bottom, double top);
	
	@Query(value = "SELECT room_num, beds, tier, price FROM room WHERE beds = ?1", nativeQuery = true)
	List<Room> findByBeds(int beds);
	
	@Query(value = "SELECT room_num, beds, tier, price  FROM room "
			+ "WHERE room_num NOT IN "
			+ "( "
			+ "SELECT room.room_num "
			+ "FROM room LEFT JOIN reservation ON room.room_num = reservation.room_num "
			+ "WHERE (?1 = start_date "
			+ "OR ?1 = end_date "
			+ "OR ?1 BETWEEN start_date AND end_date "
			+ "OR ?2 = start_date "
			+ "OR ?2 = end_date "
			+ "OR ?2 BETWEEN start_date AND end_date) "
			+ ")", nativeQuery = true)
	List<Room> findRoomByAvailability(String startDate, String endDate);
}
