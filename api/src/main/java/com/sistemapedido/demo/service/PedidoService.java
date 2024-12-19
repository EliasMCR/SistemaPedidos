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

	public List<Pedido> listarPedido() {
		return pedidoRepository.findAll();
	}

	public Pedido salvar(Pedido pedido) {
		return pedidoRepository.save(pedido);
	}

	public Pedido pesquisarId(Long id) {
		return pedidoRepository.findById(id).orElseThrow(null);
	}

	public boolean apagarPorId(Long id) {
		if (pedidoRepository.existsById(id)) {
			pedidoRepository.deleteById(id);
			return true;
		}
		return false;
	}
}
