package com.example.Customer_service.Repositories;

import com.example.Customer_service.Entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CustomerRepositories extends JpaRepository<Customer, Long> {
}
