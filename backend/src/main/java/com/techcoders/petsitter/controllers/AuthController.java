package com.techcoders.petsitter.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.techcoders.petsitter.models.Role;
import com.techcoders.petsitter.models.User;
import com.techcoders.petsitter.models.enums.EnumRole;
import com.techcoders.petsitter.payload.request.LoginRequest;
import com.techcoders.petsitter.payload.request.SignupRequest;
import com.techcoders.petsitter.payload.response.MessageResponse;
import com.techcoders.petsitter.payload.response.UserInfoResponse;
import com.techcoders.petsitter.repository.RoleRepository;
import com.techcoders.petsitter.repository.UserRepository;
import com.techcoders.petsitter.security.jwt.JwtUtils;
import com.techcoders.petsitter.security.services.UserDetailsImpl;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	@Autowired
	AuthenticationManager authenticationManager;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	RoleRepository roleRepository;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Autowired
	JwtUtils jwtUtils;
	
	//Autentificação de usuário
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest){
		
		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
		
		SecurityContextHolder.getContext().setAuthentication(authentication);
		
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		
		ResponseCookie jwtCookie = jwtUtils.generateJwtCookie(userDetails);
		
		List<String> roles = userDetails.getAuthorities()
											.stream()
											.map(item -> item.getAuthority())
											.collect(Collectors.toList());
		
		return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, jwtCookie.toString())
								  .body(new UserInfoResponse(userDetails.getId(), 
										  					 userDetails.getUsername(), 
										  					 userDetails.getEmail(), 
										  					 roles));
		
	}
	
	@PostMapping("/signup")
	public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signupRequest){
		
		if(userRepository.existsByUsername(signupRequest.getUsername())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Erro: esse usuário já existe!"));
		}
		
		if(userRepository.existsByEmail(signupRequest.getEmail())) {
			return ResponseEntity.badRequest().body(new MessageResponse("Erro: email já em uso!"));
		}
		
		User user = new User(signupRequest.getUsername(), 
							 signupRequest.getEmail(), 
							 encoder.encode(signupRequest.getPassword()));
		
		Set<String> strRoles = signupRequest.getRole();
		
		Set<Role> roles = new HashSet<>();
		
		if(strRoles == null) {
			Role userRole = roleRepository.findByName(EnumRole.ROLE_PROPRIETARIO)
										  .orElseThrow( () -> new RuntimeException("Erro: role não encontrada.") );
			
			roles.add(userRole);
		} else {
			
			strRoles.forEach(role -> {
				
				switch(role) {
					
				case "cuidador":
					Role cuidadorRole = roleRepository.findByName(EnumRole.ROLE_CUIDADOR)
													  .orElseThrow(() -> new RuntimeException("Erro: role não encontrada."));
					roles.add(cuidadorRole);
					break;
					
				case "proprietario":
					Role proprietarioRole = roleRepository.findByName(EnumRole.ROLE_CUIDADOR)
													  .orElseThrow(() -> new RuntimeException("Erro: role não encontrada."));
					roles.add(proprietarioRole);
					break;
				default:
					Role userRole = roleRepository.findByName(EnumRole.ROLE_PROPRIETARIO)
					  							  .orElseThrow( () -> new RuntimeException("Erro: role não encontrada.") );
					roles.add(userRole);
					
				}
				
			});
			
		}
		
		user.setRoles(roles);
		userRepository.save(user);
		
		return ResponseEntity.ok(new MessageResponse("Usuario registrado com sucesso!"));
		
	}
	
	@PostMapping("/signout")
	public ResponseEntity<?> logoutUser() {
		
		ResponseCookie cookie = jwtUtils.getCleanJwtCookie();
		
		return ResponseEntity.ok().header(HttpHeaders.SET_COOKIE, cookie.toString())
								  .body(new MessageResponse("Você fez logout!"));
		
	}
	
	
}
