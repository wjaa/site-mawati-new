# Site MAWATI

Site institucional da **MAWATI — Gerenciamento e Coleta de Resíduos Industriais**
(Guarulhos-SP, desde 2002).

## Stack

Site **100% estático**, sem build e sem frameworks. Não há etapa de compilação:
basta servir os arquivos.

```
index.html        ← página única
css/mawati.css     ← estilos (CSS puro, com variáveis)
js/mawati.js       ← interações (JS puro: menu, scroll-reveal, header)
img/               ← logos e fotos
```

Recursos externos (via CDN): fontes do Google Fonts e o mapa incorporado do
Google Maps.

## Como rodar localmente

Qualquer servidor estático serve. Exemplo com Python:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Deploy

Publique o conteúdo da pasta como arquivos estáticos (não requer Node, gulp,
nem qualquer processo de build).
