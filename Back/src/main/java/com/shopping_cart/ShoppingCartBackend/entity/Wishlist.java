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
@Table(name="WISHLIST_TABLE")

public class Wishlist {
	@Id
	@GeneratedValue
	private int id;
	private int userId;
	private int productId;
	private String name;
	private double price;
	
	
	
	
	public Wishlist(int id, int userId, int productId, String name, double price) {
		super();
		this.id = id;
		this.userId = userId;
		this.productId = productId;
		this.name = name;
		this.price = price;
	}
	public Wishlist() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	
	
	
}
