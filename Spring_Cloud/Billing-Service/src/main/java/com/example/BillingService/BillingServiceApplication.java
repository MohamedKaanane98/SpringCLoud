package com.example.BillingService;


import com.example.BillingService.Models.Customer;
import com.example.BillingService.Models.Produit;
import com.example.BillingService.entities.Bill;
import com.example.BillingService.entities.ProductItem;
import com.example.BillingService.repositories.BillRepository;
import com.example.BillingService.repositories.ProductItemRepo;
import com.example.BillingService.services.CustomerService;
import com.example.BillingService.services.ProductService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.hateoas.PagedModel;

import java.util.Date;

@SpringBootApplication
@EnableFeignClients
public class BillingServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BillingServiceApplication.class, args);

	}

	@Bean
	CommandLineRunner start(ProductItemRepo productItemRepo,
							BillRepository billRepository,
							CustomerService customerService,
							ProductService productService,
							RepositoryRestConfiguration repositoryRestConfiguration){
		return args -> {
			repositoryRestConfiguration.exposeIdsFor(Bill.class);
			Customer c1 = customerService.findCustomerById(1L);
			Bill b1 = billRepository.save(new Bill(null,new Date(),c1.getId(),null,null));
			PagedModel <Produit> produits = productService.findAllProducts();
			Produit produits1 = productService.findProductById(4L);
			produits.getContent().forEach(produit -> {
				productItemRepo.save(new ProductItem(null,produit.getId(),produit.getPrice(),50,null,b1));
			});

			productItemRepo.save(new ProductItem(null,produits1.getId(),produits1.getPrice(),44,null,b1));

			Customer c2 = customerService.findCustomerById(2L);
			Bill b2 = billRepository.save(new Bill(null,new Date(),c2.getId(),null,null));
			produits.getContent().forEach(produit -> {
				productItemRepo.save(new ProductItem(null,produit.getId(),produit.getPrice(),50,null,b2));
			});
			Bill b3 = billRepository.save(new Bill(null,new Date(),c1.getId(),null,null));
			produits.getContent().forEach(produit -> {
				productItemRepo.save(new ProductItem(null,produit.getId(),produit.getPrice(),50,null,b3));
			});



		};
	}

}
