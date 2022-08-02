package com.skillstrom.hotelreservation.controller;

import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
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
        return new ResponseEntity<Reservation>(service.findById(id),HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Reservation> save(@RequestBody Reservation reservation){
        return new ResponseEntity<>(service.save(reservation),HttpStatus.NO_CONTENT);
    }

    @PutMapping("")
    public ResponseEntity<Reservation> update (@RequestBody Reservation reservation){
        return new ResponseEntity<Reservation>(service.update(reservation),HttpStatus.NO_CONTENT);
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
