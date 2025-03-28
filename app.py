from flask import Flask, render_template
#Inicializacion del FrameworkFlask
app = Flask(__name__)

#Programar mis rutas
@app.route("/")
def index():
    return render_template ("index.html")

#Ejecutar mi servidor
if __name__ == "__main__":
    app.run(debug=True)



