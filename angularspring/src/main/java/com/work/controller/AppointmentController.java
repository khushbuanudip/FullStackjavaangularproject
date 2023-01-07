package com.work.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.work.entity.Appointment;

import com.work.repository.AppointmentRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentController {
	
	
		@Autowired
		private AppointmentRepository appointmentRepository;

		@GetMapping("/appointments")
		public List<Appointment> getAppointments() {
			return (List<Appointment>) appointmentRepository.findAll();
		}

		@PostMapping("/appointments")
		void addUser(@RequestBody Appointment appointment) {
			appointmentRepository.save(appointment);
		}

	}



