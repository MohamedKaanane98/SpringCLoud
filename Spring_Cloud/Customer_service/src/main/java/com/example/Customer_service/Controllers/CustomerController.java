package com.example.Customer_service.Controllers;

import com.example.Customer_service.Repositories.CustomerRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {
    @Autowired
    private CustomerRepositories customerRepositories;

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
        customerRepositories.deleteById(id);
    }
}
