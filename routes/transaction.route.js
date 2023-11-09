const express = require("express");
const router = express.Router();
// const { Get, Insert, GetByPK, Update, Delete } = require('../controller/transaction.controller')
const {
  Get,
  Insert,
  GetByPK,
  Deposit,
  Withdraw,
} = require("../controller/transaction.controller");
const {
  CheckPostTransaction,
  CheckPostDeposit,
} = require("../middleware/middleware");
const { Authenticate } = require("../middleware/restrict");

// router.put('/:transaction', Update)
// router.delete('/:transaction', Delete)

// Read
/**
 * @swagger
 * /api/v1/transactions:
 *   get:
 *     tags:
 *      - "CRUD Transaction"
 *     summary: Get All Transactions
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of Transactions
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
 *                   source_account_id:
 *                      type: integer
 *                   destination_account_id:
 *                      type: integer
 *                   type:
 *                      type: string
 */
router.get("/", Authenticate, Get);

// Get Transaction By Id
/**
 * @swagger
 * /api/v1/transactions/{id}:
 *   get:
 *     tags:
 *      - "CRUD Transaction"
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
 *         description: A list of Transaction By Id
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
 *                   source_account_id:
 *                      type: integer
 *                   destination_account_id:
 *                      type: integer
 *                   type:
 *                      type: string
 */
router.get("/:id", Authenticate, GetByPK);

// Transfer
/**
 * @swagger
 * /api/v1/transactions:
 *   post:
 *     tags:
 *      - "CRUD Transaction"
 *     summary: Create a Transactions
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               source_account_id:
 *                 type: integer
 *               destination_account_id:
 *                 type: integer
 *               amount:
 *                 type: integer
 *               type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Transaction created successfully
 */
router.post("/", CheckPostTransaction, Authenticate, Insert);

// Post User
/**
 * @swagger
 * /api/v1/transactions/deposit:
 *   post:
 *     tags:
 *      - "CRUD Transaction"
 *     summary: Add Deposit To Bank Account
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               source_account_id:
 *                 type: integer
 *               destination_account_id:
 *                 type: integer
 *               amount:
 *                 type: integer
 *               type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Deposit successfully
 */
router.post("/deposit", CheckPostDeposit, Authenticate, Deposit);

// Post User
/**
 * @swagger
 * /api/v1/transactions/withdraw:
 *   post:
 *     tags:
 *      - "CRUD Transaction"
 *     summary: Add Withdraw from Bank Account
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               source_account_id:
 *                 type: integer
 *               destination_account_id:
 *                 type: integer
 *               amount:
 *                 type: integer
 *               type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Withdraw successfully
 */
router.post("/withdraw", CheckPostDeposit, Authenticate, Withdraw);

module.exports = router;
