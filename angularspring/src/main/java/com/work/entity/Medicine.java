
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
@Table(name = "mymedicine")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Medicine {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long mid;
	private String mname;
	private String mexpdate;
	private int mstock;

}
