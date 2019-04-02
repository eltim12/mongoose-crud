const router = require("express").Router()
const bookController = require("../controllers/bookController")

// ──[create new book]─────────────────────
router.post("/", bookController.create)

// ──[find  all book]─────────────────────
router.get("/", bookController.findAll)

// ──[find  book by id]─────────────────────
router.get("/:id", bookController.findOne)

// ──[update a book]─────────────────────
router.put("/:id", bookController.update)

// ──[delete a book]─────────────────────
router.delete("/:id", bookController.delete)

module.exports = router
