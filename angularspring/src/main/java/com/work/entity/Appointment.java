package com.work.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name = "myappointment")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Appointment {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long aid;
	private String pname;
	private String dname;
	private String date;

}
