package com.sistemapedido.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistemapedido.demo.model.MedidasArmacao;

@Repository
public interface MedidasArmacaoRepository extends JpaRepository<MedidasArmacao, Long>{

}
