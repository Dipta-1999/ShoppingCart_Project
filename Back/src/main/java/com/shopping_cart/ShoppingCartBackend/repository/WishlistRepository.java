package com.shopping_cart.ShoppingCartBackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.shopping_cart.ShoppingCartBackend.entity.Wishlist;

public interface WishlistRepository extends JpaRepository<Wishlist, Integer> {
	public Wishlist findByProductIdAndUserId(int productId, int userId);
	public List<Wishlist> findByUserId(int userId);
	public void deleteByProductId(int productId);
}
