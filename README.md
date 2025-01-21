# Readme 

## Descrição

Este projeto é um exemplo de aplicação front-end desenvolvida com React, utilizando tecnologias modernas para garantir uma experiência de usuário robusta e eficiente. O foco está na utilização de Redux para gerenciamento de estado, Redux Saga, integração com APIs usando Axios, e otimizações visuais com Styled Components.

## Como rodar o projeto?

### Pré-requisitos

- Node.js versão 20.*
- Yarn instalado (versão >= 1.22)

### Instruções

1. **Configurar a versão do Node.js**:

   Certifique-se de estar usando a versão correta do Node.js (20.*). Se necessário, você pode configurar manualmente a versão com o seguinte comando:

   ```bash
   nvm use 20
   ```

2. Clone o repositório:

   ```bash
   git clone git@github.com:jennymont/REACT-REDUX-APP.git
   ```

3. Navegue até o diretório do projeto:

   ```bash
   cd REACT-REDUX-APP
   ```

4. Instale as dependências usando o Yarn:

   ```bash
   yarn install
   ```

5. Inicie o servidor de desenvolvimento com o comando:

   ```bash
   yarn start
   ```
# Tecnologias Utilizadas

- **React**: Framework JavaScript utilizado para construir interfaces de usuário dinâmicas e responsivas. Permite a criação de componentes reutilizáveis, facilitando a manutenção e escalabilidade da aplicação.

- **Redux**: Biblioteca para gerenciamento de estado global da aplicação. No projeto, a configuração da store foi realizada utilizando o `configureStore` do Redux Toolkit, integrando o middleware do Redux-Saga para lidar com efeitos colaterais de forma eficiente. A store foi configurada da seguinte maneira:

  - **`configureStore`**: Função fornecida pelo Redux Toolkit que simplifica a criação da store, configurando automaticamente o middleware padrão e integrando o Redux DevTools Extension.

  - **`rootReducer`**: Combina todos os reducers da aplicação em um único reducer raiz, facilitando a gestão do estado global.

  - **Middleware**: O middleware do Redux-Saga é integrado para gerenciar operações assíncronas de forma mais controlada.

- **Redux Saga**: Um gerenciar  de efeitos colaterais em aplicações Redux. No projeto, é utilizado para lidar com operações assíncronas, como chamadas de API, de forma mais controlada e eficiente. 

- **Axios**: Biblioteca para realizar requisições HTTP, facilitando a comunicação com APIs externas. 

- **Styled Components**: Biblioteca para estilização de componentes React utilizando template literals. 

- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript. No projeto, é utilizada para aumentar a segurança e previsibilidade do código, facilitando a detecção de erros durante o desenvolvimento e melhorando a manutenção a longo prazo.
