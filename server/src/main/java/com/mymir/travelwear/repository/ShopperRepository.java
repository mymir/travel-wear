package com.mymir.travelwear.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mymir.travelwear.entity.Shopper;

@Qualifier("shoppers")
@Repository
public interface ShopperRepository extends CrudRepository<Shopper, Long> {
    
}
