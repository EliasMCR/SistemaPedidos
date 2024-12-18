package com.sistemapedido.model;

import lombok.Data;

@Data
public class Receita {
	private Long id;
	private TipoReceita tipoReceita;
	private Float esfericoOD;
	private Float esfericoOE;
	private Float cilindroOD;
	private Float cilindroOE;
	private Float adicaoOD;
	private Float adicaoOE;
}
