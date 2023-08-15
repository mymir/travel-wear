package com.mymir.travelwear.entity;

import java.util.Map;

import org.springframework.beans.factory.annotation.Qualifier;

import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Qualifier("products")
@Entity
public class Product {

    private @Id @GeneratedValue Long id;
    private String name;
    private Double price;
    private String category;
    private Boolean onSale;
    private Integer discount;
    private Boolean isNew;
    private Boolean isFeatured;
    private String gender;
    private Double rating;

    @ElementCollection
    private Map<String, String> colors = new HashMap<String,String>();

    @ElementCollection
    private Map<String,Integer> sizes = new HashMap<String,Integer>();

    @ElementCollection
    private List<String> photos = new ArrayList<String>();

    public Product() {}

    public Product(String name, Double price, String category, Boolean onSale, Integer discount, Boolean isNew, Boolean isFeatured, String gender, Double rating, Map<String,String> colors, Map<String,Integer> sizes, ArrayList<String> photos) {
        this.name = name;
        this.price = price;
        this. category = category;
        this.onSale = onSale;
        this.discount = discount;
        this.isNew = isNew;
        this.isFeatured = isFeatured;
        this.gender = gender;
        this.rating = rating;
        this.colors = colors;
        this.sizes = sizes;
        this.photos = photos;
    }

    public Long getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double price) {
        this.price = price;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public Boolean getOnSale() {
        return onSale;
    }
    public void setOnSale(Boolean onSale) {
        this.onSale = onSale;
    }
    public Integer getDiscount() {
        return discount;
    }
    public void setDiscount(Integer discount) {
        this.discount = discount;
    }
    public Boolean getIsNew() {
        return isNew;
    }
    public void setIsNew(Boolean isNew) {
        this.isNew = isNew;
    }
    public Boolean getIsFeatured() {
        return isFeatured;
    }
    public void setIsFeatured(Boolean isFeatured) {
        this.isFeatured = isFeatured;
    }
    public String getGender() {
        return gender;
    }
    public void setGender(String gender) {
        this.gender = gender;
    }
    public Double getRating() {
        return rating;
    }
    public void setRating(Double rating) {
        this.rating = rating;
    }

    public Map<String,String> getColors() {
        return colors;
    }
    public void setColors(Map<String,String> colors) {
        this.colors = colors;
    }

    public Map<String,Integer> getSizes() {
        return sizes;
    }

    public void setSizes(Map<String,Integer> sizes) {
        this.sizes = sizes;
    }

    public List<String> getPhotos() {
        return photos;
    }

    public void setPhotos(List<String> photos) {
        this.photos = photos;
    }
    
    

}