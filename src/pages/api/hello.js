export default function handler(req, res) {
  res.status(200).json({
    name: 'Test API',
    metodo: req.method,
    nome: req.query.nome,
    idade: req.query.idade
  })
}
