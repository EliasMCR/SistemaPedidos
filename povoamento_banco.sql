-- Script de povoamento da tabela lente

INSERT INTO lente (material, diametro, indice_refracao, preco, quantidade, base) VALUES
('CR', 60.0, 1.5, 150.00, 10.0, 4.0),
('POLY', 55.0, 1.6, 200.00, 15.0, 3.5),
('MHI', 50.0, 1.7, 250.00, 20.0, 2.0),
('CRISTAL', 65.0, 1.8, 300.00, 5.0, 5.0),
('TRIVEX', 70.0, 1.53, 400.00, 8.0, 6.0),
('CR', 58.0, 1.6, 180.00, 12.0, 3.8),
('POLY', 52.0, 1.74, 350.00, 25.0, 2.2),
('MHI', 62.0, 1.67, 280.00, 7.0, 4.5);

-- Verificar os dados inseridos
SELECT * FROM lente;
