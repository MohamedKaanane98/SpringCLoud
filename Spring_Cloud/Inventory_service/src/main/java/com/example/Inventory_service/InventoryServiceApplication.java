package com.example.Inventory_service;

import com.example.Inventory_service.Entities.Product;
import com.example.Inventory_service.repositories.ProductRepositorie;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@SpringBootApplication
public class InventoryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(InventoryServiceApplication.class, args);
	}
	@Bean
	CommandLineRunner start(ProductRepositorie productRepositorie, RepositoryRestConfiguration repositoryRestConfiguration){
		return args -> {
			repositoryRestConfiguration.exposeIdsFor(Product.class);
			productRepositorie.save(new Product(null,"Ordinateur",900,"assets/pcgeant.png","Découvrez notre dernier ordinateur portable conçu pour offrir une puissance exceptionnelle dans un format compact. Équipé d'un processeur rapide, d'un grand stockage SSD et d'une carte graphique dédiée, cet ordinateur portable est idéal pour le multitâche, les jeux et la productivité. L'écran haute résolution et la conception légère en font le compagnon parfait pour les professionnels en déplacement. Profitez d'une expérience informatique fluide avec notre ordinateur portable haut de gamme."));
			productRepositorie.save(new Product(null,"Phone",1200,"assets/iphone.jpg","Notre imprimante tout-en-un révolutionne votre expérience d'impression à la maison ou au bureau. Imprimez, numérisez et copiez avec facilité grâce à des fonctionnalités avancées. Avec une résolution d'impression élevée, cette imprimante produit des documents nets et des images éclatantes. La connectivité sans fil vous permet d'imprimer à partir de n'importe quel appareil, et la fonction recto verso automatique économise du papier. Simplifiez votre flux de travail avec notre imprimante fiable et performante."));
			productRepositorie.save(new Product(null,"Printer",2500,"assets/printer.jpg","Explorez les possibilités infinies avec notre dernier smartphone. Doté d'une caméra avancée pour des photos et des vidéos de qualité professionnelle, ce téléphone vous offre une expérience visuelle exceptionnelle. Son écran haute résolution et son design élégant ajoutent une touche de sophistication à votre quotidien. Profitez d'une performance rapide grâce à un processeur puissant et d'une autonomie prolongée de la batterie. Restez connecté et découvrez la polyvalence ultime avec notre smartphone de pointe."));
			productRepositorie.save(new Product(null,"Television",5000,"assets/television.jpg","Transformez votre salon en un cinéma personnel avec notre télévision 4K Ultra HD. Dotée d'une résolution incroyable et de couleurs éclatantes, cette télévision offre une qualité d'image exceptionnelle. Les fonctionnalités intelligentes vous permettent d'accéder à un large éventail de contenus, des films aux applications de streaming en passant par les jeux. Son design élégant et ses bords minces ajoutent une esthétique moderne à votre espace de divertissement. Plongez dans une expérience cinématographique immersive avec notre télévision haut de gamme."));
			productRepositorie.save(new Product(null,"Lampe Torche LED",240,"assets/lampe.jpg","Illuminez votre quotidien avec notre lampe torche LED haute performance. Compacte, légère et incroyablement brillante, cette lampe torche deviendra votre compagnon idéal pour toutes vos aventures. Que ce soit pour explorer la nature, bricoler à la maison ou vous déplacer en toute sécurité la nuit, notre lampe torche est conçue pour offrir une luminosité exceptionnelle et une durabilité optimale. Soyez prêt à affronter l'obscurité avec confiance grâce à notre lampe torche de qualité supérieure."));
			productRepositorie.save(new Product(null,"Montre INtelligente ",480,"assets/watch2.jpg","Découvrez l'avenir du poignet avec notre montre intelligente dernier cri. Associez l'élégance intemporelle à des fonctionnalités intelligentes, comme le suivi d'activité, les notifications instantanées et une connectivité sans faille. Restez à la pointe de la mode tout en restant connecté avec notre montre intelligente. Un compagnon idéal pour votre style de vie moderne"));
			productRepositorie.save(new Product(null,"Appareil Photo Pro",360,"assets/camera2.jpg","Découvrez l'art de la photographie avec nos appareils photo de pointe. Conçus pour capturer chaque instant avec une clarté exceptionnelle, nos appareils photo offrent une qualité d'image professionnelle à chaque cliché. Que vous soyez un amateur passionné ou un photographe chevronné, notre gamme d'appareils photo vous permettra de donner vie à votre créativité. Explorez le monde de la photographie avec des fonctionnalités innovantes, une netteté inégalée et une facilité d'utilisation. Transformez chaque instant en une œuvre d'art mémorable avec nos appareils photo de qualité supérieure."));
		};
	}

}
