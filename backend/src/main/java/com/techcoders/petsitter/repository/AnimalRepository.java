package com.techcoders.petsitter.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techcoders.petsitter.models.Animal;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Integer> {

	
	
}
