# **Polidex - Pokedex Interativa**

## **Descrição do Projeto**
**Polidex** é uma aplicação interativa desenvolvida com React, que utiliza a API pública **PokéAPI** para listar, buscar e explorar informações sobre Pokémons. O principal objetivo do projeto é criar uma interface intuitiva e responsiva, com funcionalidades que permitem navegar facilmente pela lista de Pokémons e visualizar detalhes como habilidades, tipos, e imagens, tudo em um layout amigável e acessível.

Este projeto foi construído como parte de um desafio técnico, com foco em boas práticas de desenvolvimento e experiência do usuário (UX).

---

## **Funcionalidades**

### **1. Listagem de Pokémons**
- Lista até **150 Pokémons** consumidos diretamente da API **PokéAPI**.
- Cada item exibe:
  - Nome do Pokémon.
  - Tipos representados por **badges coloridas** com cores específicas baseadas no tipo.
  - Habilidades principais do Pokémon também apresentadas como badges.
  - Imagem do Pokémon (com fallback caso a imagem falhe).

### **2. Busca Interativa**
- Barra de pesquisa que permite filtrar Pokémons pelo nome.
- Navegação por teclado com suporte às teclas:
  - **Seta para Cima/Seta para Baixo**: Navega entre os Pokémons.
  - **Enter**: Seleciona o Pokémon atualmente focado.
  - **Ctrl + /**: Foca na barra de pesquisa.

### **3. Navegação por Teclado e Mouse**
- **Setas do teclado** para navegar pelos Pokémons.
- **Mouse** para selecionar ou clicar diretamente nos itens da lista.
- O foco é mantido centralizado na tela, mesmo em listas longas, para melhorar a experiência de navegação.

### **4. UI/UX Responsivo**
- Design responsivo para diferentes dispositivos.
- Destaque visual ao navegar pelos Pokémons.
- Transições suaves nos elementos da interface.

---

## **Tecnologias Utilizadas**

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **PokéAPI**: API pública para consumir dados dos Pokémons.
- **CSS3**: Estilização responsiva e animações suaves.
- **JavaScript (ES6+)**: Lógica interativa e dinâmica.

---

## **Por Que Construí o App Assim?**

1. **Organização Modular:**
   - Componentes reutilizáveis como `PokemonList`, `PokemonItem` e `SearchBar` foram criados para melhorar a manutenção e extensibilidade do código.

2. **Responsividade:**
   - O layout foi projetado para funcionar bem em diferentes tamanhos de tela, garantindo acessibilidade em dispositivos móveis e desktops.

3. **Navegação Suave:**
   - A escolha de usar `scrollIntoView` e ajustes no CSS para centralizar o foco garante que o usuário nunca perca a visibilidade do item selecionado, mesmo em interações rápidas.

4. **Estilo Visual Intuitivo:**
   - As **badges coloridas** baseadas no tipo do Pokémon ajudam o usuário a identificar facilmente as características de cada um.

5. **Experiência do Usuário (UX):**
   - A barra de pesquisa e a navegação via teclado/mouse foram implementadas para criar uma experiência acessível e eficiente.


