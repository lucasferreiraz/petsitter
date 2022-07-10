package com.techcoders.petsitter.models;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "schedulings")
public class Scheduling {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Integer totalDays;
	
	private Double dailyValue;
	
	@JsonFormat(pattern = "dd/MM/yyyy", shape = Shape.STRING)
	private String initialDate;
	
	
	@JsonFormat(pattern = "dd/MM/yyyy", shape = Shape.STRING)
	private String finalDate;
	
	
	private String description;
	
	@JsonBackReference
	@OneToOne
	@JoinColumn(name = "userId")
	private User user;
	
	/*
	@JsonManagedReference
	@OneToOne(cascade = CascadeType.ALL, mappedBy = "scheduling")
	private Service service;
	*/
	
	public Scheduling() {
		
	}

	public Scheduling(Integer totalDays, Double dailyValue, String description) {
		super();
		this.totalDays = totalDays;
		this.dailyValue = dailyValue;
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getTotalDays() {
		return totalDays;
	}

	public void setTotalDays(Integer totalDays) {
		this.totalDays = totalDays;
	}

	public Double getDailyValue() {
		return dailyValue;
	}

	public void setDailyValue(Double dailyValue) {
		this.dailyValue = dailyValue;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
	/*
	public Service getService() {
		return service;
	}

	public void setService(Service service) {
		this.service = service;
	}
	*/
	
	public String getInitialDate() {
		return initialDate;
	}

	public void setInitialDate(String initialDate) {
		this.initialDate = initialDate;
	}
	
	
	public String getFinalDate() {
		return finalDate;
	}

	public void setFinalDate(String finalDate) {
		this.finalDate = finalDate;
	}
	
	
	
	
	
	
}
