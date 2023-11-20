package com.example.Customer_service.Repositories;

import com.example.Customer_service.Entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RepositoryRestResource
public interface CustomerRepositories extends JpaRepository<Customer, Long> {

}
