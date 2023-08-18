package com.mymir.travelwear.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mymir.travelwear.entity.Product;
import com.mymir.travelwear.entity.Shopper;
import com.mymir.travelwear.service.ShopperService;
import com.mymir.travelwear.service.ProductService;

import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("travelwear")
public class ShopperController {

    @Autowired private ShopperService shopperService;
    @Autowired private ProductService productService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/shoppers")
    public Shopper saveShopper (
        @Validated @RequestBody Shopper shopper)
    {
        return shopperService.saveShopper(shopper);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/shoppers")
    public List<Shopper> fetchShopperList()
    {
        return shopperService.fetchShopperList();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/shoppers/{id}")
    public Shopper fetchShopper(@PathVariable("id") Long shopperId)
    {
        return shopperService.fetchShopper(shopperId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/shoppers/{id}/cart")
    public Shopper addToShopperCart(@PathVariable("id") Long shopperId, @Validated @RequestBody Product product)
    {
        return shopperService.addToShopperCart(product, shopperId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/shoppers/{id}/cart/{prodid}")
    public Shopper removeFromShopperCart(@PathVariable("id") Long shopperId, @PathVariable("prodid") Long productId)
    {
        Product product = productService.fetchProduct(productId);
        return shopperService.removeFromShopperCart(product, shopperId);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/shoppers/{id}/cart")
    public List<Product> getShopperCart(@PathVariable("id") Long shopperId)
    {
        return shopperService.fetchShopper(shopperId).getCart();
    }

    // @CrossOrigin(origins = "http://localhost:3000")
    // @RequestMapping(value = "/")
    // public String index() {
	// 	return "index";
	// }

    // @CrossOrigin(origins = "http://localhost:3000")
    // @GetMapping("/api/shoppers")
    // public List<Shopper> getShoppers() {
    //     // return ;
    // }

}
