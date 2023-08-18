package com.mymir.travelwear.service;

import java.util.List;

import com.mymir.travelwear.entity.Product;
import com.mymir.travelwear.entity.Shopper;

public interface ShopperService {

    Shopper saveShopper(Shopper shopper);

    List<Shopper> fetchShopperList();

    Shopper fetchShopper(Long shopperId);

    Shopper updateShopper(Shopper shopper, Long shopperId);

    Shopper addToShopperCart(Product product, Long shopperId);

    Shopper removeFromShopperCart(Product product, Long shopperId);

    void deleteShopperById(Long shopperId);

}
