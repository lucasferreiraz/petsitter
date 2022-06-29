package com.techcoders.petsitter.models;

public class Scheduling {
	
	private Long id;
	
	private Integer totalDays;
	
	private Double totalValue;
	
	private String description;
	
	public Scheduling() {
		
	}

	public Scheduling(Integer totalDays, Double totalValue, String description) {
		super();
		this.totalDays = totalDays;
		this.totalValue = totalValue;
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

	public Double getTotalValue() {
		return totalValue;
	}

	public void setTotalValue(Double totalValue) {
		this.totalValue = totalValue;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
	
}
