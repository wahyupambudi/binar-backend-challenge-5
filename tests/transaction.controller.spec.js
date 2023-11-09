const request = require("supertest");
const app = require("../controller/transaction.controller");

describe("GET and POST Endpoints", () => {
  // get all
    test('Should get all transactions data', async () => {
        try {
            const res = await request(app)
                .get('/API/v1/transactions')

            expect(res.statusCode).toBe(200)
            expect(res.body.success).toBe(true)
            expect(res.body.message).toBe('get account by id is success')
            expect(res.body.data).toBeTruthy()
            done()
        } catch (e) { }

    })

  // get by id
    test('Should get an transaction by ID', async () => {
        try {
            const id = 13
            const res = await request(app)
                .get(`/API/v1/transactions/${id}`)

            expect(res.statusCode).toBe(200)
            expect(res.body.success).toBe(true)
            expect(res.body.message).toBe('get all history transaction by source account id success')
            expect(res.body.data).toBeTruthy()
            done()
        } catch (e) { }
    })

  // add user
    test('should insert a new transaction', async () => {
        try {
            const data = {
                source_account_id: 13,
                destination_account_id: 13,
                amount: 2000,
            }

            const res = await request(app)
                .post('/API/v1/transactions')
                .send(data)

            expect(res.statusCode).toBe(200)
            expect(res.body.success).toBe(true)
            expect(res.body.message).toBe('transaction success')
            expect(res.body.data).toBeTruthy()

            expect(res.body.data.source_account_id).toBe(data.source_account_id)
            expect(res.body.data.destination_account_id).toBe(data.destination_account_id)
            expect(res.body.data.amount).toBe(data.amount)
            done()
        } catch (error) { }
    })

});
