package com.skillstrom.hotelreservation.services;

import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.List;

import javax.transaction.Transactional;


@Service
@Transactional
public class ReservationService {
	
    @Autowired
    private ReservationRepository repository;

    public List<Reservation> findAll(){
        return repository.findAll();
    }

    public Reservation findById(int reservationId){
        return repository.findById(reservationId).get();
    }
    
    public List<Reservation> findByPhone(String phone){
    	return repository.findByPhone(phone);
    }

    public Reservation save (Reservation reservation){
    	
    	Reservation test = repository.findConflictingReservations(reservation.getRoomNum(), reservation.getStartDate().toString(), reservation.getEndDate().toString(), reservation.getCustomerId());
    	
    	if(reservation.getEndDate().isBefore(reservation.getStartDate())) {
    		System.out.println("End date cannot be before start date");
    		return null;
    	}
    	if(test == null) {
    		return repository.save(reservation);
    	}else {
    		System.out.println("New dates conflict with existing reservation");
    		return null;
    	}
        
    }

    public Reservation update(Reservation reservation){
    	
    	Reservation test = repository.findOtherConflictingReservations(reservation.getRoomNum(), reservation.getStartDate().toString(), reservation.getEndDate().toString(), reservation.getCustomerId());
    	
    	if(reservation.getEndDate().isBefore(reservation.getStartDate())) {
    		System.out.println("End date cannot be before start date");
    		return null;
    	}
    	if(test == null) {
    		return repository.save(reservation);
    	}else {
    		System.out.println("New dates conflict with existing reservation");
    		return null;
    	}
    }

    public void delete(int id){repository.deleteById(id);}
    
    public List<Reservation> findByCustomer(int id){
    	return repository.findByCustomer(id);
    }
    
}
