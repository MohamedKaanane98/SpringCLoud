package com.example.Inventory_service;

import com.example.Inventory_service.Entities.Product;
import com.example.Inventory_service.repositories.ProductRepositorie;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class InventoryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryServiceApplication.class, args);
	}
	@Bean
	CommandLineRunner start(ProductRepositorie productRepositorie, RepositoryRestConfiguration repositoryRestConfiguration){
		return args -> {
			repositoryRestConfiguration.exposeIdsFor(Product.class);
			productRepositorie.save(new Product(null,"Computer",900));
			productRepositorie.save(new Product(null,"Phone",1200));
			productRepositorie.save(new Product(null,"Printer",2500));
		};
	}

}
