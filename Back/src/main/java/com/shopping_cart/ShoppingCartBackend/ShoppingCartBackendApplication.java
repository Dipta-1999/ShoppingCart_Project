package com.shopping_cart.ShoppingCartBackend;

import java.util.Arrays;

//import java.util.stream.Stream;

//import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;

//@ComponentScan(basePackages = {"ShoppingCartBackend.repository", "ShoppingCartBackend.controller"})


//@EnableJpaRepositories("ShoppingCartBackend.repository")
//@EnableWebSecurity
@SpringBootApplication
//@EnableEncryptableProperties

public class ShoppingCartBackendApplication {
	
	
	public static void main(String[] args) 
	{
		SpringApplication.run(ShoppingCartBackendApplication.class, args);
	}
}
