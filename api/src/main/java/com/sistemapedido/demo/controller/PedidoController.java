package com.sistemapedido.demo.controller;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sistemapedido.demo.dto.PedidoFormDTO;
import com.sistemapedido.demo.model.Lente;
import com.sistemapedido.demo.model.MedidasArmacao;
import com.sistemapedido.demo.model.Pedido;
import com.sistemapedido.demo.model.PedidoStatus;
import com.sistemapedido.demo.service.LenteService;
import com.sistemapedido.demo.service.MedidasArmacaoService;
import com.sistemapedido.demo.service.PedidoService;

@RestController
@RequestMapping("/pedido")
public class PedidoController {

	@Autowired
	private PedidoService pedidoService;// trocar para service

	@Autowired
	private LenteService lenteService;

	@Autowired
	private MedidasArmacaoService medidasArmacaoService;

	@GetMapping("/listar")
	public ResponseEntity<List<Pedido>> listarPedidos() {
		List<Pedido> lista = pedidoService.listarPedido();
		return ResponseEntity.ok(lista);
	}

	@GetMapping("/pesquisar/{id}")
	public ResponseEntity<Pedido> pesquisarId(@PathVariable Long id) {
		Pedido pedidoBusca = pedidoService.pesquisarId(id);
		return ResponseEntity.ok(pedidoBusca);
	}

	@PostMapping
	public ResponseEntity<Pedido> criarPedido(@RequestBody PedidoFormDTO pedidoFormDTO) {
		// Cria as lentes OD e OE
		Lente lenteOD = lenteService.buscarId(pedidoFormDTO.getEscolhaLenteOD());
		Lente lenteOE = lenteService.buscarId(pedidoFormDTO.getEscolhaLenteOE());

		// Cria as medidas da armação
		MedidasArmacao medidasArmacao = new MedidasArmacao();
		medidasArmacao.setVertical(pedidoFormDTO.getVertical());
		medidasArmacao.setDiagonalMaior(pedidoFormDTO.getDiagonalMaior());
		medidasArmacao.setHorizontal(pedidoFormDTO.getHorizontal());
		medidasArmacao.setPonte(pedidoFormDTO.getPonte());
		medidasArmacao.setCodigo(pedidoFormDTO.getCodigoArmacao());
		medidasArmacao.setCor(pedidoFormDTO.getCorArmacao());
		medidasArmacaoService.salvarMedidas(medidasArmacao);

		// Cria o pedido
		Pedido pedido = new Pedido();
		pedido.setDataCriacao(LocalDate.now());
		pedido.setLenteOD(lenteOD);
		pedido.setLenteOE(lenteOE);
		pedido.setMedidasArmacao(medidasArmacao);
		pedido.setStatus(PedidoStatus.AGUARDANDO_APROVACAO); // Defina o status inicial
		pedido.setTotalPedido(BigDecimal.ZERO); // Atualize conforme necessário
		pedido.setDataPrevisaoEntrega(LocalDate.now().plusDays(7)); // Exemplo de data de entrega
		pedidoService.salvar(pedido);

		return ResponseEntity.ok(pedido);
	}

	@DeleteMapping("cancelar/{id}")
	public ResponseEntity<Void> apagarPorId(@PathVariable Long id) {
		boolean apagado = pedidoService.apagarPorId(id);
		if (apagado) {
			return ResponseEntity.noContent().build(); // 204 No Content
		} else {
			return ResponseEntity.notFound().build(); // 404 Not Found
		}
	}
}
