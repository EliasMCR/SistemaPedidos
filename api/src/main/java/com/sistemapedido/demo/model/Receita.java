package com.sistemapedido.demo.model;

import java.math.BigDecimal;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Receita {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Enumerated(EnumType.STRING)
	private TipoReceita tipoReceita;
	private BigDecimal esfericoOD;
	private BigDecimal esfericoOE;
	private BigDecimal cilindroOD;
	private BigDecimal cilindroOE;
	private BigDecimal adicaoOD;
	private BigDecimal adicaoOE;
	private Integer eixoOD;
	private Integer eixoOE;
}
