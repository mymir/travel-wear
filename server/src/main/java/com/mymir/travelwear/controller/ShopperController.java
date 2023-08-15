package com.mymir.travelwear.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mymir.travelwear.entity.Shopper;
import com.mymir.travelwear.service.ShopperService;

import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("travelwear")
public class ShopperController {

    @Autowired private ShopperService shopperService;

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
