package com.work.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.work.entity.Patient;


public interface PatientRepository extends JpaRepository<Patient, Long> {

 

}
