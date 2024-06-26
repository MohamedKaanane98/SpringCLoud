package com.example.Inventory_service.Entities;

import com.example.Inventory_service.Type;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.type.TextType;
import org.w3c.dom.Text;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;


@Entity
@Data @AllArgsConstructor @NoArgsConstructor @ToString
public class Product {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double price;
    private String image ;
    @Column(columnDefinition = "TEXT")
    private String Description;
    @Enumerated(EnumType.STRING)
    private Type categorie;
    @OneToMany(mappedBy = "product")
    private List<Commentaire> commentaires;
}
