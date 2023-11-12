package com.example.BillingService.repositories;

import com.example.BillingService.entities.Bill;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;


import java.util.List;

@RepositoryRestResource
public interface BillRepository extends JpaRepository<Bill,Long> {

}
