package com.techcoders.petsitter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techcoders.petsitter.models.Scheduling;

@Repository
public interface SchedulingRepository extends JpaRepository<Scheduling, Long> {

	
	
}
