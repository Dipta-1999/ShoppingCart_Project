package com.shopping_cart.ShoppingCartBackend.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name= "ORDER_TABLE")
public class MyOrder {
	@Id
	@GeneratedValue
	private int id;
	private int cartId;
	private int productId;
	private int userId;
	//private String user_name;
	//@NonNull
	//private int user_phone;
	private String product_name;
	private int quantity;
	private double price;
//	@NonNull
//	private String address;
	
	@DateTimeFormat(pattern = "dd-MM-yyyy")
	@Column(name = "Date")
	private String date;
	
	public MyOrder() {
		this.id = 0;
		this.cartId = 0;
		this.productId = 0;
		this.userId = 0;
		this.product_name = null;
		this.quantity = 0;
		this.price = 0;
		// TODO Auto-generated constructor stub
	}
	
	public MyOrder(int id, int cartId, int productId, int userId, String product_name, int quantity, double price, String date) 
	{		
		super();
		this.id = id;
		this.cartId = cartId;
		this.productId = productId;
		this.userId = userId;
		this.product_name = product_name;
		this.quantity = quantity;
		this.price = price;
		this.date=date;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	
	public int getCart_id() {
		return cartId;
	}
	public void setCart_id(int cartId) {
		this.cartId = cartId;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int l) {
		this.productId = l;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	
//	public int getUser_phone() {
//		return user_phone;
//	}
//	public void setUser_phone(int user_phone) {
//		this.user_phone = user_phone;
//	}
	public String getProduct_name() {
		return product_name;
	}
	public void setProduct_name(String product_name) {
		this.product_name = product_name;
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
//	public String getAddress() {
//		return address;
//	}
//	public void setAddress(String address) {
//		this.address = address;
//	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	
	
	
}
