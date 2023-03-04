package com.shopping_cart.ShoppingCartBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopping_cart.ShoppingCartBackend.entity.Canon;

public interface CanonRepository extends JpaRepository<Canon, Integer> {
	Canon findByName(String name);
 
}
