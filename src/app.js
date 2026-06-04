const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname });
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log('Rodando na porta 3000'));
}