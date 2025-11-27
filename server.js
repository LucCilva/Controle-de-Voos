const http = require("http");
const https = require("https");
const url = require("url");

const API_KEY = "0aa6f591ed4c45a967a4f18ae9e7c5dc";

http.createServer((req, res) => {
  const query = url.parse(req.url, true).query;
  const flightNumber = query.voo;

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  if (!flightNumber) {
    return res.end(`
      <h1>Consulta de Voos ✈️</h1>
      <p>Para consultar um voo, use:</p>
      <pre>http://localhost:3000/?voo=AA100</pre>
    `);
  }

  const apiURL = `https://api.aviationstack.com/v1/flights?access_key=${API_KEY}&flight_iata=${flightNumber}`;

  https.get(apiURL, (apiRes) => {
    let body = "";

    apiRes.on("data", chunk => body += chunk);
    apiRes.on("end", () => {
      try {
        const json = JSON.parse(body);

        if (!json.data || json.data.length === 0) {
          return res.end(`<h2>Nenhuma informação encontrada para o voo <b>${flightNumber}</b>.</h2>`);
        }

        const voo = json.data[0];

        const companhia = voo.airline?.name || "Não informado";
        const origem = voo.departure?.airport || "Não informado";
        const destino = voo.arrival?.airport || "Não informado";
        const status = voo.flight_status || "Não informado";

        res.end(`
          <h1>Informações do voo: ${flightNumber}</h1>
          <p><b>Companhia aérea:</b> ${companhia}</p>
          <p><b>Status do voo:</b> ${status}</p>
          <p><b>Origem:</b> ${origem}</p>
          <p><b>Destino:</b> ${destino}</p>

          <hr>
          <small>Dados fornecidos por aviationstack.com</small>
        `);
      } catch (err) {
        res.end("Erro ao processar resposta da API: " + err.message);
      }
    });
  })
  .on("error", err => {
    res.end("Erro ao conectar à API: " + err.message);
  });

}).listen(3000, () => {
  console.log("Servidor rodando em: http://localhost:3000");
});
