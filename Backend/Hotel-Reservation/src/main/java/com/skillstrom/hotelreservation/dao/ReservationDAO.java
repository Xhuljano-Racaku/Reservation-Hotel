package com.skillstrom.hotelreservation.dao;

import com.skillstrom.hotelreservation.beans.Reservation;

import java.util.Date;
import java.util.List;

public interface ReservationDAO {

    // Create a new reservation
    public Reservation create(Reservation reservation);

    // find all reservations in database
    public List<Reservation> findAll();

    // find reservation by id
    public Reservation findById(int reservationId);

    // find reservation by customer id
    public List<Reservation> findByCustomerId(int customerId);

    // find reservation by date
    public List<Reservation> findByDate(Date startDate);

    // update a reservation
    public Reservation update(Reservation reservationToUpdate);

    // deletes reservation by id
    public void delete(int reservationId);


}
