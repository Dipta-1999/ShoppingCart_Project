package com.shopping_cart.ShoppingCartBackend.repository;

import java.util.Optional;

//import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopping_cart.ShoppingCartBackend.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
	public User findByEmailId(String emailId);
	public User findByEmailIdAndPassword(String emailId, String password);
	//User findByResetToken(String resetToken);
	//public void save(User user);
}
