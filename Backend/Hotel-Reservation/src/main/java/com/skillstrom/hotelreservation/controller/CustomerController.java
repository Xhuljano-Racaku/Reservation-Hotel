package com.skillstrom.hotelreservation.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.skillstrom.hotelreservation.beans.Customer;
import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.services.CustomerService;

@CrossOrigin()
@RestController
@RequestMapping("/customers")
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
	
	@GetMapping("/id/{id}")
    public ResponseEntity<Customer> findById(@PathVariable int id){
        return new ResponseEntity<Customer>(service.findById(id),HttpStatus.OK);
    }
	
	@GetMapping("/name/{name}")
	public ResponseEntity<List<Customer>> findByName(@PathVariable String name) {
		return new ResponseEntity<List<Customer>>(service.findByName(name), HttpStatus.OK);
	}
	
	@GetMapping("/phone/{phone}")
	public ResponseEntity<Customer> findByPhone(@PathVariable String phone) {
		return new ResponseEntity<Customer>(service.findByPhone(phone), HttpStatus.OK);
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
	public void delete(@PathVariable int id) {
		System.out.println("DELETE called");
		service.delete(id);
	}
}
