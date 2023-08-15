package com.mymir.travelwear.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mymir.travelwear.entity.Product;
import com.mymir.travelwear.service.ProductService;

import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("travelwear")
public class ProductController {

    @Autowired private ProductService productService;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/products")
    public Product saveProduct (
        @Validated @RequestBody Product product)
    {
        return productService.saveProduct(product);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/products")
    public List<Product> fetchProductList()
    {
        return productService.fetchProductList();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/products/women")
    public List<Product> fetchWomensProductList()
    {
        List<Product> filteredProducts = new ArrayList<Product>();
        List<Product> allProducts = productService.fetchProductList();
        allProducts.forEach(product -> {
            if(product.getGender().equals("female")) {
                filteredProducts.add(product);
            }
        });
        return filteredProducts;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/products/men")
    public List<Product> fetchMensProductList()
    {
        List<Product> filteredProducts = new ArrayList<Product>();
        List<Product> allProducts = productService.fetchProductList();
        allProducts.forEach(product -> {
            if(product.getGender().equals("male")) {
                filteredProducts.add(product);
            }
        });
        return filteredProducts;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/products/new")
    public List<Product> fetchNewProductList()
    {
        List<Product> filteredProducts = new ArrayList<Product>();
        List<Product> allProducts = productService.fetchProductList();
        allProducts.forEach(product -> {
            if(product.getIsNew()) {
                filteredProducts.add(product);
            }
        });
        return filteredProducts;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/products/featured")
    public List<Product> fetchFeaturedProductList()
    {
        List<Product> filteredProducts = new ArrayList<Product>();
        List<Product> allProducts = productService.fetchProductList();
        allProducts.forEach(product -> {
            if(product.getIsFeatured()) {
                filteredProducts.add(product);
            }
        });
        return filteredProducts;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/products/sale")
    public List<Product> fetchOnSaleProductList()
    {
        List<Product> filteredProducts = new ArrayList<Product>();
        List<Product> allProducts = productService.fetchProductList();
        allProducts.forEach(product -> {
            if(product.getOnSale()) {
                filteredProducts.add(product);
            }
        });
        return filteredProducts;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/product/{id}")
    public Product fetchProduct(@PathVariable("id") Long productId)
    {
        return productService.fetchProduct(productId);
    }

    // @CrossOrigin(origins = "http://localhost:3000")
    // @RequestMapping(value = "/")
    // public String index() {
	// 	return "index";
	// }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot!";
    }

    // @CrossOrigin(origins = "http://localhost:3000")
    // @GetMapping("/api/products")
    // public List<Product> getProducts() {
    //     // return ;
    // }

}
