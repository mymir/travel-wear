package com.mymir.travelwear.data;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.mymir.travelwear.entity.Product;
import com.mymir.travelwear.entity.Shopper;
import com.mymir.travelwear.repository.ShopperRepository;

@Component
public class ShopperLoader implements CommandLineRunner {

    private final ShopperRepository shopperRepository;

	@Autowired
	public ShopperLoader(ShopperRepository shopperRepository) {
        this.shopperRepository = shopperRepository;
	}

	@Override
	public void run(String... strings) throws Exception {
        this.shopperRepository.save(new Shopper("John", "Doe", "jdoe", "jdoe.email.com", false, new ArrayList<Product>(), new ArrayList<Product>(), new ArrayList<Product>()));
        // this.shopperRepository.save(new Shopper("John", "Doe", "jdoe", "jdoe.email.com", false));
	}
}
