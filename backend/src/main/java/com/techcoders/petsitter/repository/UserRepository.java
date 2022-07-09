package com.techcoders.petsitter.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techcoders.petsitter.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
	Optional<User> findByUsername(String username);
	
	Optional<User> findByEmail(String email);
	
	Optional<User> findById(Integer userId);
	
	Boolean existsByUsername(String username);
	
	Boolean existsByEmail(String email);
	
	Boolean existsById(Integer userId);
	
}