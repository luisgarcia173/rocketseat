# [OmniStack 9.0] AIRCNC

**DESCRIÇÃO:** Workspace relacionado aos Projetos de Criados para a semana OmniStack da RocketSeat: `AirCnC`

- **Time:** Luis Garcia
- **Desde:** 30/09/2019


## FASES DO PROJETO
Data|Etapa|Descrição
---|---|---
*30/09/2019*|Configuração do Ambiente|Instalação Node, Yarn, React, Chocolatey
*01/10/2019*|Criação da API Backend|Construção projeto backend REST com Node
*02/10/2019*|Criação da Web App|Construção projeto frontend com React
*03/10/2019*|Criação da Mobile App|Construção projeto mobile com ReactNative
*03/10/2019*|Funcionalidades Avançadas|Melhorias com WebSocket e notificações


---
## PLUGINS E ALTERAÇÕES ÚTEIS PARA O VSCODE (IDE)

**Plugins:** 

- Dracula Official (Tema para várias aplicações de desenvolvimento)
- Material Icon Theme (Icones para classificar cada arquivo ou pasta)
- Rocketseat React Native, ReactJS (Snippets para React)
- Color Highlight (Destaque de cor para Editor)
- Adonis JS (Snippets do Adonis)
- Bookmarks (Criar índices de linhas importantes)
- Debugger for Chrome (Permite debugar aplicação)
- DotENV (Permite estilizar arquivos .env)
- GitLens (Quando estiver trabalhando com outros devs, pode monitar alteração por linha)
- Markdown All in One (Snippets de markdown)

**Fonts:**

- Fira Code | Font Ligatures (Ligações de caracteres que formam um símbolo)

**Update Settings VSCode:**

- "editor.fontFamily": "Fira Code"
- "editor.fontLigatures": true
- "emmet.syntaxProfiles": { "javascript": "jsx" }
- "emmet.includeLanguages": { "javascript": "javascriptreact" }
---


## DETALHAMENTO TÉCNICO

## 1. Backend ![project version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)
---

## Estrutura do Projeto
Camada|Tecnologias
---|---
Server|![node](https://img.shields.io/badge/node-10.15.0-yellow.svg) ![yarn](https://img.shields.io/badge/yarn-1.19.0-yellow.svg) ![express](https://img.shields.io/badge/express-4.17.1-yellow.svg) ![nodemon](https://img.shields.io/badge/nodemon-1.19.3-yellow.svg)
Persistência | ![mongo-atlas](https://img.shields.io/badge/mongoatlas-2.0-red.svg) ![mongoose](https://img.shields.io/badge/mongoose-5.7.3-red.svg)
Upload Lib|![multer](https://img.shields.io/badge/multer-1.4.2-blue.svg)
DevSetup|![git](https://img.shields.io/badge/repository-git-green.svg) ![vscode](https://img.shields.io/badge/ide-vscode-green.svg) ![insomnia](https://img.shields.io/badge/restclient-insomnia-green.svg)

## Descrição
A proposta do projeto é expor uma pequena API com serviços para autenticação e operações do tipo CRUD para os inputs de Usuário, Spot e Notificação.

**STEP 1:** Criar base do projeto com  `express`

- Servir projeto na porta `3333`
- Configurar sistema de rotas
- Configurar acesso ao banco `MongoDB - Atlas`
- Criar `Models`
- Criar `Controllers`
- Criar config para upload `Multer`
- Config do `Cors` para acesso local (`yarn add cors`)
- Criar campo virtual no modelo de Spot para acessar url da imagem
- Criar rota para acesso ao diretorio fisico de imagens

**STEP 2:** `TO-DO`


---
## 2. Frontend ![project version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)
---

## Estrutura do Projeto

Camada|Tecnologias
---|---
Base|![react](https://img.shields.io/badge/react-16.10.1-yellow.svg)
APIs|![react-router-dom](https://img.shields.io/badge/reactrouterdom-5.1.2-blue.svg) ![axios](https://img.shields.io/badge/axios-0.19.0-blue.svg)
DevSetup|![git](https://img.shields.io/badge/repository-git-green.svg) ![vscode](https://img.shields.io/badge/ide-vscode-green.svg) ![chrome](https://img.shields.io/badge/browser-chrome-green.svg)

## Descrição
A proposta do projeto é expor uma Web App integrando com a nossa API já criada de forma dinâmica e flexível para autenticação, listagem e notificação em *Real-time*.

**STEP 1:** Criar base do projeto com  `React`

- Criar projeto com `yarn create react-app <project>`
- Importar fonte `Roboto` no `App.css`
- Configurar sistema de rotas com `react-router-dom`
- Criar pasta com os assets (estáticos)
- Criar estrutura de `pages` com index.js e styles.css
- Criar paginas de Login, Dashboard e Spot
- Importar `axios` para acesso API do backend
- Configurar acesso serviço: `api` (pasta services)
- No Login, settar o `id` usuário no `LocalStorage`
- Criar função `handle` para lidar com ações em tela
- Manipular estado do objeto com `useState`
- Lembrar de passar o `history` como parâmetro da página, para que possa fazer a navegação de rotas
- Usar o `useEffect` quando precisar carregar componente com dados prévios (First Load)
- Usar o `Link` para navegar entre rotas de forma menos burocrática
- Usar o `useMemo` para preview da imagem (Listener)

**STEP 2:** `TO-DO`

---
## 3. Mobile ![project version](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)
---

## Estrutura do Projeto

Camada|Tecnologias
---|---
Base|![react](https://img.shields.io/badge/react-16.8.3-yellow.svg) ![react-native](https://img.shields.io/badge/reactnativedsk-35.0.0-yellow.svg)
APIs|![react-dom](https://img.shields.io/badge/reactdom-16.8.3-blue.svg) ![react-native-web](https://img.shields.io/badge/reactnativeweb-0.11.7-blue.svg) ![babel-preset-expo](https://img.shields.io/badge/babelpresentexpo-7.0.0-blue.svg) ![react-navigation](https://img.shields.io/badge/reactnavigation-4.0.10-blue.svg) ![axios](https://img.shields.io/badge/axios-0.19.0-blue.svg)
Cli | ![expo](https://img.shields.io/badge/expo-35.0.0-red.svg)
DevSetup|![git](https://img.shields.io/badge/repository-git-green.svg) ![vscode](https://img.shields.io/badge/ide-vscode-green.svg) ![genymotion](https://img.shields.io/badge/emulador-genymotion-green.svg)

## Descrição
A proposta do projeto é expor uma Mobile App integrando com a nossa API já criada de forma dinâmica e flexível para autenticação, listagem e notificação em *Real-time*.

**STEP 1:** Criar base do projeto com  `ReactNative`

- Instalar ExpoCli para criação do projeto `npm install -g expo-cli`
- Instalar Expo Client no celular (para emular)
- Criar projeto com `expo init <project>`
- Iniciar projeto com `yarn start`
- Iniciar emulador `genymotion` ou usando expo client `exp://192.168.0.12` (ipv4 address)
- Criar estrutura de pastas `src`
- Criar `src/pages` as paginas do app `Login, Dashboard, Book`
- Criar sistema de rotas com `react-navigation`
- Fix da lib gesture-handler `expo install react-native-gesture-handler react-native-reanimated`
- Criar tela de `Login` com as labels e campos
- Alterar `View` padrão para `KeyboardAvoidingView` desta forma o teclado não sobrescreve os campos
- Criar botão utilizando `TouchableOpacity`
- Importar `axios` para acesso API do backend
- Configurar acesso serviço: `api` (pasta services)
- Criar função `handle` para lidar com ações em tela
- Manipular estado do objeto com `useState`
- Atribuir input do formulário ao seu state `onChangeText={<method>}`
- No Login, settar o `id` e `techs` no `AsyncStorage`
- Lembrar de passar o `navigation` como parâmetro da página, para que possa fazer a navegação de rotas
- Usar o `useEffect` quando precisar carregar componente com dados prévios (First Load)

**STEP 2:** `TO-DO`