const express = require('express')
const router = express.Router()
const { Get, GetByPK, Insert, Update, Delete } = require('../controller/account.controller')
const { CheckPostAccount } = require('../middleware/middleware')

router.get('/:id', GetByPK)
router.post('/', CheckPostAccount, Insert)
router.put('/:id', Update)
router.delete('/:id', Delete)


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
router.get('/', Get)


module.exports = router