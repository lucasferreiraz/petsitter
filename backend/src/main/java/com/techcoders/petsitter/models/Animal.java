package com.techcoders.petsitter.models;

public class Animal {
	
	private Integer id;
	
	private String name;
	
	private Double size;
	
	private Integer age;
	
	private String species;
	
	private String sex;
	
	public Animal() {
		
	}

	public Animal(String name, Double size, Integer age, String species, String sex) {
		super();
		this.name = name;
		this.size = size;
		this.age = age;
		this.species = species;
		this.sex = sex;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Double getSize() {
		return size;
	}

	public void setSize(Double size) {
		this.size = size;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public String getSpecies() {
		return species;
	}

	public void setSpecies(String species) {
		this.species = species;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}
	
	
	
	
}
