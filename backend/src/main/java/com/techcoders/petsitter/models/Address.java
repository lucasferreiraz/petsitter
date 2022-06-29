package com.techcoders.petsitter.models;

public class Address {
	
	private Long id;
	
	private String number;
	
	private String district;
	
	private String cep;
	
	private String complement;
	
	public Address() {
		
	}

	public Address(String number, String district, String cep, String complement) {
		super();
		this.number = number;
		this.district = district;
		this.cep = cep;
		this.complement = complement;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNumber() {
		return number;
	}

	public void setNumber(String number) {
		this.number = number;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getComplement() {
		return complement;
	}

	public void setComplement(String complement) {
		this.complement = complement;
	}
	
	
	
}
