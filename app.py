
from queue import Empty
from wsgiref.util import request_uri
from flask import Flask, render_template, request, flash   #flask class create Flask application instance named app.
import datetime
app = Flask(__name__)
app.secret_key = 'dont tell a'

@app.route('/')  #It is decorator, which convert regural function into the view function 
def resume():    #define function ( return HTTP response )
    return render_template('index.html', utc_dt=datetime.datetime.utcnow()) #view function use by render_template to render index.html
    # return "Hello world"

@app.route('/login' , methods=['GET','POST'])
def login():
    # data = request.form
    # print(data)
    if request.form:
        username = request.form.get('user')
        password = request.form.get('pass')

        if len(username) < 2:
            flash('Please enter the username', category='error')
        elif len(password) < 7:
            flash('weak password', category='error')
        else:
            flash('Successfully login!', category='success')
            
    return render_template('login.html')

@app.route('/logout')
def logout():
    flash('Hello', category='error')
    return "<p>logout</p>"

@app.route('/signup', methods=['GET', 'POST'])
def Signup():
    if request.form:
        f = request.form.get('firstname')
        l = request.form.get('lastname')
        email = request.form.get('email')
        username = request.form.get('username')
        password1 = request.form.get('pass1')
        password2 = request.form.get('pass2')
    
        # if password1 != password2:
        #     flash('Hello',category='error')
        if len(f) < 2:
            flash('Please enter the firstname', category='error')
        elif len(l) < 2:
            flash('Please enter the lastname', category='error')
        elif len(email) < 2:
            flash('Enter the correct email', category='error')
        elif len(username) < 2:
            flash('Please enter correct username', category='error')
        elif password1 != password2:
            flash("Incorrect password", category='error')
        else:
            flash("Account created!", category='success')
  
            
    return render_template('signup.html')

if(__name__) == "__main__":
    app.run(debug=True)

