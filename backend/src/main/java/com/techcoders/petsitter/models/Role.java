package com.techcoders.petsitter.models;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.techcoders.petsitter.models.enums.EnumRole;

@Entity
@Table(name = "roles")
public class Role {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Enumerated(EnumType.STRING)
	private EnumRole nome;
	
	public Role() {
		
	}

	public Role(Integer id, EnumRole nome) {
		this.id = id;
		this.nome = nome;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public EnumRole getNome() {
		return nome;
	}

	public void setNome(EnumRole nome) {
		this.nome = nome;
	}
	
	
	
}
