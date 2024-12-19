package com.sistemapedido.demo.model;

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
	private Float esfericoOD;
	private Float esfericoOE;
	private Float cilindroOD;
	private Float cilindroOE;
	private Float adicaoOD;
	private Float adicaoOE;
}