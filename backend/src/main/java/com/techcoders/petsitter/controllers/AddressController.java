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

import com.techcoders.petsitter.models.Address;
import com.techcoders.petsitter.repository.AddressRepository;
import com.techcoders.petsitter.repository.UserRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/app")
public class AddressController {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private AddressRepository addressRepository;
	
	@PostMapping("/address")
	public ResponseEntity<Address> createAddress(Integer userId,
			@RequestBody Address addressRequest){
		
		userId = AuthController.currentUserId;
		
		Address address = userRepository.findById(userId).map(user -> {
			
			addressRequest.setUser(user);
			return addressRepository.save(addressRequest);
			
		}).orElseThrow(() -> new RuntimeException("Usuário não encontrado com este ID."));
		
		return new ResponseEntity<Address>(address, HttpStatus.CREATED);
		
	}
	
	@GetMapping("/address")
	public ResponseEntity<List<Address>> getAllAddressByUserId(Integer userId){
		
		userId = AuthController.currentUserId;
		
		if(!userRepository.existsById(userId)) {
			throw new RuntimeException("Usuário não encontrado com este ID.");
		}
		
		List<Address> addresses = addressRepository.findByUserId(userId);
		return new ResponseEntity<List<Address>>(addresses, HttpStatus.OK);
		
	}
	
	
	
	
}
