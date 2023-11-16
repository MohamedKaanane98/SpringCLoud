package com.example.BillingService.repositories;

import com.example.BillingService.entities.Bill;
import feign.Param;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;


import java.util.List;

@RepositoryRestResource
public interface BillRepository extends JpaRepository<Bill,Long> {
    @RestResource(path="/ByCustomerId")
    List<Bill> findBillByCustomerid(@Param("Customerid") Long Customerid);
}
