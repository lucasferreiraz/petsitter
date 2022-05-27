package com.techcoders.petsitter.payload.request;

import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class SignupRequest {
	
	@NotBlank
	private String username;
	
	@NotBlank
	@Email
	private String email;
	
	private Set<String> role;
	
	@NotBlank  
	private String password;

	public String getUsername() {
		return username;
	}

	public String getEmail() {
		return email;
	}

	public Set<String> getRole() {
		return role;
	}

	public String getPassword() {
		return password;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setRole(Set<String> role) {
		this.role = role;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
}
