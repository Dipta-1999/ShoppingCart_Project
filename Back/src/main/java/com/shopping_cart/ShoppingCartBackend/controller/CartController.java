package com.shopping_cart.ShoppingCartBackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.shopping_cart.ShoppingCartBackend.entity.Cart;
import com.shopping_cart.ShoppingCartBackend.entity.Product;
import com.shopping_cart.ShoppingCartBackend.repository.CartRepository;
import com.shopping_cart.ShoppingCartBackend.service.ProductService;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
public class CartController {
	@Autowired
	private ProductService service;
	
	@Autowired
	private CartRepository cartrepo;
	
	//for Carts
		@PostMapping("/addCart/{userId}")
		public void addProductToCart(@RequestBody Product product, @PathVariable int userId){
		
	      Cart cart = new Cart();
	      System.out.println(cartrepo.findByProductIdAndUserId(product.getId(),userId));
	      
	      if(cartrepo.findByProductIdAndUserId(product.getId(),userId)==null) {
	      
	    	  
	    	  cart.setUserId(userId);
	    	  
	          cart.setQuantity(1);
	          cart.setProduct_id(product.getId());
	          cart.setName(product.getName());
	          cart.setPrice(product.getPrice());
	          
	          cartrepo.save(cart);
	      }
	      else {
	    	  cart=cartrepo.findByProductIdAndUserId(product.getId(),userId);
	          cart.setQuantity(cart.getQuantity()+1);
	          cartrepo.save(cart);
	      }
	      
		}
			

		  
		
		@GetMapping("carts/{userId}")
		public List<Cart> findAllCart(@PathVariable int userId)
		{
			return cartrepo.findByUserId(userId);
			
		}
		
		@GetMapping("carts")
		public List<Cart> findAllCart()
		{
			return cartrepo.findAll();
		}
		
		//@CrossOrigin(origins = "http://localhost:4200/")
		@DeleteMapping("/deleteCart/{id}")
		public String deleteCart(@PathVariable("id") int id)
		{
			//Cart cart = new Cart();
			return service.deleteCart(id);
			//cartrepo.save();
		}

}
