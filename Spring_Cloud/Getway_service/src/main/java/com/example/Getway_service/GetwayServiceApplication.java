package com.example.Getway_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.ReactiveDiscoveryClient;
import org.springframework.cloud.gateway.discovery.DiscoveryClientRouteDefinitionLocator;
import org.springframework.cloud.gateway.discovery.DiscoveryLocatorProperties;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class GetwayServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(GetwayServiceApplication.class, args);
	}

	@Bean
	RouteLocator staticRoutes(RouteLocatorBuilder builder){
		return builder.routes()
				.route(r->r
						.path("/movies/**")
						.filters(f->f
								.addRequestHeader("X-RapidAPI-Host","moviesdatabase.p.rapidapi.com")
								.addRequestHeader("X-RapidAPI-Key","9238181938msh81b25902cfa52ebp141f4djsn499920d7f0e5")
								.rewritePath("/movies/(?<segment>.*)","/${segment}")
						)
						.uri("https://moviesdatabase.p.rapidapi.com"))
				.build();
	}
	@Bean
	DiscoveryClientRouteDefinitionLocator dynamicRoutes (ReactiveDiscoveryClient rdc , DiscoveryLocatorProperties dlp){
		return new DiscoveryClientRouteDefinitionLocator(rdc,dlp);
	}
}
