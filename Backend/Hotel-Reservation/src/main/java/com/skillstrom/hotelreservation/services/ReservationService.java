package com.skillstrom.hotelreservation.services;

import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    public Reservation save (Reservation reservation){
    	
    	Reservation test = repository.findReservation(reservation.getRoomNum(), reservation.getStartDate().toString(), reservation.getEndDate().toString());
    	
    	if(test == null) {
    		return repository.save(reservation);
    	}else {
    		System.out.println("here");
    		return null;
    	}
        
    }

    public Reservation update(Reservation reservation){
        return repository.save(reservation);
    }

    public void delete(int id){repository.deleteById(id);}
    
    public List<Reservation> findByCustomer(int id){
    	return repository.findByCustomer(id);
    }
    
}
