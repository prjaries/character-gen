from flask import Flask, request
import threading

app = Flask(__name__)

message = ''

@app.route('/current_message')
def index():
    global message
    return message

@app.route('/set_current_message', methods=['POST'])
def set_message():
    global message
    message = request.form['message']
    return ''

app.run(host='0.0.0.0', port='5000')
