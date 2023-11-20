package com.example.Customer_service.Controllers;

import com.example.Customer_service.Entities.Customer;
import com.example.Customer_service.Repositories.CustomerRepositories;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {
    @Autowired
    private CustomerRepositories customerRepositories;

    @GetMapping("/customers")
    public List<Customer> getCustomer(){
        return customerRepositories.findAll();
    }


    @PostMapping("/Addcustomer")
    public Customer save(@RequestBody Customer customer){
        return customerRepositories.save(customer);
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Long id){
        customerRepositories.deleteById(id);
    }


}
