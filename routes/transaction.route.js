const express = require('express')
const router = express.Router()
// const { Get, Insert, GetByPK, Update, Delete } = require('../controller/transaction.controller')
const {Get, Insert, GetByPK, Deposit, Withdraw} = require('../controller/transaction.controller')
const { CheckPostTransaction, CheckPostDeposit } = require('../middleware/middleware')
const { Authenticate } = require("../middleware/restrict");


router.post('/', CheckPostTransaction, Authenticate, Insert)
router.post('/deposit', CheckPostDeposit, Authenticate, Deposit)
router.post('/withdraw', CheckPostDeposit, Authenticate, Withdraw)
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
router.get('/', Authenticate, Get)


// Get Transaction By Id
/**
 * @swagger
 * /api/v1/transactions/{id}:
 *   get:
 *     tags:
 *      - "CRUD Transaction"
 *     summary: Get all By Id
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
router.get('/:id', Authenticate, GetByPK)

module.exports = router