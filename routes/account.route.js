const express = require('express')
const router = express.Router()
const { Get, GetByPK, Insert, Update, Delete } = require('../controller/account.controller')
const { CheckPostAccount } = require('../middleware/middleware')
const { Authenticate } = require("../middleware/restrict");


router.get('/:id', Authenticate, GetByPK)
router.post('/', CheckPostAccount, Authenticate, Insert)
router.put('/:id', Authenticate, Update)
router.delete('/:id', Authenticate, Delete)


// Read
/**
 * @swagger
 * /api/v1/accounts:
 *   get:
 *     tags:
 *      - "CRUD Account"
 *     summary: Get All Account
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
router.get('/', Authenticate, Get)


module.exports = router