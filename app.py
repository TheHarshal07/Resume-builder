
from sqlite3 import Cursor
from turtle import home
from wsgiref.util import request_uri
from flask import Flask, render_template, request, flash, redirect  #flask class create Flask application instance named app.
import datetime
import mysql.connector


app = Flask(__name__)
app.config['SECRET_KEY'] = 'jknvsfkan sdfnkank'

conn=mysql.connector.connect(host="localhost", user="root", password="", database="resume", port="3306")
cursor=conn.cursor()


@app.route('/')  #It is decorator, which convert regural function into the view function 
def resume():    #define function ( return HTTP response )
    return render_template('login.html', utc_dt=datetime.datetime.utcnow()) #view function use by render_template to render index.html
    # return "Hello world"

@app.route('/login' , methods=['GET','POST'])
def Login1():
    # data = request.form
    # print(data)
    if request.form:
        userName = request.form.get('email1')
        password = request.form.get('passwd')

        if len(userName) < 2:
            flash('Please enter the Email', category='error')
        elif len(password) < 7:
            flash('weak password', category='error')
        else:
            flash('Successfully login!', category='success')
          
    return render_template('login.html')

@app.route('/logout')
def logout():
    flash('Hello', category='error')
    return "<p>logout</p>"

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/signup', methods=['GET', 'POST'])
def Signup():
    # data = request.form
    # print(data)
    
    if request.form:
        f = request.form.get('firstname')
        email = request.form.get('email1')
        password1 = request.form.get('pass1')
        password2 = request.form.get('pass2')
    
        # if password1 != password2:
        #     flash('Hello',category='error')
        if len(f) < 2:
            flash('Please enter the firstname', category='error')
        elif len(email) < 2:
            flash('Enter the correct email', category='error')
        elif password1 != password2:
            flash("Incorrect password", category='error')
        else:
            flash("Account created!", category='success')          
    return render_template('signup.html')

@app.route('/login_valid', methods=['POST'])
def login_valid():
    data = request.form
    print(data)
    if request.form:
        email = request.form.get('email1')
        password = request.form.get('passwd')

        cursor.execute(""" SELECT * FROM `user` WHERE `email` LIKE '{}' AND `pass1` LIKE '{}' """.format(email,password))
        users=cursor.fetchall()
        print(users)   
    if len(users)>0:
        return redirect('/home')
    else:
        flash('Incorrect credentials!',category='error')
        return redirect('/')
    

@app.route('/add_user', methods=['POST'])
def add_user():
    data = request.form
    print(data)
    if request.form:
        fname1=request.form.get('firstname')
        lname1=request.form.get('lastname')
        email=request.form.get('email1')
        passwd1=request.form.get('pass1')
        passwd2=request.form.get('pass2')

        if len(fname1)<2:
            flash('Please enter the Firstname', category='error')
        elif len(lname1)<2:
            flash('Please enter the lastname', category='error')
        elif len(email)<2:
            flash('Please enter the correct email', category='error')
        elif passwd1 != passwd2:
            flash('Incorrect password', category='error')
        else:
            cursor.execute(""" INSERT INTO `user` (`fname` , `lname` , `email` , `pass1` , `pass2`) VALUES
            ('{}', '{}','{}','{}','{}')""".format(fname1,lname1,email,passwd1,passwd2))
            conn.commit()
    
    return redirect('/signup')

if(__name__) == "__main__":
    app.run(debug=False,host='0.0.0.0')

