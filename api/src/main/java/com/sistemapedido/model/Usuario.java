package com.sistemapedido.model;

import java.util.HashSet;
import java.util.Set;

import lombok.Data;

@Data
public class Usuario {
	private Long id;
	private String userName;
	private String senha;
	private Set<String> roles = new HashSet<>();
}
