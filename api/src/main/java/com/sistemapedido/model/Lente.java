package com.sistemapedido.model;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class Lente {
	private Long id;
	private Material material;
	private Float diametro;
	private Float indiceRefracao;
	private BigDecimal preco;
	private Float quantidade;
	private Float base;
}
