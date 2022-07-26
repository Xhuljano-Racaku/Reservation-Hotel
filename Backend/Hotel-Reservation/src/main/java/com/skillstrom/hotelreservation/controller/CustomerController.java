package com.skillstrom.hotelreservation.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.skillstrom.hotelreservation.beans.Customer;
import com.skillstrom.hotelreservation.services.CustomerService;

@RestController
public class CustomerController {
	
	@Autowired
	private CustomerService service;
	
	public CustomerController() {
		System.out.println("Controller created!");
	}
	
	@GetMapping("/hotelreservation/customers")
	public ResponseEntity<List<Customer>> findAll() {
		System.out.println("GET called");
		return new ResponseEntity<List<Customer>>(service.findAll(), HttpStatus.OK);
	}
	
	@PostMapping("/hotelreservation/customers")
	public ResponseEntity<Customer> save(@RequestBody Customer customer) {
		System.out.println("POST called");
		return new ResponseEntity<>(service.save(customer), HttpStatus.CREATED);
	}
}
