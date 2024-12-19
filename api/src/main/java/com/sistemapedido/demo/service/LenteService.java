package com.sistemapedido.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistemapedido.demo.model.Lente;
import com.sistemapedido.demo.repository.LenteRepository;

@Service
public class LenteService {
	
	@Autowired
	private LenteRepository lenteRepository;
	
	public List<Lente> listarLenteDiametro(Float diametro){
		return lenteRepository.findByDiametroGreaterThanEqual(diametro);
	}
	
	public Lente salvar(Lente lente) {
		lente.setId(null);
		return lenteRepository.save(lente);
	}
	
	public Lente buscarId(Long id) {
		return lenteRepository.findById(id).orElse(null);
	}
}
