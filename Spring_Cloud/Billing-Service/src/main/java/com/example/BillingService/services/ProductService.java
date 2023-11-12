package com.example.BillingService.services;

import com.example.BillingService.Models.Produit;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.hateoas.PagedModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(name = "INVENTORY-SERVICE")
public interface ProductService {
    @GetMapping("/products/{id}")
    public Produit findProductById(@PathVariable(name = "id") Long id);

    @GetMapping("/products")
    public PagedModel<Produit> findAllProducts();
}
