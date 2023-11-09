const express = require('express')
const router = express.Router()
const { Get, Insert, GetByPK, Update, Delete } = require('../controller/user.controller')
const { CheckPostUser } = require('../middleware/middleware')

// Get User
/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     tags:
 *      - "CRUD User"
 *     summary: Get all Users
 *     responses:
 *       200:
 *         description: A list of Users
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
 *                   email:
 *                      type: string
 */
router.get('/', Get)


// Get User By Id
/**
 * @swagger
 * /api/v1/users/{id}:
 *   get:
 *     tags:
 *      - "CRUD User"
 *     summary: Get all By Id
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
 *                   name:
 *                     type: string
 *                   email:
 *                      type: string
 *                   password:
 *                      type: string
 *                   identity_type:
 *                      type: string
 *                   address:
 *                      type: string
 *                   identity_number:
 *                      type: number
 */
router.get('/:userId', GetByPK)


// Post User
/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     tags:
 *      - "CRUD User"
 *     summary: Create a new User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               identity_type:
 *                 type: string
 *               address:
 *                 type: string
 *               identity_number:
 *                 type: number
 *     responses:
 *       201:
 *         description: User created successfully
 */
router.post('/', CheckPostUser, Insert)


// Update User
/**
 * @swagger
 * /api/v1/users/{id}:
 *   put:
 *     tags:
 *      - "CRUD User"
 *     summary: Update an User by ID
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
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 */
router.put('/:userId', Update)

// Delete
/**
 * @swagger
 * /api/v1/users/{id}:
 *   delete:
 *     tags:
 *      - "CRUD User"
 *     summary: Delete an User by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: User deleted successfully
 */
router.delete('/:userId', Delete)

module.exports = router