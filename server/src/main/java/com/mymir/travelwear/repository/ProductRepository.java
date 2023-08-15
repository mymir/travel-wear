package com.mymir.travelwear.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mymir.travelwear.entity.Product;

@Qualifier("products")
@Repository
public interface ProductRepository extends CrudRepository<Product, Long> {
    
}
