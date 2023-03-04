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
@Table(name= "PRODUCT_TABLE")
public class Product {
	
	@Id
	@GeneratedValue
	private int id;
	private String name;
	private String imgurl;
	private int quantity;
	private double price;
	
	
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(int id, String name, String imgurl, int quantity, double price) 
	{
		super();
		this.id = id;
		this.name = name;
		this.imgurl = imgurl;
		this.quantity = quantity;
		this.price = price;
		
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
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getImgurl() {
		return imgurl;
	}
	public void setImgurl(String imgurl) {
		this.imgurl = imgurl;
	}
	
	
	
}
