package com.shopping_cart.ShoppingCartBackend.repository;

import java.util.List;

//import java.util.List;
//import java.util.Optional;
//
//import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;


import com.shopping_cart.ShoppingCartBackend.entity.Cart;


public interface CartRepository extends JpaRepository<Cart, Integer> {
	
	public void deleteByProductId(int productId);
	public Cart findByProductIdAndUserId(int productId,int userId);
	public List<Cart> findByUserId(int userId);
	
}
