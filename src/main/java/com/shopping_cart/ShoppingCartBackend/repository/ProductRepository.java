package com.shopping_cart.ShoppingCartBackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.shopping_cart.ShoppingCartBackend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

	Product findByName(String name);
	
	//@Query("SELECT p FROM Product p WHERE CONCAT(p.price) LIKE %?1%")
	
	
}
