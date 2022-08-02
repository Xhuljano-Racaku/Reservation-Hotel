package com.skillstrom.hotelreservation.services;

import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;


@Service
public class ReservationService {
	
    @Autowired
    private ReservationRepository repository;

    public List<Reservation> findAll(){
        return repository.findAll();
    }

    public Reservation findById(int reservationId){
        return repository.findById(reservationId).get();
    }

    public Reservation save (Reservation reservation){
    	
    	// if user didnt provide dates set reservation for just 1 day
//    	if(reservation.getStartDate().toString() == "") {
//    		System.out.println(Date.valueOf(LocalDate.now()).toString());
//    		reservation.setStartDate(Date.valueOf(LocalDate.now()));
//    	}
//    	if(reservation.getEndDate().toString() == "") {
//    		reservation.setEndDate(Date.valueOf(LocalDate.now().plusDays(1)));
//    	}
    	
        return repository.save(reservation);
    }

    public Reservation update(Reservation reservation){
        return repository.save(reservation);
    }
    
    public void delete(Reservation reservation){
        repository.delete(reservation);
    }
    
    public List<Reservation> findByCustomer(int id){
    	return repository.findByCustomer(id);
    }
    
}
