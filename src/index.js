import express from 'express'
const app = express()
const port = 3000

const livros = [
  { id: 1, title: 'Dom Casmurro', author: 'Machado de Assis', year: 1899, genre: 'Romance', pages: 256, isbn: '978-85-359-0277-4', summary: 'Narrativa em primeira pessoa sobre ciúme e memória.' },
  { id: 2, title: 'O Alquimista', author: 'Paulo Coelho', year: 1988, genre: 'Ficção/Autoajuda', pages: 208, isbn: '978-85-65577-36-2', summary: 'Jornada de um jovem pastor em busca de seu destino.' },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949, genre: 'Distopia', pages: 328, isbn: '978-0-452-28423-4', summary: 'Sociedade totalitária e vigilância constante.' },
  { id: 4, title: 'Sapiens', author: 'Yuval Noah Harari', year: 2011, genre: 'História/Ciência', pages: 443, isbn: '978-0-06-231609-7', summary: 'História da humanidade desde a pré-história até hoje.' },
  { id: 5, title: 'Clean Code', author: 'Robert C. Martin', year: 2008, genre: 'Programação/Técnico', pages: 464, isbn: '978-0-13-235088-4', summary: 'Princípios e práticas para escrever código limpo.' }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/livros',(req, res) => {
  res.status(200).send(livros)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
