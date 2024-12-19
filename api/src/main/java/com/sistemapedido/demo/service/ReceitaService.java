package com.sistemapedido.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistemapedido.demo.model.Receita;
import com.sistemapedido.demo.repository.ReceitaRepository;

@Service
public class ReceitaService {
	
	@Autowired
	private ReceitaRepository receitaRepository;
	
	public Receita salvarReceita(Receita receita) {
		return receitaRepository.save(receita);
	}
}
