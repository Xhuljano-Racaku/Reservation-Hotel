package com.skillstrom.hotelreservation.services;

import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository repository;

    public List<Reservation> findAll(){
        return repository.findAll();
    }


}
