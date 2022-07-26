package com.skillstrom.hotelreservation.controller;

import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.dao.ReservationDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/reservation/")
public class ReservationController {

    @Autowired
    private ReservationDAO reservationDAO;

    @GetMapping("findAll")
    public List<Reservation> findAll(){
        return reservationDAO.findAll();
    }

    @GetMapping("hello")
    public String sayHello(){
        return "Hello";
    }
}
