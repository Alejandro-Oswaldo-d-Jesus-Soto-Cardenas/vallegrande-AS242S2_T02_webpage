from flask import flask
#Inicializacion del FrameworkFlask
app = flask(__name__)

#Programar mis rutas
@app.route("/")
def index():
    return "Hola mundo"

#Ejecutar mi servidor
if __name__ == "__main__":
    app.run(debug=True)



