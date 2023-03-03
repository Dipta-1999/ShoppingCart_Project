package com.shopping_cart.ShoppingCartBackend.controller;

import java.util.List;
import java.lang.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.shopping_cart.ShoppingCartBackend.entity.Canon;
import com.shopping_cart.ShoppingCartBackend.entity.Cart;
import com.shopping_cart.ShoppingCartBackend.entity.Nikon;
import com.shopping_cart.ShoppingCartBackend.entity.Product;
import com.shopping_cart.ShoppingCartBackend.entity.Sony;
import com.shopping_cart.ShoppingCartBackend.entity.User;
import com.shopping_cart.ShoppingCartBackend.entity.Wishlist;
import com.shopping_cart.ShoppingCartBackend.repository.CartRepository;
import com.shopping_cart.ShoppingCartBackend.repository.ProductFilterRepository;
import com.shopping_cart.ShoppingCartBackend.repository.ProductRepository;
import com.shopping_cart.ShoppingCartBackend.repository.UserRepository;
import com.shopping_cart.ShoppingCartBackend.repository.WishlistRepository;
//import com.shopping_cart.ShoppingCartBackend.service.CartService;
import com.shopping_cart.ShoppingCartBackend.service.ProductService;

@RestController

@CrossOrigin(origins = "http://localhost:4200/")


public class ProductController{
	
	@Autowired
	private ProductService service;
	@Autowired
	private ProductFilterRepository fil_repo;

	
	@PostMapping("addProduct")
	public Product addProduct(@RequestBody Product product)
	{
		return service.saveProduct(product);
	}
	@PostMapping("addNikon")
	public Nikon addNikon(@RequestBody Nikon product)
	{
		return service.saveNikon(product);
	}
	@PostMapping("addCanon")
	public Canon addCanon(@RequestBody Canon product)
	{
		return service.saveCanon(product);
	}
	@PostMapping("addSony")
	public Sony addSony(@RequestBody Sony product)
	{
		return service.saveSony(product);
	}
	
	
	
	
	
	@PostMapping("addProducts")
	public List<Product> addProducts(@RequestBody List<Product> products)
	{
		return service.saveProducts(products);
	}
	@PostMapping("addNikons")
	public List<Nikon> addNikons(@RequestBody List<Nikon> products)
	{
		return service.saveNikons(products);
	}
	@PostMapping("addCanons")
	public List<Canon> addCanons(@RequestBody List<Canon> products)
	{
		return service.saveCanons(products);
	}
	@PostMapping("addSonys")
	public List<Sony> addSonys(@RequestBody List<Sony> products)
	{
		return service.saveSonys(products);
	}
	
	
	
	
	
	@GetMapping("products")
	public List<Product> findAllProducts()
	{
		return service.getProducts();
	}
	@GetMapping("nikons")
	public List<Nikon> findAllNikons()
	{
		return service.getNikon();
	}
	@GetMapping("canons")
	public List<Canon> findAllCanons()
	{
		return service.getCanon();
	}
	@GetMapping("sonys")
	public List<Sony> findAllSonys()
	{
		return service.getSony();
	}
	
	
	@GetMapping("filter/{start}/{end}")
    public List<Product> filter(@PathVariable double start, @PathVariable double end) {
		List<Product>resp= (List<Product>)fil_repo.findByPriceBetween(start, end);
		return resp;
       
    }
	
	
	
	
	@GetMapping("productById/{id}")
	public Product findProductById(@PathVariable int id)
	{
		return service.getProductById(id);
	}
	@GetMapping("productByName/{name}")
	public Product findProductByName(@PathVariable String name)
	{
		return service.getProductByName(name);
	}
	
	
	
	
	
	@PutMapping("update")
	public Product updateProduct(@RequestBody Product product)
	{
		return service.updateProduct(product);
	}
	@PutMapping("updateNikon")
	public Nikon updateNikon(@RequestBody Nikon product)
	{
		return service.updateNikon(product);
	}
	@PutMapping("updateCanon")
	public Canon updateCanon(@RequestBody Canon product)
	{
		return service.updateCanon(product);
	}
	@PutMapping("updateSony")
	public Sony updateSony(@RequestBody Sony product)
	{
		return service.updateSony(product);
	}
	
	
	
	
	
	
	
	@DeleteMapping("delete/{id}")
	public String deleteProduct(@PathVariable int id)
	{
		return service.deleteProduct(id);
	}
	@DeleteMapping("deleteNikon/{id}")
	public String deleteNikon(@PathVariable int id)
	{
		return service.deleteNikon(id);
	}
	@DeleteMapping("deleteCanon/{id}")
	public String deleteCanon(@PathVariable int id)
	{
		return service.deleteCanon(id);
	}
	@DeleteMapping("deleteSony/{id}")
	public String deleteSony(@PathVariable int id)
	{
		return service.deleteSony(id);
	}
}
