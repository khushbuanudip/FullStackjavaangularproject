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
@Table(name = "patient")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long pid;
	private String pname;
	private long pnumber;
	private String pemail;
	public Patient(String pname, String pemail,long pnumer) {
		super();
		this.pname = pname;
		this.pnumber = pnumber;
		this.pemail = pemail;
	}
	

}
