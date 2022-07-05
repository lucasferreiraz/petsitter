package com.techcoders.petsitter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techcoders.petsitter.models.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

	
	
}
