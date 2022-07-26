package com.skillstrom.hotelreservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.skillstrom.hotelreservation.beans.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
}
