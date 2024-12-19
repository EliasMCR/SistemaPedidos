package com.sistemapedido.demo.model;

import java.math.BigDecimal;
import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "pedido")
public class Pedido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private LocalDate dataCriacao;
	@ManyToOne
	@JoinColumn(name = "receita_id")
	private Receita receita;
	@Enumerated(EnumType.STRING)
	private PedidoStatus status;
	@ManyToOne
	@JoinColumn(name = "usuario_id")
	private Usuario usuario;
	@OneToOne
	@JoinColumn(name = "medidas_armacao_id")
	private MedidasArmacao medidasArmacao;
	@OneToOne
	@JoinColumn(name = "Lente_Od_id")
	private Lente lenteOD;
	@OneToOne
	@JoinColumn(name = "lente_oe_id")
	private Lente lenteOE;
	private BigDecimal totalPedido;
	private LocalDate dataPrevisaoEntrega;
}
