package com.sistemapedido.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sistemapedido.demo.model.Receita;

public interface ReceitaRepository extends JpaRepository<Receita, Long>{

}
