package com.techcoders.petsitter.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/app")
public class TestController {
	
	@GetMapping("/all")
	public String allAccess() {
		return "Conteúdo público.";
	}
	
	@GetMapping("/cuidador")
	@PreAuthorize("hasRole('CUIDADOR')")
	public String userAccess() {
		return "Conteúdo do CUIDADOR";
	}	
	
	@GetMapping("/proprietario")
	@PreAuthorize("hasRole('PROPRIETARIO')")
	public String adminAccess() {
		return "Conteúdo do PROPRIETARIO";
	}
	
}
