package com.mymir.travelwear.data;

import java.util.HashMap;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.mymir.travelwear.entity.Product;
import com.mymir.travelwear.repository.ProductRepository;

@Component
public class ProductLoader implements CommandLineRunner {

	private final ProductRepository productRepository;

	@Autowired
	public ProductLoader(ProductRepository productRepository) {
		this.productRepository = productRepository;
	}

	@Override
	public void run(String... strings) throws Exception {
        HashMap<String,String> colors = new HashMap<String,String>();
        colors.put("Grey","#f2d5d5");
        colors.put("Grey","#f2d5d5");

        HashMap<String,Integer> sizes = new HashMap<String,Integer>();
        sizes.put("xs", 2);
        sizes.put("sm", 1);
        sizes.put("md", 0);
        sizes.put("lg", 4);
        sizes.put("xl", 2);
        sizes.put("xxl", 6);

        ArrayList<String> grey = new ArrayList<String>();
        grey.add("https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60");
        grey.add("https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60");

        ArrayList<String> pink = new ArrayList<String>();
        pink.add("https://images.unsplash.com/photo-1585497115342-e129d5e533ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");
        pink.add("https://images.unsplash.com/photo-1584720223124-466ff369e7c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");

        ArrayList<String> yellow = new ArrayList<String>();
        yellow.add("https://images.unsplash.com/photo-1631902112544-2271267abb73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");
        yellow.add("https://images.unsplash.com/photo-1538329972958-465d6d2144ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");

        ArrayList<String> tan = new ArrayList<String>();
        tan.add("https://images.unsplash.com/photo-1598211686290-a8ef209d87c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60");
        tan.add("https://images.unsplash.com/photo-1598211664451-1458e4a3e279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");

        ArrayList<String> jean = new ArrayList<String>();
        jean.add("https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60");
        jean.add("https://images.unsplash.com/photo-1520423465871-0866049020b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");

        ArrayList<String> sherpa = new ArrayList<String>();
        sherpa.add("https://images.unsplash.com/photo-1582657243548-514667f1e1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");
        sherpa.add("https://images.unsplash.com/photo-1582657233895-0f37a3f150c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60");

        ArrayList<String> hoodie = new ArrayList<String>();
        hoodie.add("https://images.unsplash.com/photo-1516195851888-6f1a981a862e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=810&q=80");
        hoodie.add("https://images.unsplash.com/photo-1526476148966-98bd039463ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80");

        ArrayList<String> hand = new ArrayList<String>();
        hand.add("https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60");
        hand.add("https://images.unsplash.com/photo-1503342250614-ca440786f637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60");

        ArrayList<String> ripped = new ArrayList<String>();
        ripped.add("https://images.unsplash.com/photo-1520640113944-7ddf59240b14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60");
        ripped.add("https://images.unsplash.com/photo-1520517238863-2a437c6b1b08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");

        ArrayList<String> egg = new ArrayList<String>();
        egg.add("https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80");
        egg.add("https://images.unsplash.com/photo-1517438587856-01447fbf58a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60");

        ArrayList<String> grid = new ArrayList<String>();
        grid.add("https://images.unsplash.com/photo-1596389662344-80f794f1ca99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");
        grid.add("https://images.unsplash.com/photo-1596389607920-aa20720939c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");

        ArrayList<String> classic = new ArrayList<String>();
        classic.add("https://images.unsplash.com/photo-1520367745676-56196632073f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60");
        classic.add("https://images.unsplash.com/photo-1490551632573-78c6c247f5d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");

        ArrayList<String> sport = new ArrayList<String>();
        sport.add("https://images.unsplash.com/photo-1503341910231-c3d098fafba1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60");
        sport.add("https://images.unsplash.com/photo-1503341543961-ce80b820edce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60");

        ArrayList<String> black = new ArrayList<String>();
        black.add("https://images.unsplash.com/photo-1503341960582-b45751874cf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");
        black.add("https://images.unsplash.com/photo-1503342083860-88762657bae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60");

        ArrayList<String> slim = new ArrayList<String>();
        slim.add("https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80");
        slim.add("https://images.unsplash.com/photo-1552783858-1e47edf7898b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60");

        ArrayList<String> sweats = new ArrayList<String>();
        sweats.add("https://images.unsplash.com/photo-1518417823698-91652324a3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60");
        sweats.add("https://images.unsplash.com/photo-1516138889897-da554d2501f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60");

		this.productRepository.save(new Product("Grey Graphic T-Shirt", 10.00, "shirt", true, 10, true, false, "female", 4.5, colors, sizes, grey));
        this.productRepository.save(new Product("Pink Tied Crop Top", 30.00, "shirt", false, 0, false, false, "female", 4.0, colors, sizes, pink));
        this.productRepository.save(new Product("Yellow Heavy Puffer Jacket", 40.00, "jacket", false, 0, true, true, "female", 3.5, colors, sizes, yellow));
        this.productRepository.save(new Product("Tan Graphic T-Shirt", 40.00, "jacket", true, 5, false, true, "female", 3.5, colors, sizes, tan));
        this.productRepository.save(new Product("Classic Blue Denim Jacket", 40.00, "jacket", false, 0, false, true, "female", 5.0, colors, sizes, jean));
        this.productRepository.save(new Product("Sherpa Multi-Colored Flower Jacket", 40.00, "jacket", false, 0, false, true, "female", 3.0, colors, sizes, sherpa));
        this.productRepository.save(new Product("Classic Solid Colored Hoodie", 40.00, "jacket", false, 0, false, false, "female", 3.5, colors, sizes, hoodie));
        this.productRepository.save(new Product("Skeletal Hand Graphic T-Shirt", 40.00, "jacket", false, 0, true, true, "female", 4.5, colors, sizes, hand));
        this.productRepository.save(new Product("Ripped Straight Fit Jeans", 35.00, "pants", true, 10, false, true, "male", 4.5, colors, sizes, ripped));
        this.productRepository.save(new Product("Yellow Egg Graphic Pants", 35.00, "pants", false, 0, false, false, "male", 4.0, colors, sizes, egg));
        this.productRepository.save(new Product("Grid Pattern Dress Pants", 35.00, "pants", false, 0, false, false, "male", 3.5, colors, sizes, grid));
        this.productRepository.save(new Product("Classic Grey Dress Pants", 35.00, "pants", false, 0, true, true, "male", 4.0, colors, sizes, classic));
        this.productRepository.save(new Product("Red Stripe Sports Pants", 35.00, "pants", true, 5, false, false, "male", 5.0, colors, sizes, sport));
        this.productRepository.save(new Product("Black Slim Fit Jeans", 35.00, "pants", false, 0, false, true, "male", 3.0, colors, sizes, black));
        this.productRepository.save(new Product("Tan Slim Fit Jeans", 35.00, "pants", false, 0, false, true, "male", 3.5, colors, sizes, slim));
        this.productRepository.save(new Product("Green Slim Fit Sports Sweats", 35.00, "pants", false, 0, false, true, "male", 4.5, colors, sizes, sweats));

        // this.userRepository.save(new User("John", "Doe", "jdoe", "jdoe.email.com", false));
        // this.userRepository.save(new User("John", "Doe", "jdoe", "jdoe.email.com", false));
	}
}
