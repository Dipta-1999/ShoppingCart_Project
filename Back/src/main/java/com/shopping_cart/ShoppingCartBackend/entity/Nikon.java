package com.shopping_cart.ShoppingCartBackend.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name= "NIKON_TABLE")
public class Nikon 
{
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private String imgurl;
	private String details;
	//private int quantity;
	private double price;
	
	
	
	public Nikon(int id, String name, String imgurl, String det, int price) {
		super();
		this.id = id;
		this.name = name;
		this.imgurl = imgurl;
		this.details=det;
//		this.quantity = quantity;
		this.price = price;
	}



	public Nikon() {
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
	
	


//	public int getQuantity() {
//		return quantity;
//	}
//
//
//
//	public void setQuantity(int quantity) {
//		this.quantity = quantity;
//	}
//
//
//
	public double getPrice() {
		return price;
	}



	public void setPrice(double price) {
		this.price = price;
	}
	
	
	
	
}
