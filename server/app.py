from flask import Flask
from db import ConnectDB

app = Flask(__name__)

@app.route("/")
def hello_world():
    db = ConnectDB()
    data = db.execute_query('select * from users')
    
    if data:
        return data

    return []
    

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')