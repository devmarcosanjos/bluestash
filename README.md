# Bluestash

Bluestash é um aplicativo voltado para a organização pessoal e aumento da produtividade, com foco na gestão de tarefas diárias. Ele oferece ferramentas intuitivas para criar, organizar, e monitorar tarefas, além de permitir o acompanhamento de prazos e status das atividades, otimizando a rotina de usuários em diferentes contextos, como tarefas pessoais e profissionais.

## Objetivo do Usuário

O objetivo principal do usuário ao utilizar o Bluestash é melhorar sua organização pessoal e produtividade. A aplicação oferece ferramentas que ajudam o usuário a:

- Organizar tarefas de maneira clara e eficiente, com categorização e priorização intuitiva.
- Aumentar a produtividade com uma interface simples e recursos para criação, edição e acompanhamento de tarefas.
- Monitorar prazos para garantir a conclusão das tarefas dentro de períodos específicos.

## Pessoas Envolvidas

O Bluestash foi projetado para uma ampla gama de usuários, incluindo:

- **Usuários gerais**: indivíduos que querem organizar suas atividades diárias, como listas de compras, compromissos, rotinas de exercícios, e tarefas domésticas.
- **Profissionais**: usuários que utilizam o Bluestash para gerenciar demandas de trabalho, como acompanhamento de projetos, tarefas recorrentes, e prazos.

## Funcionalidades Principais

### 1. Autenticação via Magic Link

O processo de autenticação do usuário é feito de maneira simples através de um "Magic Link", sem a necessidade de senha. As etapas incluem:

- Acesso à página de login.
- Inserção do e-mail.
- Envio de um Magic Link para autenticação.
- O usuário clica no link recebido no e-mail para ser autenticado.

### 2. Criação de Nova Tarefa

A criação de tarefas é fácil e rápida. O usuário deve preencher os seguintes campos:

- **Título**: Nome da tarefa.
- **Categoria**: "To-Do" ou "Work".
- **Prioridade**: Alta, Média ou Baixa.
- **Data**: Quando a tarefa deve ser realizada.
- **Descrição** (opcional): Detalhamento da tarefa.

### 3. Ações com a Tarefa

O usuário pode realizar as seguintes ações com as tarefas criadas:

- **Editar**: Modificar os detalhes da tarefa.
- **Excluir**: Remover uma tarefa.
- **Marcar como concluída**: Indicar que a tarefa foi finalizada.
- **Desmarcar como concluída**: Retornar a tarefa ao status de pendente.

### 4. Dashboard de Tarefas

O dashboard exibe indicadores importantes para monitoramento do progresso, como:

- Número total de tarefas.
- Total de tarefas concluídas.
- Total de tarefas pendentes para o mês ou para hoje.
- Taxa de conclusão: (Total de tarefas concluídas / Total de tarefas) \* 100.

# Decisões Arquiteturais

## Ferramentas, libs e padrões

- 📏 **ESLint**
- 💖 **Prettier**
- 🐶 **Husky**
- 🚫 **lint-staged**
- 💅 **TailwindCSS**
- 🃏 **Jest**
- 👽 **Next.js 14**
- 🎲 **Supabase**
- 📩 **Resend**
- 👾 **Conventional Commits Pattern**
- 🦉 **Typescript**
- 🤖 **React**
- 🪄 **DaisyUi**

## Estrutura

### Configurações setup

- `.env`: Armazena variáves de ambiente, como chaves de API, URLs e outras configurações.
- `.eslintignore`: Define quais ou diretórios o ESLint deve ignorar.
- `.eslintrc`: Configurações do ESLint, passando as regras de linting e padrões de codigos, extensões, pluglins a ser aplicado no projeto.
- `.gitignore`: Lista de aquivos e/ou diretórios ignorados.
- `.lintstagedrc`: Configura as verificações de linting a serem aplicadas em aquivos que foram modificados (staged) antes de um commit.
- `.prettierrc`: Configuração do Prettier, está as definições de regras de formatação, incluindo espaçamento, ponto e virgua, aspas simples ou dupla, entre outros.
- `commitlint`: Especifica as regras para os commits de git, garantindo padronização das regras de commit.
- `tailwind.config`: Configurações do framework Tailwind CSS, como definição de cores, espaçamentos, extensões usadas no projeto.
- `tsconfig.jsom`: Arquivo de configuração do Typescript que define as opções como target, path.
- `.husky`: Armazena os scripts para configurar a automatização dos processos antes das ações como commits e push.

# Configurações com Bibliotecas e Serviços externos

- `DaisUI`: Esse está configurado para usar os componentes da biblioteca daisUI que facilita a criação das interfaces e definições de themas.
- `DaisUI Theme`: Criar uma paleta de cores de forma rapida e com nomes padronizados, [DaisyUI Theme Builder](https://themes.ionevolve.com/)
- `Supabese`: O projeto está configurado com a integração com serviço [Supabase](), usando os serviços como: Supabase banco de dados e Supabase para autenticação (via magic link).
- `Resend`: Um serviço de email integrando com o supabase para redirecionamento dos emails para autenticação.

### Configurações do Projeto

- `./src`: Diretório principal com todo o código fonte da aplicação.
- `./src/app`: Diretório da nova arquitetura do Next.js com App Router. Onde fica as páginas, componentes de layout.
- `./src/config`: Contém arquivos de configuração para gerenciar e exportar variáves de ambiente. Neste diretório as variáveis são separadas entre as que precisam ser acessiveis lado front-end as do lado server.
- `./src/libs`: Armazena bibliotecas de funcionalidades que são reutilizadas em várias partes da aplicação. Por exemplo, integração com serviço de banco de dados Supabase, deixando encapsulado a logica e sua inicialização de clientes.
- `./src/utils`: Contém funções "helpers".
- `./src/server`: Armazena regras de negocios performadas no server side como por exemplo os middlewares da aplicação.

### Como me localizar no projeto

- Todas as páfinas do projeto estão listadas em './src/app'
  - As páginas são definidas como pastas que contêm arquivos como 'page.tsx' ou 'layout.tsx'
- Páginas e roteamento
  - Cada subdiretório dentro de './src/app' representa uma rota no aplicativo.
  - Além de páginas é possível definir layout e carregamentos dinâmicos, criando uma estrutura navegação simples.

Exemplo da estrutura

```plaintext
├── README.md
├── arquitetura.excalidraw
├── commitlint.config.js
├── coverage
├── desing.excalidraw
├── erase.excalidraw
├── eslint.config.mjs
├── info-hours.json
├── jest-setup.tsx
├── jest.config.ts
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── public
│   └── logo
├── src
│   ├── apis
│   ├── app
│   ├── config
│   ├── emails
│   ├── libs
│   ├── locales
│   ├── middleware.ts
│   ├── mocks
│   ├── server
│   ├── types
│   └── utils
├── tailwind.config.ts
├── tsconfig.js

```

## Como Iniciar o Projeto

Para rodar o Bluestash localmente, siga os passos abaixo:

1. Clone o repositório:

```bash
git clone https://github.com/seuusuario/bluestash.git
```
