package com.techcoders.petsitter.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techcoders.petsitter.models.Animal;
import com.techcoders.petsitter.repository.AnimalRepository;
import com.techcoders.petsitter.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/app")
@PreAuthorize("hasRole('PROPRIETARIO')")
public class AnimalController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AnimalRepository animalRepository;
	
	@PostMapping("/animal")
	public ResponseEntity<Animal> createAnimal(Integer proprietarioId, 
			@RequestBody Animal animalRequest){
		
		proprietarioId = AuthController.currentUserId;
		
		Animal animal = userRepository.findById(proprietarioId).map(user -> {
			
			animalRequest.setUser(user);
			return animalRepository.save(animalRequest);
					
		}).orElseThrow(() -> new RuntimeException("Proprietário não encontrado com este ID."));
		
		return new ResponseEntity<Animal>(animal, HttpStatus.CREATED);
		
	}
	
	@GetMapping("/animal")
	public ResponseEntity<List<Animal>> getAllAnimalsByUserId(Integer proprietarioId){
		
		proprietarioId = AuthController.currentUserId;
		
		if(!userRepository.existsById(proprietarioId)) {
			throw new RuntimeException("Proprietário não encontrado com este ID.");
		}
		
		List<Animal> animals = animalRepository.findByUserId(proprietarioId);
		return new ResponseEntity<List<Animal>>(animals, HttpStatus.OK);
				
		
	}
	
	
	
	
	
	
}
