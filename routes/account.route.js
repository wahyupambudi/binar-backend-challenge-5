const express = require("express");
const router = express.Router();
const {
  Get,
  GetByPK,
  Insert,
  Update,
  Delete,
} = require("../controller/account.controller");
const { CheckPostAccount } = require("../middleware/middleware");
const { Authenticate } = require("../middleware/restrict");

// Read
/**
 * @swagger
 * /api/v1/accounts:
 *   get:
 *     tags:
 *      - "CRUD Account"
 *     summary: Get All Account
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of Account
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */
router.get("/", Authenticate, Get);

// Get User By Id
/**
 * @swagger
 * /api/v1/accounts/{id}:
 *   get:
 *     tags:
 *      - "CRUD Account"
 *     summary: Get all By Id
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of Users By Id
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   userId:
 *                     type: integer
 *                   bank_name:
 *                     type: string
 *                   bank_account_number:
 *                     type: integer
 *                   balance:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   email:
 *                      type: string
 */
router.get("/:id", Authenticate, GetByPK);

// Post Account
/**
 * @swagger
 * /api/v1/accounts:
 *   post:
 *     tags:
 *      - "CRUD Account"
 *     summary: Create a new Account
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               bank_name:
 *                 type: string
 *               bank_account_number:
 *                 type: integer
 *               balance:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Bank Account created successfully
 */
router.post("/", CheckPostAccount, Authenticate, Insert);

// Update User
/**
 * @swagger
 * /api/v1/accounts/{id}:
 *   put:
 *     tags:
 *      - "CRUD Account"
 *     summary: Update an Account by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               bank_name:
 *                 type: string
 *               bank_account_number:
 *                 type: integer
 *               balance:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Bank Account updated successfully
 */
router.put("/:id", Authenticate, Update);

// Delete
/**
 * @swagger
 * /api/v1/accounts/{id}:
 *   delete:
 *     tags:
 *      - "CRUD Account"
 *     summary: Delete an Account by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Bank Account deleted successfully
 */
router.delete("/:id", Authenticate, Delete);

module.exports = router;
