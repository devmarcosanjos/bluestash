# Decisões Arquiteturais

## Ferramentas, libs e padrões

- 📏 **ESLint**
- 💖 **Prettier**
- 🐶 **Husky**
- 🚫 **lint-staged**
- 💅 **TailwindCSS**
- 🐙 **MOBX**
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
    src
    ├── app
    │ ├── admin
    │ │ ├── layout.tsx
    │ │ └── page.tsx
    │ ├── auth
    │ │ ├── actions.ts
    │ │ ├── callback
    │ │ │ └── route.ts
    │ │ ├── layout.tsx
    │ │ └── page.tsx
    │ ├── favicon.ico
    │ ├── globals.css
    │ ├── layout.tsx
    │ ├── not-found.tsx
    │ └── page.tsx
    ├── config
    │ ├── env-client.ts
    │ └── env-server.ts
    ├── libs
    │ └── supabase
    │ ├── supabase-client.ts
    │ └── supabase-server.ts
    └── utils
    ├── classes-merge.ts
    └── index.ts
```
