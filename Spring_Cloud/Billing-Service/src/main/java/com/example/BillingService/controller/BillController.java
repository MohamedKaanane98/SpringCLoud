package com.example.BillingService.controller;

import com.example.BillingService.entities.Bill;
import com.example.BillingService.repositories.BillRepository;
import com.example.BillingService.repositories.ProductItemRepo;
import com.example.BillingService.services.CustomerService;
import com.example.BillingService.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BillController {
    @Autowired
    private BillRepository billRepository;
    @Autowired
    private ProductItemRepo productItemRepo;
    @Autowired
    private CustomerService customerService;
    @Autowired
    private ProductService productService;

    @GetMapping("/FullBill/{id}")
    public Bill getBill(@PathVariable(name = "id") Long id){
        Bill bill = billRepository.findById(id).get();
        bill.setCustomer(customerService.findCustomerById(bill.getCustomerid()));
        bill.getProductItems().forEach(p -> {
            p.setProduit(productService.findProductById(p.getProductid()));
        });
        return bill;
    }

}
