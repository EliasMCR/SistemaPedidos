package com.sistemapedido.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sistemapedido.model.Lente;
import com.sistemapedido.service.LenteService;

@RestController("/lente")
public class LenteController {
	
	@Autowired
	private LenteService lenteService;
	
	@GetMapping("/listar/diametro/${diametro}")
	public ResponseEntity<List<Lente>> listarLentesDiametro(@RequestBody Float diametro) {
		List<Lente> lista = lenteService.listarLenteDiametro(diametro);
		return new ResponseEntity<>(lista, HttpStatus.OK);
	}
}
