package com.mymir.travelwear.service;

import java.util.List;

import com.mymir.travelwear.entity.Product;

public interface ProductService {

    Product saveProduct(Product product);

    List<Product> fetchProductList();

    Product fetchProduct(Long productId);

    Product updateProduct(Product product, Long productId);

    void deleteProductById(Long productId);

}
