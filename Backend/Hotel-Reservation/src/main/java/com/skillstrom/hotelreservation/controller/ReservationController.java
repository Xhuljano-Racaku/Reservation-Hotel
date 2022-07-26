package com.skillstrom.hotelreservation.controller;

import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.dao.ReservationDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/reservation/")
public class ReservationController {

    @Autowired
    private ReservationDAO reservationDAO;

    @GetMapping("")
    public List<Reservation> findAll(){
        return reservationDAO.findAll();
    }

    // need to test below this point
    //

    @PostMapping("")
    public Reservation create(@RequestBody Reservation reservation){
        return reservationDAO.create(reservation);
    }
}
