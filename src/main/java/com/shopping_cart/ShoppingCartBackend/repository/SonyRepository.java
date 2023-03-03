package com.shopping_cart.ShoppingCartBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopping_cart.ShoppingCartBackend.entity.Sony;

public interface SonyRepository extends JpaRepository<Sony, Integer> {
	Sony findByName(String name);
}
