package com.shopping_cart.ShoppingCartBackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name= "CANON_TABLE")
public class Canon {
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private String imgurl;
	private String details;
	//private int quantity;
	private double price;
	public Canon(int id, String name, String imgurl, String details, double price) {
		super();
		this.id = id;
		this.name = name;
		this.imgurl = imgurl;
		this.details = details;
		this.price = price;
	}
	public Canon() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImgurl() {
		return imgurl;
	}
	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}
	public String getDetails() {
		return details;
	}
	public void setDetails(String details) {
		this.details = details;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
}
