# Atividade Node.js: Consulta de Voos

## API Escolhida

Eu escolhi a API **AviationStack**:  
[https://aviationstack.com/documentation](https://aviationstack.com/documentation)

**Por que eu escolhi essa API:**  
Eu escolhi essa API porque o tema da minha atividade anterior foi “Cadastro de Voos” e a AviationStack fornece dados reais sobre voos, como companhia aérea, status, origem e destino. Isso permite que eu faça consultas de forma prática e realista, mantendo total relação com o tema da atividade.

---

## Parâmetro de busca

O parâmetro de busca que eu usei é: `?voo=NUMERO_DO_VOO`


- Exemplo: `?voo=AA100`  
- Esse parâmetro corresponde ao **código IATA do voo** (`flight_iata`)  
- Eu usei esse parâmetro para consultar informações de um voo específico.

---

## Resultado esperado da requisição

Quando eu acesso no navegador, por exemplo:

http://localhost:3000/?voo=AA100


O servidor Node.js faz uma requisição à API da AviationStack e retorna no navegador pelo menos duas informações do voo. No meu projeto, eu escolhi mostrar quatro informações principais:

- **Companhia aérea**: American Airlines  
- **Status do voo**: landed  
- **Aeroporto de origem**: John F Kennedy International  
- **Aeroporto de destino**: Heathrow  

Essas informações são exibidas em HTML no navegador para facilitar a visualização.

---

## Como usar

1. Clonar o repositório  
2. Rodar no terminal:

node server.js

3. No navegador, acessar:

http://localhost:3000/?voo=AA100
(Ou passar outro número de voo como parâmetro)

4. O servidor vai exibir as informações do voo selecionado.
