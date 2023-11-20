package com.example.Inventory_service.Controllers;

import com.example.Inventory_service.Entities.Product;
import com.example.Inventory_service.repositories.ProductRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductRepositorie productRepositorie;

    @GetMapping("/products")
    public List<Product> getProduct(){
        return productRepositorie.findAll();
    }

    @PostMapping("/Addproducts")
    public Product save(@RequestBody Product product){
        return productRepositorie.save(product);
    }


    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
        productRepositorie.deleteById(id);
    }


}
