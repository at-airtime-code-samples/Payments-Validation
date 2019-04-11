const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const credentials = {
    username: "YOUR_USERNAME_GOES_HERE",
    apiKey: "YOUR_API_KEY_GOES_HERE"
}

const AfricasTalking = require("africastalking")(credentials)

app.post("/payment-notification", async (req, res) => {
    const phoneNumber = req.body.source

    if (phoneNumber == "YOUR_PHONE_NUMBER_GOES_HERE") {
        response = {
            status: "Validated"
        }
    } else {
        response = {
            status: "Failed"
        }
    }

    return JSON.stringify(response)
})

app.listen(3000, () => {
    console.log("Server started...")
}
