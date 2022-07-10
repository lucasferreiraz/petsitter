package com.techcoders.petsitter.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techcoders.petsitter.models.Scheduling;
import com.techcoders.petsitter.repository.SchedulingRepository;
import com.techcoders.petsitter.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/app")
public class SchedulingController {

	@Autowired
	private SchedulingRepository schedulingRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@PostMapping("/scheduling")
	public ResponseEntity<Scheduling> createScheduling(Integer userId, 
			@RequestBody Scheduling schedulingRequest){
		
		userId = AuthController.currentUserId;
		
		Scheduling scheduling = userRepository.findById(userId).map(user -> {
			
			schedulingRequest.setUser(user);
			return schedulingRepository.save(schedulingRequest);
					
		}).orElseThrow(() -> new RuntimeException("Usuário não encontrado com este ID."));
		
		return new ResponseEntity<Scheduling>(scheduling, HttpStatus.CREATED);
		
	}
	
	@GetMapping("/scheduling")
	public ResponseEntity<List<Scheduling>> getAllSchedulingsByUserId(Integer userId){
		
		userId = AuthController.currentUserId;
		
		if(!userRepository.existsById(userId)) {
			throw new RuntimeException("Usuário não encontrado com este ID.");
		}
		
		List<Scheduling> schedulings = schedulingRepository.findByUserId(userId);
		return new ResponseEntity<List<Scheduling>>(schedulings, HttpStatus.OK);
				
		
	}
	
}
