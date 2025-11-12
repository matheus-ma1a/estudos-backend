import express from "express";

const app = express();
app.use(express.json());
const port = 3000;

const livros = [
	{
		id: 1,
		title: "Dom Casmurro",
	},
	{
		id: 2,
		title: "O Alquimista",
	},
	{
		id: 3,
		title: "1984",
	},
	{
		id: 4,
		title: "Sapiens",
	},
	{
		id: 5,
		title: "Clean Code",
	},
];

const buscaLivros = (id) => {
	const index = livros.findIndex((livro) => livro.id === Number(id));
	return index;
};

app.get("/", (_req, res) => {
	res.send("Hello World!");
});

app.get("/livros", (_req, res) => {
	res.status(200).send(livros);
});

app.post("/livros", (req, res) => {
	const data = req.body;
	livros.push(data);

	res.status(201).send("Livro criado com sucesso!");
});

app.delete("/livros/:id", (req, res) => {
	const { id } = req.params;

	const index = buscaLivros(id);

	if (index !== -1) {
		livros.splice(index, 1);
		res.status(200).send("Livro deletado com sucesso");
	} else {
		res.status(404).send("Livro não encontrado");
	}
});

app.get("/livros/:id", (req, res) => {
	const { id } = req.params;

	const index = buscaLivros(id);

	const findLivro = livros[index];

	if (index !== -1) {
		console.log("no true");
		res.status(200).send(findLivro);
	} else {
		console.log("no false");
		res.status(404).send({ error: "Livro nao encontrado" });
	}
});

app.put("/livros/:id", (req, res) => {
	const { id } = req.params;
	const { title } = req.body;

	const index = buscaLivros(id);

	const findLivro = livros[index];

	if (index !== -1) {
		findLivro.title = title;
		res.status(201).send(findLivro);
	} else {
		res.status(404).send({ error: "Livro nao encontrado" });
	}
});

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
