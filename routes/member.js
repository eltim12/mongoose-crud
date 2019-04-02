const router = require("express").Router()
const memberController = require("../controllers/memberController")

// ──[create new member]─────────────────────
router.post("/", memberController.create)

// ──[find  all member]─────────────────────
router.get("/", memberController.findAll)

// ──[find  member by id]─────────────────────
router.get("/:id", memberController.find)

// ──[update a member]─────────────────────
router.put("/:id", memberController.update)

// ──[delete a member]─────────────────────
router.delete("/:id", memberController.delete)

module.exports = router
