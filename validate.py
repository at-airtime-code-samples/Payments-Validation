from flask import Flask, request, jsonify

app = Flask(__name__)

phone_number = request.values.get("phoneNumber")

@app.route("/validate-transaction", methods=["GET", "POST"])
def validate_transaction():
    if (phone_number is "YOUR_PHONE_NUMBER_GOES_HERE"):
        response = {
            "status": "Validated"
        }
        return jsonify(response)
    else:
        response = {
            "status": "Failed"
        }
        return jsonify(response)
