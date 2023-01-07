package com.work.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.work.entity.Patient;
import com.work.entity.User;
import com.work.repository.PatientRepository;
import com.work.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PatientController {
	@Autowired
	private PatientRepository patientRepository;
	@DeleteMapping(value = "/patients/{pid}")
	public String deleteController(@PathVariable long pid) {
		 patientRepository.deleteById(pid);
		 return "";
	}
	@PutMapping(value = "/patients/{pid}")
	public Patient updateController(@PathVariable long pid, @RequestBody Patient patient) {
		Patient _patient = patientRepository.findById(pid).get();
		_patient.setPname(patient.getPname());
		_patient.setPemail(patient.getPemail());
		_patient.setPnumber(patient.getPnumber());
		return patientRepository.save(_patient);
	}
	@GetMapping("/patients")
	public List<Patient> getPatients() {
		return (List<Patient>) patientRepository.findAll();
	}

	@PostMapping("/patients")
	void addPatient(@RequestBody Patient patient) {
		System.out.println(patient.getPnumber());
		patientRepository.save(patient);
	}

}
