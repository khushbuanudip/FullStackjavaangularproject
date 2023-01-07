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

import com.work.entity.Medicine;

import com.work.repository.MedicineRepository;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MedicineController {
	@Autowired
	private MedicineRepository medicineRepository;
	@DeleteMapping(value = "/medicines/{mid}")
	public String deleteController(@PathVariable long mid) {
		medicineRepository.deleteById(mid);
		 return "";
	}
	@PutMapping(value = "/medicines/{pid}")
	public Medicine updateController(@PathVariable long pid, @RequestBody Medicine medicine) {
		Medicine _medicine = medicineRepository.findById(pid).get();
		_medicine.setMname(medicine.getMname());
		_medicine.setMexpdate(medicine.getMexpdate());
		_medicine.setMstock(medicine.getMstock());
		return medicineRepository.save(_medicine);
	}
	@GetMapping("/medicines")
	public List<Medicine> getMedicines() {
		return (List<Medicine>) medicineRepository.findAll();
	}

	@PostMapping("/medicines")
	void addMedicine(@RequestBody Medicine medicine) {
		
		medicineRepository.save(medicine);
	}


}
