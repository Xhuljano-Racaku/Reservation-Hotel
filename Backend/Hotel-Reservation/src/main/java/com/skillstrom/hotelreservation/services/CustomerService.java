package com.skillstrom.hotelreservation.services;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstrom.hotelreservation.beans.Customer;
import com.skillstrom.hotelreservation.repository.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	private CustomerRepository repository;
	
	public CustomerService() {
		System.out.println("Service created!");
	}
	
	public List<Customer> findAll() {
		return repository.findAll();
	}
	
	public Customer save(Customer customer) {
		return repository.save(customer);
	}
	
	public Customer update(Customer customer) {
		return repository.save(customer);
	}
	
	public void delete(Customer customer) {
		 repository.delete(customer);
	}
}
