package com.shopping_cart.ShoppingCartBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

//import com.shopping_cart.ShoppingCartBackend.entity.Cart;
import com.shopping_cart.ShoppingCartBackend.entity.Nikon;

public interface NikonRepository extends JpaRepository<Nikon, Integer> {
	
	Nikon findByName(String name);
}
