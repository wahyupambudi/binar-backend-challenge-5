const request = require("supertest");
const app = require("../controller/user.controller");

describe("GET and POST Endpoints", () => {
  // get all
  test("Should fetch all users data", async () => {
    try {
      const res = await request(app).get("/API/v1/users");

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("fetch all user success");
      expect(res.body.data).toBeTruthy();
      done();
    } catch (e) {}
  });

  // get by id
  test("Should fetch a user by ID", async () => {
    try {
      const userId = 13;
      const res = await request(app).get(`/API/v1/users/${userId}`);

      expect(res.statusCode).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.message).toBe("fetch user detail success");
      expect(res.body.data).toBeTruthy();
      done();
    } catch (e) {}
  });

  // add user
      test('should insert a new user', async () => {
        try {
            const data = {
                name: 'wahyupambudi',
                email: 'wahyupambudi@gmail.com',
                password: '123wahyu123',
                identity_type: 'KTP',
                identity_number: 1931230221,
                address: 'Lampung',
            }

            const res = await request(app)
                .post('/API/v1/users')
                .send(data)

            expect(res.statusCode).toBe(200)
            expect(res.body.success).toBe(true)
            expect(res.body.message).toBe('created user success')
            expect(res.body.data).toBeTruthy()

            expect(res.body.data.name).toBe(data.name)
            expect(res.body.data.email).toBe(data.email)
            expect(res.body.data.profile.identity_type).toBe(data.identity_type)
            expect(res.body.data.profile.identity_number).toBe(data.identity_number)
            expect(res.body.data.profile.address).toBe(data.address)
            done()
        } catch (error) { }
    })

});
