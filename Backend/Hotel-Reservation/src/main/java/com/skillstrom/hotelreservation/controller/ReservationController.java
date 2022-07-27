package com.skillstrom.hotelreservation.controller;

import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/reservation/")
public class ReservationController {

    @Autowired
    ReservationService service;

    @GetMapping("")
    public ResponseEntity<List<Reservation>> findAll(){
        return new ResponseEntity<List<Reservation>>(service.findAll(), HttpStatus.OK);
    }

}
