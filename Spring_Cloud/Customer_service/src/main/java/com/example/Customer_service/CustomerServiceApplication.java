package com.example.Customer_service;

import com.example.Customer_service.Entities.Customer;
import com.example.Customer_service.Repositories.CustomerRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class CustomerServiceApplication {


	public static void main(String[] args) {

		SpringApplication.run(CustomerServiceApplication.class, args);
	}
	@Bean
	CommandLineRunner start(CustomerRepositories customerRepositories, RepositoryRestConfiguration repositoryRestConfiguration){
		return args -> {
			repositoryRestConfiguration.exposeIdsFor(Customer.class);
			customerRepositories.save(new Customer(null,"EMSI","emsi@emsi-edu.ma"));
			customerRepositories.save(new Customer(null,"ENCG","encg@encg-edu.ma"));
			customerRepositories.save(new Customer(null,"FST","fst@fst-edu.ma"));
		};
	}
}
