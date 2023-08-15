package com.mymir.travelwear.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.mymir.travelwear.entity.Product;
import com.mymir.travelwear.repository.ProductRepository;

@Qualifier("products")
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public List<Product> fetchProductList() {
        return (List<Product>) productRepository.findAll();
    }

    @Override
    public Product fetchProduct(Long productId) {
        return (Product) productRepository.findById(productId).get();
    }

    @Override
    public Product updateProduct(Product product, Long productId) {
        Product prodDB = productRepository.findById(productId).get();
 
        // if (Objects.nonNull(product.getProductName()) && !"".equalsIgnoreCase(product.getProductName())) {
        //     prodDB.setProductName(product.getProductName());
        // }
 
        // if (Objects.nonNull(product.getProductAddress()) && !"".equalsIgnoreCase(product.getProductAddress())) {
        //     prodDB.setProductAddress(product.getProductAddress());
        // }
 
        // if (Objects.nonNull(product.getProductCode()) && !"".equalsIgnoreCase(product.getProductCode())) {
        //     prodDB.setProductCode(product.getProductCode());
        // }
 
        return productRepository.save(prodDB);
    }
    
    @Override
    public void deleteProductById(Long productId) {
        productRepository.deleteById(productId);
    }

}
