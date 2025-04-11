# Rick and Morty 

Aplicação desenvolvida como desafio técnico com o objetivo de consumir a API GraphQL de Rick and Morty. A interface permite buscar personagens, visualizar detalhes e explorar informações relacionadas ao planeta de origem.

🎉 Deploy: https://rick-and-morty-stephany.netlify.app/

## 🛠️ Tecnologias e Ferramentas

- **Vite**
- **React**
- **TypeScript**
- **TailwindCSS**
- **Apollo Client**
- **React Router DOM**
- **useDebounce**

## ▶️ Como rodar o projeto 


1. Clone o repositório:

- Escolha um local na sua máquina onde deseja salvar o projeto, abra o terminal (ou prompt de comando) nesse diretório e cole o comando abaixo.

```bash
https://github.com/stephanybrazeir0/rick-and-morty.git
```

- Acesse a pasta do projeto

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto com:

```bash
npm run dev
```

4. Acesse no navegador:

```bash
http://localhost:5173/
```

**Certifique-se de ter o Node.js instalado em sua máquina.**

### 💡 Decisões Técnicas e Observações

- Utilização do debounce para evitar múltiplas requisições à API enquanto o usuário digita na busca.
- Implementação de um spinner de carregamento utilizando o componente do Flowbite para melhorar a experiência do usuário durante o loading.
- A escolha do Vite se deu por sua configuração simples e por ser mais adequado a um projeto pequeno, sem a complexidade necessária para justificar o uso do Next.js.
- Foi a minha primeira vez utilizando **GraphQL** e achei a experiência bem interessante. Gostei bastante de trabalhar com a forma como as queries são feitas.
