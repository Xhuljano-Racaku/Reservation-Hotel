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
}
