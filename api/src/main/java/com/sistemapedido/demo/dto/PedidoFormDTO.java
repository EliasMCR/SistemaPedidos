package com.sistemapedido.demo.dto;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class PedidoFormDTO {
    private BigDecimal esfericoOD;
    private BigDecimal cilindroOD;
    private Integer eixoOD;
    private BigDecimal adicaoOD;
    private BigDecimal dnpOD;
    private BigDecimal alturaOD;
    
    private BigDecimal esfericoOE;
    private BigDecimal cilindroOE;
    private Integer eixoOE;
    private BigDecimal adicaoOE;
    private BigDecimal dnpOE;
    private BigDecimal alturaOE;

    private BigDecimal vertical;
    private BigDecimal diagonalMaior;
    private BigDecimal horizontal;
    private BigDecimal ponte;
    private String codigoArmacao;
    private String corArmacao;

    private Long escolhaLenteOD;
    private Long escolhaLenteOE;
}
