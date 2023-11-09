const request = require("supertest");
const app = require("../controller/account.controller");

describe("GET and POST Endpoints", () => {
  // get all
  test('Should fetch all accounts data', async () => {
        try {
            const res = await request(app)
                .get('/API/v1/accounts')

            expect(res.statusCode).toBe(200)
            expect(res.body.success).toBe(true)
            expect(res.body.message).toBe('fetch all account is success')
            expect(res.body.data).toBeTruthy()
            done()
        } catch (e) { }
    })

// get by id
    test('Should fetch an account by ID', async () => {
        try {
            const account_id = 13
            const res = await request(app)
                .get(`/API/v1/accounts/${account_id}`)

            expect(res.statusCode).toBe(200)
            expect(res.body.success).toBe(true)
            expect(res.body.message).toBe('fetch account by id is success')
            expect(res.body.data).toBeTruthy()
            done()
        } catch (e) { }
    })

  // add user
      test('should insert a new account', async () => {
        try {
            const data = {
                user_id: 13,
                bank_name: 'BSI',
                bank_account_number: 177612761,
            }

            const res = await request(app)
                .post('/API/v1/accounts')
                .send(data)

            expect(res.statusCode).toBe(200)
            expect(res.body.success).toBe(true)
            expect(res.body.message).toBe('create account is success')
            expect(res.body.data).toBeTruthy()

            expect(res.body.data.user_id).toBe(data.user_id)
            expect(res.body.data.bank_name).toBe(data.bank_name)
            expect(res.body.data.bank_account_number).toBe(data.bank_account_number)
            done()
        } catch (error) { }
    })

});
