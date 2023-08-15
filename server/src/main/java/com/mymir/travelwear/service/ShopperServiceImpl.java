package com.mymir.travelwear.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.mymir.travelwear.entity.Shopper;
import com.mymir.travelwear.repository.ShopperRepository;

@Qualifier("shoppers")
@Service
public class ShopperServiceImpl implements ShopperService {

    @Autowired
    private ShopperRepository shopperRepository;

    @Override
    public Shopper saveShopper(Shopper shopper) {
        return shopperRepository.save(shopper);
    }

    @Override
    public List<Shopper> fetchShopperList() {
        return (List<Shopper>) shopperRepository.findAll();
    }

    @Override
    public Shopper fetchShopper(Long shopperId) {
        return (Shopper) shopperRepository.findById(shopperId).get();
    }

    @Override
    public Shopper updateShopper(Shopper shopper, Long shopperId) {
        Shopper prodDB = shopperRepository.findById(shopperId).get();
 
        // if (Objects.nonNull(shopper.getShopperName()) && !"".equalsIgnoreCase(shopper.getShopperName())) {
        //     prodDB.setShopperName(shopper.getShopperName());
        // }
 
        // if (Objects.nonNull(shopper.getShopperAddress()) && !"".equalsIgnoreCase(shopper.getShopperAddress())) {
        //     prodDB.setShopperAddress(shopper.getShopperAddress());
        // }
 
        // if (Objects.nonNull(shopper.getShopperCode()) && !"".equalsIgnoreCase(shopper.getShopperCode())) {
        //     prodDB.setShopperCode(shopper.getShopperCode());
        // }
 
        return shopperRepository.save(prodDB);
    }
    
    @Override
    public void deleteShopperById(Long shopperId) {
        shopperRepository.deleteById(shopperId);
    }

}
