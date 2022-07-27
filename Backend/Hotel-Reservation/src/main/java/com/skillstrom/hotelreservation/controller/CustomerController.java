package com.skillstrom.hotelreservation.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstrom.hotelreservation.beans.Customer;
import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.services.CustomerService;

@RestController
@RequestMapping("/hotelreservation/customers")
public class CustomerController {
	
	@Autowired
	private CustomerService service;
	
	public CustomerController() {
		System.out.println("Controller created!");
	}
	
	@GetMapping
	public ResponseEntity<List<Customer>> findAll() {
		System.out.println("GET called");
		return new ResponseEntity<List<Customer>>(service.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("{id}")
    public ResponseEntity<Customer> findById(@PathVariable int id){
        return new ResponseEntity<Customer>(service.findById(id),HttpStatus.OK);
    }
	
	@PostMapping
	public ResponseEntity<Customer> save(@Valid @RequestBody Customer customer) {
		System.out.println("POST called");
		return new ResponseEntity<>(service.save(customer), HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<Customer> update(@Valid @RequestBody Customer customer) {
		System.out.println("UPDATE called");
		return new ResponseEntity<>(service.update(customer), HttpStatus.NO_CONTENT);
	}
	
	@DeleteMapping
	public void delete(@RequestBody Customer customer) {
		System.out.println("DELETE called");
		service.delete(customer);
	}
}
