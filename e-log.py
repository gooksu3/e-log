from flask import Flask,render_template,request,redirect,send_file,url_for


app=Flask("e-log")
app.debug=True

@app.route('/',methods=["POST","GET"])
def home():
    print(request.args)
    return render_template("main.html")

app.run()