import { db } from "../config/db.js";

export const getAll = (req, res) => {
  res.json(db);
};

export const getOne = (req, res) => {
  const id = parseInt(req.params.id);
  const book = db.find((book) => book.id == id);
  !book ? res.send(`No hay un libro con el id: ${id}`) : res.json(book);
};

export const create = (req, res) => {
  const { title, author, year } = req.body;
  const id = db.length + 1;

  const newBook = {
    id,
    title,
    author,
    year,
  };

  const existingBook = db.find((book) => {
    return book.title === title && book.author === author;
  });

  if (newBook.title === "" || newBook.author === "") {
    return res.send("Los campos no pueden estar vacíos");
  }
  existingBook ? res.send("El libro ya existe.") : db.push(newBook);
  res.json(newBook);
};

export const update = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, author, year } = req.body;
  const bookIndex = db.findIndex((book) => book.id === id);

  if (bookIndex === -1) {
    res.send(`No se puede actualizar el libro con el id: ${id}`);
  } else {
    const updatedBook = {
      id,
      title,
      author,
      year,
    };

    db[bookIndex] = updatedBook;
    res.send("Libro actualizado correctamente");
    res.json(updatedBook);
  }
};

export const remove = (req, res) => {
  const id = parseInt(req.params.id);
  const book = db.forEach((book, index) => {
    if (!book.id == id) {
      res.send(`No existe el ususario con el id: ${id}`);
    } else {
      db.splice(index, 1);
      res.send("Libro eliminado.");
    }
  });
  res.json(book);
};
