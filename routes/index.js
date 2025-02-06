const express = require("express");

const usersRoutes = require("./users");
const messagesRoutes = require("./messages");
const webhooksRoutes = require("./webhooks");

const router = express.Router();

// Definir as rotas
router.use("/users", usersRoutes);
router.use("/messages", messagesRoutes);
router.use("/webhooks", webhooksRoutes);

module.exports = router;
