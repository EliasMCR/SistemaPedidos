package com.sistemapedido.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistemapedido.demo.model.Pedido;
import com.sistemapedido.demo.repository.PedidoRepository;

@Service
public class PedidoService {
	
	@Autowired
	private PedidoRepository pedidoRepository;
	
	public List<Pedido> listarPedido(Long id){
		return pedidoRepository.findByUsuarioId(id);
	}
}
