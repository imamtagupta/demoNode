const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/test endpoint", () => {
    it("Should return a response", async() => {
        const response = await request.get("/test")
        console.log(response)
        expect(response.status).toBe(200)
        expect(response.text).toBe("Namaste sabhiko !")
    })
})