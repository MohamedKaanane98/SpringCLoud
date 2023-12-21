package com.example.Inventory_service.Entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.w3c.dom.Text;

import javax.persistence.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;


@Entity
@Data @NoArgsConstructor @AllArgsConstructor
public class Commentaire {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idcom;
    private String nomUser;
    private String message;
    @ManyToOne
    @JoinColumn(name = "id")  // Use a specific column name for the foreign key
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Product product;
}
