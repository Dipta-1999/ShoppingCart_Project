package com.shopping_cart.ShoppingCartBackend.repository;

import java.io.Serializable;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shopping_cart.ShoppingCartBackend.entity.Product;

public interface ProductFilterRepository extends JpaRepository<Product, Integer> {
	public List<Product> findByPriceBetween(double start, double end);

}
