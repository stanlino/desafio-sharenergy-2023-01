import express from 'express';

const app = express();

const PORT = process.env.PORT || 3333;

app.get('/', (req, res) => {
  return res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
