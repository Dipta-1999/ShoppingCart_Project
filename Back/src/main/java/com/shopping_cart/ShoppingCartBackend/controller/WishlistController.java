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

import com.shopping_cart.ShoppingCartBackend.entity.Product;
import com.shopping_cart.ShoppingCartBackend.entity.Wishlist;
import com.shopping_cart.ShoppingCartBackend.repository.WishlistRepository;
import com.shopping_cart.ShoppingCartBackend.service.ProductService;

@RestController

@CrossOrigin(origins = "http://localhost:4200/")
public class WishlistController {
	
	@Autowired
	private ProductService service;
	
	@Autowired
	private WishlistRepository wishlistrepo;
	
	//for wishlist
		@PostMapping("addWishlist/{userId}")
		public void addProductToWishlist(@RequestBody Product product, @PathVariable int userId){
	      Wishlist wishlist = new Wishlist();
	      System.out.println(wishlistrepo.findByProductIdAndUserId(product.getId(),userId));
	      if(wishlistrepo.findByProductIdAndUserId(product.getId(),userId)==null) {
	    	  
	    	  wishlist.setUserId(userId);
	          wishlist.setProductId(product.getId());
	          wishlist.setName(product.getName());
	          wishlist.setPrice(product.getPrice());
	          wishlistrepo.save(wishlist);
	      }
	      else {
	    	  wishlist=wishlistrepo.findByProductIdAndUserId(product.getId(),userId);
	    	  wishlistrepo.save(wishlist); 
	      }
	      
		}
		
		@GetMapping("wishlist/{userId}")
		public List<Wishlist> findAllWishlist(@PathVariable int userId)
		{
			return wishlistrepo.findByUserId(userId);
			
		}
		
		@DeleteMapping("deleteWishlist/{id}")
		public String deleteWishlist(@PathVariable("id") int id)
		{
			return service.deleteWishlist(id);
		}

}
