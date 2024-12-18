package com.sistemapedido.model;

import lombok.Data;

@Data
public class MedidasArmacao {
	private Long id;
	private Float vertical;
	private Float horizontal;
	private Float ponte;
	private String codigo;
	private String cor;
	private Float diagonalMaior;
}
