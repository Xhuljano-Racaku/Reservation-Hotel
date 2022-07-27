package com.skillstrom.hotelreservation.repository;

import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.beans.Room;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

	
}
