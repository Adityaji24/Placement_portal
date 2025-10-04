package com.collegeprj.collegebackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class CollegebackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CollegebackendApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**")                 // allow all endpoints
						.allowedOrigins("http://localhost:3000","http://localhost:3001","http://localhost:3003") // React dev URL
						.allowedMethods("GET","POST","PUT","DELETE")
						.allowedHeaders("*")              // allow all headers
						.allowCredentials(true);          // needed if cookies/auth
			}
		};
	}
}
