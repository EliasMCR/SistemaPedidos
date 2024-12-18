package com.sistemapedido.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistemapedido.model.Lente;

@Repository
public interface LenteRepository extends JpaRepository<Lente, Long>{

}
