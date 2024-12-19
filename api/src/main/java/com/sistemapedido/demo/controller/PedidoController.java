package com.sistemapedido.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistemapedido.demo.model.Pedido;
import com.sistemapedido.demo.service.PedidoService;

@RestController
@RequestMapping("/pedido")
public class PedidoController {

	@Autowired
	private PedidoService pedidoService;

	@GetMapping("/listar/{id}")
	public ResponseEntity<List<Pedido>> listarPedidos(@PathVariable Long id) {
		List<Pedido> lista = pedidoService.listarPedido(id);
		return ResponseEntity.ok(lista);
	}
}
