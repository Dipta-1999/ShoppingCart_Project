package com.shopping_cart.ShoppingCartBackend.controller;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.shopping_cart.ShoppingCartBackend.entity.Cart;
import com.shopping_cart.ShoppingCartBackend.entity.MyOrder;
import com.shopping_cart.ShoppingCartBackend.entity.User;
//import com.shopping_cart.ShoppingCartBackend.entity.User;
import com.shopping_cart.ShoppingCartBackend.repository.OrderRepository;

@RestController

@CrossOrigin(origins = "http://localhost:4200")
public class OrderController {
	@Autowired
	private OrderRepository order_repo;
	
	
	@PostMapping("/addOrder")
//	public void addOrder(@PathVariable int userId, @RequestBody Cart c)
//	{
////		User user=new User();
////		//Cart c=new Cart();
////		//cart=new ArrayList<Cart>();
////		MyOrder ord=new MyOrder();
//////		for(Cart c: cart)
//////		{
////			System.out.println(order_repo.findByCartIdAndUserId(c.getId(),userId));
////			if(order_repo.findByCartIdAndUserId(c.getId(),userId)==null)
////			{
////				ord.setUserId(userId);
////				ord.setCart_id(c.getId());
////				//ord.setProductId(c.getProduct_id());
////				//ord.setAddress(ord.getAddress());
////				//ord.setUser_phone(ord.getUser_phone());
////				ord.setQuantity(c.getQuantity());
////				ord.setPrice(c.getPrice());
////				
////			}
////			else
////			{
////				System.out.print("No items have beeen selected");
////				order_repo.save(ord);
////			}
//		//}
//		
//		
//	}
	public MyOrder addOrder(@RequestBody MyOrder myOrder)throws IOException, ParseException {
		SimpleDateFormat dateParser = new SimpleDateFormat ("dd/MM/yyyy"); //Format for input
        //int date=myOrder.getDate();
        Date dn = new Date();
        SimpleDateFormat dateFormatter = new SimpleDateFormat ("dd-MM-yyyy"); //Format for output
        myOrder.setDate(dateFormatter.format(dn)); //Printing the date
        System.out.println(dateFormatter.format(dn));
		return order_repo.save(myOrder);
	}
	@GetMapping("/myOrderHistory")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<MyOrder> findMyOrder()
	{
		return order_repo.findAll();
		
	}

	@GetMapping("/myOrders/{userId}")
	public List<MyOrder> findAllOrders(@PathVariable int userId)
	{
		return order_repo.findByUserId(userId);
	}
	@DeleteMapping("/deleteOrder/{id}")
	public void deleteOrder(@PathVariable("id") int id)
	{
		order_repo.deleteById(id);
	}
}
