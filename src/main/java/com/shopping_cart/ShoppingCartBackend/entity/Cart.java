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
@Table(name= "CART_TABLE")
public class Cart {
	
	@Id
	@GeneratedValue
	private int id;
	private int productId;
	
	private int userId;
	
	private String name;
	private int quantity;
	private double price;
	//private Product produ;
	
	
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Cart(int id, int prod, int use, String name, int price, int quantity) 
	{
		super();
		this.id = id;
		this.productId= prod;
		
		this.userId=use;
		
		this.name = name;
		this.price = price;
		this.quantity = quantity;
		
	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	
	
	public long getProduct_id() {
		return productId;
	}

	public void setProduct_id(int product_id) {
		this.productId = product_id;
	}
	
	
	
	
	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
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
	
	
	
}
