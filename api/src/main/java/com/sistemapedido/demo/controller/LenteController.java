package com.sistemapedido.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistemapedido.demo.model.Lente;
import com.sistemapedido.demo.service.LenteService;

@RestController
@RequestMapping("/lente")
public class LenteController {
    
    @Autowired
    private LenteService lenteService;
    
    @GetMapping("/listar/{diametro}")
    public ResponseEntity<List<Lente>> listarLentesPorDiametro(@PathVariable Float diametro) {
        List<Lente> lista = lenteService.listarLenteDiametro(diametro);
        return ResponseEntity.ok(lista);
    }
}
