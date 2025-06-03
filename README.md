# Agendamentos
Uma plataforma de agendamentos personalizável, voltada para empresas que precisam de controle avançado de horários, com regras de negócio complexas como:

Bloqueio de datas específicas.

Limites de agendamentos por dia/usuário.

Prioridades entre tipos de serviço ou atendentes.

Lembretes automatizados por e-mail/SMS.

🏗️ Tecnologias Utilizadas
Backend: Node.js + Express

Banco de Dados: PostgreSQL com ORM (TypeORM, Prisma, Sequelize)

Agendamento de Tarefas: Node-cron

Autenticação: JWT (JSON Web Tokens)

Notificações: Email (SMTP) / SMS (Twilio ou outro gateway)

👥 Público-Alvo
Clínicas (médicas, odontológicas etc.)

Instituições de ensino (reuniões, atendimento pedagógico)

Suporte técnico (TI, manutenção)

Organizadores de eventos e palestras

📦 Funcionalidades Principais
Usuário
Cadastro e login

Visualização de agenda

Criação e cancelamento de agendamentos

Administrador/Prestador
Definição de dias/horários disponíveis

Definição de regras (quantidade máxima por dia, tempo mínimo de antecedência, prioridades)

Bloqueio de datas (feriados, férias)

Recebimento de notificações

Relatórios simples

Sistema
Envio automático de lembretes (24h antes)

Validação de conflitos

Hierarquia de prioridade (Ex: urgências > consultas comuns)

📊 Regras de Negócio Exemplos
Um profissional pode atender no máximo 5 pessoas por dia.

Não é possível agendar nos feriados cadastrados ou em datas bloqueadas.

Alunos têm prioridade no atendimento pedagógico até 2 dias antes da data.

Lembretes são enviados 24 horas antes via e-mail e opcionalmente por SMS.

🔐 Segurança
Senhas criptografadas com bcrypt

Sessão autenticada via JWT

Middleware para proteger rotas privadas

🧪 Testes
Testes unitários com Jest

Testes de integração com Supertest

Testes de regras de negócio específicas