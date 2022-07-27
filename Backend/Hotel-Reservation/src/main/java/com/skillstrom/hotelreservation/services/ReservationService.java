package com.skillstrom.hotelreservation.services;

import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.beans.Room;
import com.skillstrom.hotelreservation.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

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
        return repository.save(reservation);
    }

    public Reservation update(Reservation reservation){
        return repository.save(reservation);
    }
    
    public void delete(Reservation reservation){
        repository.delete(reservation);
    }
    
    
}
