ejercicioClienteNov2014
=======================

Ejercicio solucionado de cliente Noviembre 2014

Al iniciar la aplicación aparecen 7 botones en index.html. 

Se debe programar el código para que al hacer click sobre cada uno de los botones se haga una petición ajax similar a la siguiente:

http://localhost:8081/examClientNov2014/control?ob=form&op=get&num=x

Donde num (x) es el número de formulario.

Al hacer esta petición ajax se recibe como resultado un json del servidor con el que debe hacer tres tareas: 

- La primera es mostrarlo en la columna titulada json a la izquierda. 
- Mostrar tambien a la izquierda el código del formulario generado a partir de la información recibida utilizando el documento json.
- Mostrar a la derecha la renderización del formulario generado a partir de la información recibida utilizando el documento json.


En cada formulario existe un elements que es un array. 

A continuación tienes una tabla con los elements que incluye cada formulario:

|     |form|Label & input type text|input type hidden|input type checkbox|Input type radio|Input type button|Select con varias option|input type reset|input type submit|
|-----|----|---- |------|------|------|------|------|---|---|
|num=1|uno|uno   |      |      |      |      |      |uno|uno|
|num=2|uno|varios|uno   |      |      |      |      |uno|uno|
|num=3|uno|varios|varios|uno   |      |      |      |uno|uno|
|num=4|uno|varios|varios|varios|uno   |      |      |uno|uno|
|num=5|uno|varios|varios|varios|varios|uno   |      |uno|uno|
|num=6|uno|varios|varios|varios|varios|varios|uno   |uno|uno|
|num=7|uno|varios|varios|varios|varios|varios|varios|uno|uno|
