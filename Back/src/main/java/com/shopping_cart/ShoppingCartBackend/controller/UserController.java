package com.shopping_cart.ShoppingCartBackend.controller;

import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.shopping_cart.ShoppingCartBackend.entity.User;
import com.shopping_cart.ShoppingCartBackend.repository.UserRepository;
//import com.shopping_cart.ShoppingCartBackend.service.EmailService;
import com.shopping_cart.ShoppingCartBackend.service.ProductService;
//import com.shopping_cart.ShoppingCartBackend.service.UserService;

//@SuppressWarnings("unused")
@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController 
{

	@Autowired
	private ProductService service;
	@Autowired
	private UserRepository user_repo;
	
	
	
	@PostMapping("registerUsers")
	@CrossOrigin(origins = "http://localhost:4200/")
	public User RegisterUser(@RequestBody User user) throws Exception {
		String tempEmailId= user.getEmailId();
		String tempPass= user.getPassword();
		String temppass= tempPass;
		//String tempUserName= user.getUserName();
		byte[] encrypt = Base64.getEncoder().encode(tempPass.getBytes());
		//
		//String e=encrypt.toString();
		
		System.out.println("  reg ec "+new String(encrypt));
		
		byte[] decrypt = Base64.getDecoder().decode(encrypt);
		String d=decrypt.toString();
		System.out.println("  reg dc "+ new String(decrypt));
		
		if(tempEmailId !=null && "".equals(tempEmailId) == false)
		{
			User userObj1 = service.fetchUserByEmailId(tempEmailId);
			user.setPassword(new String(encrypt));
			if(userObj1!=null) 
			{
				throw new Exception("user with " + tempEmailId + " is already exist");
			}
			
		}
		User userObj = null;
		
		userObj = service.saveUser(user);
		user.setPassword(new String(decrypt));
		System.out.println("   final pass "+user.getPassword());
		return userObj;
	}
	
	
	@DeleteMapping("deleteUser/{id}")
	public void DeleteUser(@PathVariable int id) {
		User user=new User();
		user_repo.deleteById(id);
		System.out.println("removed"+ user.getEmailId());
	
	}

	
	
	@PostMapping("loginUsers")
	@CrossOrigin(origins = "http://localhost:4200/")
	public User LoginUser(@RequestBody User user)throws Exception
	{
		//user.setPassword(dc);
		String tempEmailId = user.getEmailId();
		String tempPass = user.getPassword();
		System.out.print(tempPass);
		User user_obj=null;
		byte[] encrypt = Base64.getEncoder().encode(tempPass.getBytes());
		
		//String e= encrypt.toString();
		byte[] decrypt = Base64.getDecoder().decode(encrypt);
		String d =new String(decrypt);
		System.out.println("  log ec "+new String(encrypt));
		System.out.println("  Log dc "+d);
//		user.setPassword(d);
		if(tempEmailId != null && new String(encrypt) != null)
		{
			user_obj = service.fetchUserByEmailIdAndPassword(tempEmailId, new String(encrypt));
			
		}
		if(user_obj == null)
		{
			throw new Exception("Bad Credentials");
		}
		
		return user_obj;
	}
	
	@GetMapping("users")
	//@CrossOrigin(origins = "http://localhost:4200/")
	public List<User> findAllUser()
	{
		return user_repo.findAll();
				
	}
	
	@PutMapping("updatePsssword")
	public User updatePassword(@RequestBody User user) {
		return service.updatePassword(user);
	}
	
	
}
