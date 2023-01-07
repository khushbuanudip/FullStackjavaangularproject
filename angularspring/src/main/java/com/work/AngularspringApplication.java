package com.work;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.work.entity.Patient;
import com.work.entity.User;
import com.work.repository.PatientRepository;
import com.work.repository.UserRepository;

@SpringBootApplication
public class AngularspringApplication {

	public static void main(String[] args) {
		SpringApplication.run(AngularspringApplication.class, args);
	}

//	@Bean
//	CommandLineRunner init(UserRepository userRepository) {
//		return args -> {
//			Stream.of("Chandrasekhar", "Mahesh", "Jennifer", "Amitava", "Shawin").forEach(name -> {
//				User user = new User(new Random().nextLong(), name, name.toLowerCase() + "@anudip.org");
//				userRepository.save(user);
//			});
//			userRepository.findAll().forEach(System.out::println);
//		};
//	}

	@Bean
	CommandLineRunner init(UserRepository userRepository) {
		return args -> {
			Stream.of("Chandrasekhar", "Mahesh", "Jennifer", "Amitava", "Shawin").forEach(name -> {
				User user = new User(name, name.toLowerCase() + "@abc.org");
				userRepository.save(user);
			});
			userRepository.findAll().forEach(System.out::println);
		};
	}
//	@Bean
//	CommandLineRunner init(PatientRepository patientRepository) {
//		return args -> {
//			Stream.of("Chandrasekhar", "Mahesh", "Jennifer", "Amitava", "Shawin").forEach(name -> {
//				Patient patient = new Patient(name, name.toLowerCase() + "@anudip.org",98255);
//				patientRepository.save(patient);
//			});
//			patientRepository.findAll().forEach(System.out::println);
//		};
//	}

}
