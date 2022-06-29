package com.techcoders.petsitter.models;

public class Service {
	
	private Long id;
	
	private Double dailyValue;
	
	private String description;
	
	public Service() {
		
	}

	public Service(Double dailyValue, String description) {
		super();
		this.dailyValue = dailyValue;
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
	
	
	
}
