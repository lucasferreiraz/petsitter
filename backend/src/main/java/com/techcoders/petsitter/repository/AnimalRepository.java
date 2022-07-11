package com.techcoders.petsitter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techcoders.petsitter.models.Animal;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Integer> {

	List<Animal> findByUserId(Integer userId);
	
}
