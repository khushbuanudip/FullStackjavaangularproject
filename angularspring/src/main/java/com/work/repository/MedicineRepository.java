package com.work.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.work.entity.Medicine;



public interface MedicineRepository extends JpaRepository<Medicine, Long> {

	

}
