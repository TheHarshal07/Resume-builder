from wsgiref.util import request_uri
from flask import Flask, render_template   #flask class create Flask application instance named app.
import datetime
app = Flask(__name__)

@app.route('/')  #It is decorator, which convert regural function into the view function 
def resume():    #define function ( return HTTP response )
    return render_template('index.html', utc_dt=datetime.datetime.utcnow()) #view function use by render_template to render index.html
    # return "Hello world"

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/logout')
def logout():
    return "<p>logout</p>"

@app.route('/sign-up')
def Signup():
    return render_template('sign-up.html')

if(__name__) == "__main__":
    app.run(debug=True)

