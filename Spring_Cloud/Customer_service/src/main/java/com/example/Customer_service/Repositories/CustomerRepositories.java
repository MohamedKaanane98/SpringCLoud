package com.example.Customer_service.Repositories;

import com.example.Customer_service.Entities.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RepositoryRestResource
public interface CustomerRepositories extends JpaRepository<Customer, Long> {
    @RestResource(path="name")
    Page<Customer> findByName(@Param("name") String Name, Pageable pageable);

    @RestResource(path="email")
    Page<Customer> findByEmail(@Param("email") String Email, Pageable pageable);
}
