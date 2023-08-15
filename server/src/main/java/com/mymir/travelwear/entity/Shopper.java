package com.mymir.travelwear.entity;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Qualifier("shoppers")
@Entity
public class Shopper {

    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private Boolean loggedIn;

    @ElementCollection
    private List<Product> cart = new ArrayList<Product>();

    @ElementCollection
    private List<Product> favorites = new ArrayList<Product>();

    @ElementCollection
    private List<Product> recent = new ArrayList<Product>();
    
    public Shopper() {}

    public Shopper(String firstName, String lastName, String username, String email, Boolean loggedIn, ArrayList<Product> cart, ArrayList<Product> favorites, ArrayList<Product> recent) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.loggedIn = loggedIn;
        this.cart = cart;
        this.favorites = favorites;
        this.recent = recent;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Boolean getLoggedIn() {
        return loggedIn;
    }

    public void setLoggedIn(Boolean loggedIn) {
        this.loggedIn = loggedIn;
    }

    public List<Product> getCart() {
        return cart;
    }

    public void setCart(List<Product> cart) {
        this.cart = cart;
    }

    public List<Product> getFavorites() {
        return favorites;
    }

    public void setFavorites(List<Product> favorites) {
        this.favorites = favorites;
    }

    public List<Product> getRecent() {
        return recent;
    }

    public void setRecent(List<Product> recent) {
        this.recent = recent;
    }

    
}
