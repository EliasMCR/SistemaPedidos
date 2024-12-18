package com.sistemapedido.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sistemapedido.model.Lente;
import com.sistemapedido.repository.LenteRepository;

@Service
public class LenteService {
	
	@Autowired
	private LenteRepository lenteRepository;
	
	public List<Lente> listarLenteDiametro(Float diametro){
		return lenteRepository.findByDiametroGreaterThanEqual(diametro);
	}
}
