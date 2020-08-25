const express = require('express');

const app = express();

app.listen(3000, function () {
  console.log('server started on port 3000');
});

app.get('/', function (req, res) {
  res.send('<h1>💀💀 HELLO WORLD 💀💀</h1>');
});

app.get('/contact', function (req, res) {
  res.send('<a href="https://www.bing.com/?setlang=es">Contatc me</a>');
});

app.get('/about', function (req, res) {
  res.send(
    '<p>Ingeniero Electrónico capaz de concebir, diseñar, desarrollar, validar e implementar sistemas electrónicos para dar cumplimiento a objetivos definidos, con experiencia en el diseño de hardware haciendo uso de los estándares del mercado. Además, cuento con conocimientos en áreas como la electrónica de potencia, sistemas de control y automatización, telecomunicaciones, programación en diferentes lenguajes y manejo de sistemas embebidos. Tengo la capacidad de adaptación a los diferentes cambios, y la mejor disposición para el trabajo en equipo. También me considero ser una persona responsable, puntual, respetuosa, comprometida y resolutiva, con buen ánimo y disposición para el aprendizaje continuo, y así afrontar nuevos desafíos que permitan desarrollarme profesionalmente.</p>'
  );
});

app.get('/hobbies', function (req, res) {
  res.send(
    '<ul><li>Pizza</li> <li>hamburquesa</li><li>Circuitos</li> <li>Tecnologia</li> </ul>'
  );
});
