package com.skillstrom.hotelreservation.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.services.ReservationService;

import java.util.List;

import javax.validation.Valid;

//@CrossOrigin(origins="http://localhost:4200")
@CrossOrigin(origins="http://hotel-reservation.s3-website.us-east-2.amazonaws.com")
@RestController
@RequestMapping("/reservation/")
public class ReservationController {

    @Autowired
    ReservationService service;

    @GetMapping("")
    public ResponseEntity<List<Reservation>> findAll(){
        return new ResponseEntity<List<Reservation>>(service.findAll(), HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Reservation> findById(@PathVariable int id){
        return new ResponseEntity<Reservation>(service.findById(id), HttpStatus.OK);
    }
    @GetMapping("phone/{number}")
    public ResponseEntity<List<Reservation>> findByPhone(@PathVariable String number){
        return new ResponseEntity<List<Reservation>>(service.findByPhone(number), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Reservation> save(@Valid @RequestBody Reservation reservation){
    	
    	Reservation newRes = service.update(reservation);
    	
    	if(newRes == null) {
    		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    	}else {
    		return new ResponseEntity<>(newRes,HttpStatus.NO_CONTENT);
    	}
    }

    @PutMapping("")
    public ResponseEntity<Reservation> update (@Valid @RequestBody Reservation reservation){
    	
    	Reservation newRes = service.update(reservation);
    	
    	if(newRes == null) {
    		return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    	}else {
    		return new ResponseEntity<Reservation>(newRes,HttpStatus.NO_CONTENT);
    	}
        
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable int id){
        System.out.println("Delete");
        service.delete(id);
    }

    @GetMapping("customer/{id}")
    public ResponseEntity<List<Reservation>> findByCustomer(@PathVariable(value = "id") int id){
        return new ResponseEntity<List<Reservation>>(service.findByCustomer(id), HttpStatus.OK);
    }

}
