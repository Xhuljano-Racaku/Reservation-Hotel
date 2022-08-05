package com.skillstrom.hotelreservation.repository;

import com.skillstrom.hotelreservation.beans.Reservation;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

	@Query(value = "SELECT * FROM reservation WHERE customer_id = ?1", nativeQuery = true)
	List<Reservation> findByCustomer(int id);
	
	@Query(value = "SELECT * "
			+ "FROM reservation "
			+ "WHERE room_num = ?1 "
			+ "AND(start_date = ?2 "
			+ "OR ?2 BETWEEN start_date AND end_date "
			+ "OR ?3 BETWEEN start_date AND end_date "
			+ "OR end_date = ?3)", nativeQuery = true)
	Reservation findConflictingReservations(int roomNum, String startDate, String endDate, int customer_id);
	
	@Query(value = "SELECT * "
			+ "FROM reservation "
			+ "WHERE room_num = ?1 "
			+ "AND(start_date = ?2 "
			+ "OR ?2 BETWEEN start_date AND end_date "
			+ "OR ?3 BETWEEN start_date AND end_date "
			+ "OR end_date = ?3)"
			+ "AND customer_id != ?4 ", nativeQuery = true)
	Reservation findOtherConflictingReservations(int roomNum, String startDate, String endDate, int customer_id);
	
	@Query(value = "SELECT reservation_id, room_num, start_date, end_date, reservation.customer_id "
			+ "FROM reservation LEFT JOIN customer on reservation.customer_id = customer.customer_id "
			+ "WHERE phone = ?1", nativeQuery = true)
	List<Reservation> findByPhone(String phone);
}
