package com.guilherme;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.guilherme.model.Course;
import com.guilherme.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			Course c = new Course();
			c.setName("Angular com Spring");
			c.setCategory("fron-end");

			courseRepository.save(c);
		};
	}

}
