# Black Cuts Barbearia — Site Base

Site estático em HTML + CSS + JavaScript, pronto para GitHub + Vercel.

## Estrutura

```text
black-cuts-barbearia-final/
├── index.html
├── estilo.css
├── script.js
├── README.md
└── imagens/
    ├── hero.jpg
    ├── degrade.jpg
    ├── social.jpg
    ├── americano-militar.jpg
    ├── buzz-cut.jpg
    ├── mullet.jpg
    └── galeria-1.jpg ... galeria-6.jpg
```

## Importante sobre as imagens

Os cinco cards usam proporção `16/10` e as imagens foram preparadas nessa mesma proporção. O CSS usa:

`aspect-ratio: 16/10` + `object-fit: cover`

Isso evita o zoom exagerado porque a proporção da caixa e da imagem é a mesma.

## Antes de entregar

Troque no `index.html`:
- nome da barbearia;
- endereço;
- horário;
- número do WhatsApp (atualmente `5500000000000`);
- Instagram;
- Facebook;
- textos do FAQ.

## GitHub

Mantenha a pasta `imagens` dentro do mesmo nível do `index.html`. Não coloque as imagens soltas em outro local.

## Vercel

Depois de subir o repositório para o GitHub, importe esse repositório no Vercel. O `index.html` fica na raiz do projeto.
