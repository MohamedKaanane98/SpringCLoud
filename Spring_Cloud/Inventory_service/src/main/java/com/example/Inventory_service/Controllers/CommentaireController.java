package com.example.Inventory_service.Controllers;

import com.example.Inventory_service.Entities.Commentaire;
import com.example.Inventory_service.Entities.Product;
import com.example.Inventory_service.repositories.CommentaireRepositorie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentaireController {
    @Autowired
    public CommentaireRepositorie commentaireRepositorie;
    @PostMapping("/Addcom")
    public Commentaire save(@RequestBody Commentaire commentaire){
        return commentaireRepositorie.save(commentaire);
    }
}
