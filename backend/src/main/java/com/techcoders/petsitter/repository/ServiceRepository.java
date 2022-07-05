package com.techcoders.petsitter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techcoders.petsitter.models.Service;

@Repository
public interface ServiceRepository extends JpaRepository<Service, Long> {

	
	
}
