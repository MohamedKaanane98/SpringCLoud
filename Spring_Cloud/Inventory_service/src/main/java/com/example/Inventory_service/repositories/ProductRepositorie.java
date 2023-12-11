package com.example.Inventory_service.repositories;

import com.example.Inventory_service.Entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@RepositoryRestResource
public interface ProductRepositorie extends JpaRepository<Product,Long> {
    @RestResource(path="keyword", rel="keyword")
    Page<Product> findAllByNameContainingIgnoreCase(@Param("name") String name, Pageable pageable);
}

