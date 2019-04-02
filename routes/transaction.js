const router = require("express").Router()
const transactionController = require("../controllers/transactionController")

// ──[create new transaction]─────────────────────
router.post("/", transactionController.create)

// ──[find  all transaction]─────────────────────
router.get("/", transactionController.findAll)

// ──[find  transaction by id]─────────────────────
router.get("/:id", transactionController.findOne)

// ──[update a transaction]─────────────────────
router.put("/:id", transactionController.update)

// ──[delete a transaction]─────────────────────
router.delete("/:id", transactionController.delete)

module.exports = router
