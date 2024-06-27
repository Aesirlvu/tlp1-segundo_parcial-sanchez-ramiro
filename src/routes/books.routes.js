import { Router } from "express";
import {
  getAll,
  getOne,
  create,
  update,
  remove,
} from "../controller/books.controller.js";

const router = Router();

router.get("/books", getAll);
router.get("/books/:id", getOne);
router.post("/books", create);
router.put("/books/:id", update);
router.delete("/books/:id", remove);

export default router;
