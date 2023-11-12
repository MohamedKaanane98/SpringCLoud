package com.example.Inventory_service.repositories;

import com.example.Inventory_service.Entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ProductRepositorie extends JpaRepository<Product,Long> {
}
