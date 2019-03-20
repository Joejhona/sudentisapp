# Frontend Vuejs Bootstrap

* La Aplicacion esta funcionando en el siguinete [link](https://sudentis3.herokuapp.com)

* Ingresa tu usuario y contraseña

* El repositorio tiene dos remote: 

```
$ git remote
gitlab-origin
heroku
## Para hacer el push
git push heroku master
git push gitlab-origin master
## falta probar el push de todo
git push -u master --all ## creo que es asi revisar la documentacion
```

* El Frontend se conecta al [backend](https://joejhona.pythonanywhere.com/admin) con la expencion /gql, demora un poco en responder pero esta funcionando bien.

**Nota** Revisar el README del Backend para ver el servidor

## Implementacion de vuejs en Heroku

Se siguio este [link](https://medium.com/netscape/deploying-a-vue-js-2-x-app-to-heroku-in-5-steps-tutorial-a69845ace489)

### 1. Asegurate de que tu app funciona

Sigue las instrucciones de instalacion de npm, mejor trabajar con VUECLI 3 y Vuetify parece que tiene mas opciones
La interfaz de Bootstrap es mas bonita pero limitada

```
~/myapp$ npm install
~/myapp$ npm run server
```

### 2. Creando tu proyecto 

Crear el proyecto heroku, pero antes debes:

* Instalar Heroku CLI
* Inisiar sesion

```
## dentro de la carpeta de la aplicacion, pero creo que se puede hacer en cualquier lado
~/myapp$ heroku create NOMBRE_DE_LA_APP
## para verificar entra a la https://NOMBRE_DE_LA_APP.herokuapp.com
## se vera un avios de que se creo la aplicacion

## Configura la aplicacion para mode de produccion
heroku config:set NODE_ENV=production --app NOMBRE_DE_LA_APP

## Configura el package.json para que heroku lo pueda leer
~/myapp$ ve package.json
```

Agrega la linea de comando que se indica a continuacion:

```
{
  "name": "<YOUR-PROJECT-NAME-HERE>",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "author": "",
  "private": true,
  "scripts": {
    "dev": "node build/dev-server.js",
    "build": "node build/build.js",
    "start": "node server.js",   <--- AGREGA ESTA LINEA DE COMANDO 
```
**Nota** Esto se debe hacer antes de compilar la aplicacion, en el link no indica cuando pero yo asumo que es antes

### 3. Crea un pequeño servidor express

```
~/myapp$ npm install express --save
```

Ahora crea un archivo server.js en la raiz de la aplicacion

```
~/myapp$ vi server.js
```

Pega el siguiente codigo, esto crea un pequeño servidor solo eso

```
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);
```

Compila la aplicacion

```
~/myapp$ npm run build
## se creara una carpeta dist, la cual si te das cuenta esta en 
## en la configuracion express para leer esta carpeta
## falta averiguar como es en VUECLI 3, creo que es diferente
```

Verificar que la compilacion esta bien y que el servidor express funciona tambien

```
~/myapp$ node server.js
## Deberia estar arrancando y funcionando
```
dirijirse a [localhost:5000](http://localhost:5000) para verificar

### 4. Inicia el GIT y el Repositorio Heroku

```
~/myapp$ git init
~/myapp$ heroku git:remote --app NOMBRE_DE_LA_APP
```

Modifica el .gitignore, enrealidad noce porque lo hace pero ahi que hacerlo tambien
hasta aprender bien

```
~/myapp$ vi .gitignore
## elimina la linea que dice dist/
## esto permitira que se guarde la carpeta dist/
## seguro para tener un respaldo
```

Ahora guarda los cambios y has el commit

```
git add -A
git commit -m "Adding files."
```

Finalmente haz el push a Heroku, para que este haga toda la magia

```
git push heroku master
## y listo tardara un poco pero ya deberia estar funcionando la aplicacion
```

### 5. Agrega otro remote

Para trabajar con github o gitlab, crear otro remote para clonar y subir tambien (en desarrollo)

```
git remote add gitlab-origin git@gitlab.com:XXXXXX
git push -u gitlab-origin master
## y se subira al gitlab
## falta ver como hacer el pull desde gitlab y luego el push a heroku, pero no debe ser dificil
```

### 6. Cambios

Se saco del package.json en script:
"build": "vue-cli-service build",

## Creado por

joejhona@gmail.com