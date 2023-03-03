package com.shopping_cart.ShoppingCartBackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.shopping_cart.ShoppingCartBackend.entity.Canon;
import com.shopping_cart.ShoppingCartBackend.entity.Nikon;
import com.shopping_cart.ShoppingCartBackend.entity.Product;
import com.shopping_cart.ShoppingCartBackend.entity.Sony;
import com.shopping_cart.ShoppingCartBackend.entity.User;
import com.shopping_cart.ShoppingCartBackend.repository.CanonRepository;
import com.shopping_cart.ShoppingCartBackend.repository.CartRepository;
import com.shopping_cart.ShoppingCartBackend.repository.NikonRepository;
import com.shopping_cart.ShoppingCartBackend.repository.ProductRepository;
import com.shopping_cart.ShoppingCartBackend.repository.SonyRepository;
import com.shopping_cart.ShoppingCartBackend.repository.UserRepository;
import com.shopping_cart.ShoppingCartBackend.repository.WishlistRepository;

@Service
public class ProductService {
	
	
	@Autowired
	private ProductRepository repository;
	@Autowired
	private CartRepository cartrepo;
	@Autowired
	private WishlistRepository wishlistrepo;
	@Autowired
	public UserRepository user_repo;
	@Autowired
	public NikonRepository nikon_repo;
	@Autowired
	public CanonRepository canon_repo;
	@Autowired
	public SonyRepository sony_repo;
	
	
	//PostMethods
	public Product saveProduct(Product product)
	{
		return repository.save(product);
	}
	public Nikon saveNikon(Nikon nik)
	{
		return nikon_repo.save(nik);
	}
	public Canon saveCanon(Canon can)
	{
		return canon_repo.save(can);
	}
	public Sony saveSony(Sony son)
	{
		return sony_repo.save(son);
	}
	
	
	//to save multiple products
	public List<Product> saveProducts(List<Product> products)
	{
		return repository.saveAll(products);
	}

	
	public List<Nikon> saveNikons(List<Nikon> nik)
	{
		return nikon_repo.saveAll(nik);
	}
	public List<Canon> saveCanons(List<Canon> can)
	{
		return canon_repo.saveAll(can);
	}
	public List<Sony> saveSonys(List<Sony> son)
	{
		return sony_repo.saveAll(son);
	}
	
	
	
	public List<Product> getProducts()
	{
		return repository.findAll();
	}
	public List<Nikon> getNikon()
	{
		return nikon_repo.findAll();
	}
	public List<Canon> getCanon()
	{
		return canon_repo.findAll();
	}
	public List<Sony> getSony()
	{
		return sony_repo.findAll();
	}
	
	
	
	//for single product
	public Product getProductById(int id)
	{
		return repository.findById(id).orElse(null);
	}
	
	public Product getProductByName(String name)
	{
		return repository.findByName(name);
	}	
	
	
	
	public String deleteProduct(int id)
	{
		repository.deleteById(id);
		return "product removed!! "+id;
	}
	
	public String deleteCart(int id)
	{
		cartrepo.deleteById(id);
		return "cart removed!! "+id;
	}
	public String deleteWishlist(int id)
	{
		wishlistrepo.deleteById(id);
		return "wishlist removed!! "+id;
	}
	public String deleteNikon(int id)
	{
		nikon_repo.deleteById(id);
		return "nikon product removed!!"+id;
		
	}
	public String deleteCanon(int id)
	{
		canon_repo.deleteById(id);
		return "canon product removed!!"+id;
		
	}
	public String deleteSony(int id)
	{
		sony_repo.deleteById(id);
		return "sony product removed!!"+id;
		
	}
	
	
	
	public Product updateProduct(Product product)
	{
		Product existingProduct= repository.findById(product.getId()).orElse(null);
		existingProduct.setImgurl(product.getImgurl());
		existingProduct.setName(product.getName());
		existingProduct.setQuantity(product.getQuantity());
		existingProduct.setPrice(product.getPrice());
		
		return repository.save(existingProduct);
	}
	public Nikon updateNikon(Nikon product)
	{
		Nikon existingProduct= nikon_repo.findById(product.getId()).orElse(null);
		existingProduct.setImgurl(product.getImgurl());
		existingProduct.setName(product.getName());
		existingProduct.setDetails(product.getDetails());
		existingProduct.setPrice(product.getPrice());
		return nikon_repo.save(existingProduct);
	}
	public Canon updateCanon(Canon product)
	{
		Canon existingProduct= canon_repo.findById(product.getId()).orElse(null);
		existingProduct.setImgurl(product.getImgurl());
		existingProduct.setName(product.getName());
		existingProduct.setDetails(product.getDetails());
		existingProduct.setPrice(product.getPrice());
		return canon_repo.save(existingProduct);
	}
	public Sony updateSony(Sony product)
	{
		Sony existingProduct= sony_repo.findById(product.getId()).orElse(null);
		existingProduct.setImgurl(product.getImgurl());
		existingProduct.setName(product.getName());
		existingProduct.setDetails(product.getDetails());
		existingProduct.setPrice(product.getPrice());
		return sony_repo.save(existingProduct);
	}
	
	
	
	
	
	
	//Users
	public User saveUser(User user) {
		
		return user_repo.save(user);
	}
	
	public User fetchUserByEmailId(String emailId) 
	{
		return user_repo.findByEmailId(emailId);
		
	}
	public User fetchUserByEmailIdAndPassword(String emailId, String password) 
	{
		return user_repo.findByEmailIdAndPassword(emailId, password);
		
	}
	public User updatePassword(User user)
	{
		User existingUser= user_repo.findByEmailId(user.getEmailId());
		existingUser.setPassword(user.getPassword());
		return user_repo.save(existingUser);
	}
	
}
