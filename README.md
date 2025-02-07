WhatsApp Bot SaaS
Este é um projeto de Bot SaaS desenvolvido para auxiliar empresas financeiras na automação de processos de atendimento via WhatsApp

Funcionalidades
Receber e armazenar mensagens do WhatsApp.
Processar e responder automaticamente via API.
Registrar eventos de Webhook no banco de dados.
Disponibilizar um Dashboard para visualização de dados.

Como rodar o projeto
Clone este repositório.
Abra no Visual Studio ou no seu editor de preferência.
Execute o projeto.
http://localhost:3000

Tecnologias Utilizadas:
Node.js – Servidor backend.
Express.js – Framework para API REST.
PostgreSQL – Banco de dados relacional.
pg – Biblioteca de conexão com PostgreSQL.
WhatsApp Cloud API – Integração oficial com o WhatsApp.
Ngrok – Para expor localmente a API ao WhatsApp.

Endpoints
Usuários: Listar e criar usuários (/users).
Mensagens: Listar e enviar mensagens (/messages).
Webhooks: Registrar e consultar eventos do WhatsApp (/webhooks).

Testes
Os testes unitários estão na pasta /tests, e podem ser executados com: npm test
