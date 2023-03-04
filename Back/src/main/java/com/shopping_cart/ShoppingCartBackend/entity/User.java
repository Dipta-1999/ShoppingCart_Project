
package com.shopping_cart.ShoppingCartBackend.entity;
import java.util.Base64;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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

@Table(name= "User__Table")

public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	//@NonNull // @NonNull annotation tells springboot that if user gives no username while giving input then -> throw an exception / error.
	private String userName;
	//@NonNull
	private String emailId;
	//@NonNull
	private String password;	
	
	//private String resetToken;
	
	//private boolean enabled;
	
	
	public User() {
		
	}
	
	
	public User(int id, String userName, String emailId, String password) {
		super();
		this.id = id;
		this.userName = userName;
		this.emailId = emailId;
		this.password = password;
	}


	//@GeneratedValue
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPassword() {
		//byte[] encrypt = Base64.getEncoder().encode(password.getBytes());
		return password;
	}
	public void setPassword(String password) {
		//byte[] encrypt = Base64.getEncoder().encode(password.getBytes());
		this.password = password;
	}
//	public String getResetToken() {
//		return resetToken;
//	}
//	public void setResetToken(String resetToken) {
//		this.resetToken = resetToken;
//	}
//	public boolean isEnabled() {
//		return enabled;
//	}
//	public void setEnabled(boolean enabled) {
//		this.enabled = enabled;
//	}


	
		

}
