package com.example.BillingService.repositories;

import com.example.BillingService.entities.ProductItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProductItemRepo extends JpaRepository<ProductItem,Long> {

}
