package com.sistemapedido.demo.model;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "medidas_armacao")
public class MedidasArmacao {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private BigDecimal vertical;
	private BigDecimal horizontal;
	private BigDecimal ponte;
	private String codigo;
	private String cor;
	private BigDecimal diagonalMaior;
}
