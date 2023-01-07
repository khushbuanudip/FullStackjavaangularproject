package com.work.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.work.entity.Appointment;


public interface AppointmentRepository extends JpaRepository<Appointment, Long> {


}
