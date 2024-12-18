package com.sistemapedido.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sistemapedido.model.Lente;

@Repository
public interface LenteRepository extends JpaRepository<Lente, Long>{
	List<Lente> findByDiametroGreaterThanEqual(Float diametro);
}
