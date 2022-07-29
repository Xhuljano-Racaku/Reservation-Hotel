package com.skillstrom.hotelreservation.services;

import java.util.LinkedList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.skillstrom.hotelreservation.beans.Customer;
import com.skillstrom.hotelreservation.beans.Reservation;
import com.skillstrom.hotelreservation.repository.CustomerRepository;

@Service
@Transactional
public class CustomerService {
	
	@Autowired
	private CustomerRepository repository;
	
	public CustomerService() {
		System.out.println("Service created!");
	}
	
	public List<Customer> findAll() {
		return repository.findAll();
	}
	
	public Customer findById(int customerId){
        return repository.findById(customerId).get();
    }
	
	public List<Customer> findByName(String firstName) {
		return repository.findByName(firstName);
	}
	
	public Customer findByPhone(String phone) {
		return repository.findByPhone(phone);
	}
	
	public Customer save(Customer customer) {
		return repository.save(customer);
	}
	
	public Customer update(Customer customer) {
		return repository.save(customer);
	}
	
	public void delete(int id) {
		 repository.deleteById(id);
		 
	}
}
