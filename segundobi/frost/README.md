# Gestão Fácil — Landing Page

Landing page de divulgação do **Gestão Fácil**, sistema de controle de frota de veículos.
Feita com React + Vite + TypeScript. O formulário de contato envia e-mail por uma
**Netlify Function** (`netlify/functions/send-email.ts`) usando Nodemailer.

## Rodando localmente

```bash
npm install
npx netlify dev
```

Abra `http://localhost:8888` (é por esse endereço que a função de e-mail funciona).

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha (o `.env` **nunca** vai para o Git):

| Variável | Para que serve |
| --- | --- |
| `SMTP_HOST` | Endereço do servidor SMTP do provedor de e-mail |
| `SMTP_PORT` | Porta (`587`) |
| `SMTP_SECURE` | `false` para a porta 587 |
| `SMTP_USER` | Usuário do SMTP (e-mail que envia) |
| `SMTP_PASS` | Senha do SMTP (no Gmail, uma Senha de App) |
| `CONTACT_EMAIL` | E-mail que **recebe** as mensagens do formulário |
| `ALLOWED_ORIGIN` | URL do site publicado (vazio em desenvolvimento) |

Em produção, as mesmas variáveis são cadastradas no painel do Netlify
(Site configuration > Environment variables).

## Deploy no Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`
- Base directory: `segundobi/frost` (pasta do projeto dentro do repositório)
