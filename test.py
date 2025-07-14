import requests
requests.post('http://127.0.0.1:5000/set_current_message', data={'message': "test"})
