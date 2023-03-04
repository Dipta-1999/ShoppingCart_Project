package com.shopping_cart.ShoppingCartBackend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.shopping_cart.ShoppingCartBackend.entity.MyOrder;

public interface OrderRepository extends JpaRepository<MyOrder, Integer> {
	public MyOrder findByCartIdAndUserId(int cartId, int userId);
	
	public List<MyOrder> findByUserId(int userId);
}
