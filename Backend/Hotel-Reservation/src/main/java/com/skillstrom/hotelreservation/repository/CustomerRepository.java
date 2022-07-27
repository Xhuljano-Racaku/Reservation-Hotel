package com.skillstrom.hotelreservation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.skillstrom.hotelreservation.beans.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	@Query(value = "SELECT * FROM customer where first_name = ?1", nativeQuery = true)
	List<Customer> findByName(String firstName);
}
