package com.sistemapedido.model;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import lombok.Data;

@Data
public class Pedido {
	private Long id;
	private LocalDate dataCriacao;
	private Receita receita;
	private PedidoStatus status;
	private Usuario usuario;
	private MedidasArmacao medidasArmacao;
	private List<Lente> lente;
	private BigDecimal totalPedido;
	private LocalDate dataPrevisaoEntrega;
}
