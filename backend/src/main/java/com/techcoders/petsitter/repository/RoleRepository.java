package com.techcoders.petsitter.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.techcoders.petsitter.models.Role;
import com.techcoders.petsitter.models.enums.EnumRole;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

	Optional<Role> findByName(EnumRole name);
	
}
