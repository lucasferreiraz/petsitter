package com.techcoders.petsitter.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "usuario",
		uniqueConstraints = {
        @UniqueConstraint(columnNames = "nome_usuario"),
        @UniqueConstraint(columnNames = "email"),
        @UniqueConstraint(columnNames = "cpf")
    })
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "nome_usuario")
	@NotBlank
	private String username;
	
	@NotBlank
	private String cpf;
	
	@Column(name = "endereco")
	@NotBlank
	private String address;
	
	@NotBlank
	@Email
	private String email;
	
	@Column(name = "senha")
	@NotBlank
	private String password;
	
	@ManyToMany
	@JoinTable(name = "usuario_role", 
    		   joinColumns = @JoinColumn(name = "userId"),
    		   inverseJoinColumns = @JoinColumn(name = "roleId"))
	private Set<Role> roles = new HashSet<>();
	
	public User() {
		
	}

	public User(Long id, String username, String cpf, String address, String email, String password) {
		this.id = id;
		this.username = username;
		this.cpf = cpf;
		this.address = address;
		this.email = email;
		this.password = password;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}	
	
}
