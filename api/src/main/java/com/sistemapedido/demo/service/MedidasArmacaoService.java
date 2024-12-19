package com.sistemapedido.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistemapedido.demo.model.MedidasArmacao;
import com.sistemapedido.demo.repository.MedidasArmacaoRepository;

@Service
public class MedidasArmacaoService {

	@Autowired
	private MedidasArmacaoRepository repository;

	public MedidasArmacao salvarMedidas(MedidasArmacao medidas) {
		medidas.setId(null);
		return repository.save(medidas);
	}
}
