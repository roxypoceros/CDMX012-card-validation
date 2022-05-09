# Validador de Tarjeta :tw-1f4b3: 

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)

***

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn), también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que solamente contiene dígitos [0-9]); a todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado; el número a verificar será válido si la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. Resumen del proyecto

En este proyecto construí una aplicación web con HTML, CSS y JavaScript que le permite a un usuario validar el número de una tarjeta de crédito. Tiene una funcionalidad para ocultar todos los dígitos de una tarjeta al ingresarlos, menos los últimos cuatro.
Pensé en crearla para personas de la tercera edad con sencillas instrucciones para facilitar el uso, ya que tal vez no estén familiarizados con este tipo de sitios web.

## 3. Objetivos de aprendizaje

Entendí y apliqué los siguientes objetivos de aprendizaje en el proyecto:

### HTML

- [:fa-check:] **Uso de HTML semántico**

### CSS

- [:fa-check:] **Uso de selectores de CSS**

- [:fa-check:] **Modelo de caja (box model): borde, margen, padding**

### Web APIs

- [:fa-check:] **Uso de selectores del DOM**

- [:fa-check:] **Manejo de eventos del DOM (listeners, propagación, delegación)**

- [:fa-check:] **Manipulación dinámica del DOM**

### JavaScript

- [:fa-check:] **Tipos de datos primitivos**

- [:fa-check:] **Strings (cadenas de caracteres)**

- [:fa-check:] **Variables (declaración, asignación, ámbito)**

- [:fa-check:] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

- [:fa-check:] **Uso de bucles/ciclos (while, for, for..of)**

- [:fa-check:] **Funciones (params, args, return)**

- [:fa-check:] **Pruebas unitarias (unit tests)**

- [:fa-check:] **Módulos de ECMAScript (ES Modules)**

- [:fa-check:] **Uso de linter (ESLINT)**

- [:fa-check:] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

### Control de Versiones (Git y GitHub)

- [:fa-check:] **Git: Instalación y configuración**

- [:fa-check:] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [:fa-check:] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [:fa-check:] **GitHub: Despliegue con GitHub Pages**

### UX (User eXperience)

- [:fa-check:] **Diseñar la aplicación pensando en y entendiendo al usuario**

- [:fa-check:] **Crear prototipos para obtener feedback e iterar**

- [:fa-check:] **Aplicar los principios de diseño visual**

## 4. Consideraciones generales

 El proyecto se entregó subiendo el código a GitHub.
[Lo puedes encontrar dando clic aquí.](https://github.com/roxypoceros/CDMX012-card-validation)
 
 La interfaz se despliega usando GitHub pages:
[Visita mi Card Validator aquí:](https://roxypoceros.github.io/CDMX012-card-validation)
Vista de la app.
![Vista de la app](https://i.imgur.com/AjXjfDO.png)


## 5. Criterios de aceptación mínimos del proyecto

Solo se pueden usar caracteres numéricos (dígitos) en la tarjeta a validar [0-9].


### Definición del producto

- La aplicación la pensé para personas que no están familiarizadas con este tipo de páginas, en especial de la tercera edad, por lo tanto tenía que ser fácil de usar y con algunas explicaciones que ayudaran al usuario.
- El usuario debe ingresar los 16 dígitos de su tarjeta, dar clic en el botón "Validar" y recibir una respuesta avisando si la tarjeta que ingreso es válida o no.
- De una manera muy fácil y directa, el usuario puede saber si la tarjeta que tiene es válida o no para realizar alguna compra.

### Interfaz de usuario (UI)

La interfaz permite al usuario:
* Insertar el número que queremos validar.
* Ver el resultado si es válido o no.
* Ocultar todos los dígitos de su número de tarjeta menos los últimos 4 caracteres.
* No debe poder ingresar un campo vacío.

### UX (Diseño de experiencia de usuario)

Antes de iniciar a codear, se debe entender el problema que se quiere solucionar y cómo mi aplicación lo soluciona.
- Esto se logró trabajando un boceto en papel, a lápiz, pedí feedback a mis compañeras. 
![Boceto a lápiz de app](https://i.imgur.com/3MXy555.jpg)

- De acuerdo a sus comentarios realicé el prototipo digital en Figma. 
Primer prototipo:
![Primer prototipo](https://i.imgur.com/EnYecfD.jpg)
Segundo prototipo:
![Segundo prototipo](https://i.imgur.com/NigvXS1.jpg)

#### Visualmente (HTML y CSS)

Se maquetó de forma exacta el prototipo final que hice en Figma, con HTML y CSS. En este momento elegí los colores, tipo de fuente, etc a usar.

Los archivos que usé son:
##### `src/index.html`

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML). 

* `<header>`: encabezado de tu proyecto.
* `<main>`: contenido principal de tu proyecto.
* `<footer>`: pie de página de tu proyecto.

##### `src/style.css`

Este archivo contiene las reglas de estilo.

#### Funcionalmente (JavaScript - pruebas unitarias)

* La lógica del proyecto está implementada completamente en JavaScript.
(JavaScript puro también conocido como Vanilla JavaScript.)

Hay 2 archivos JavaScript separando responsabilidades de la siguiente manera:

##### `src/validator.js`

Contiene las funciones necesarias para que el usuario pueda verificar la tarjeta de crédito y ocultar los dígitos de su número de tarjeta.
Esta función es pura e independiente del DOM.

##### `src/index.js`

Aqui está todo el código que tiene que ver con la interacción del DOM 
Es decir, en este archivo se  invocan funciones según sea necesario para actualizar el resultado en la pantalla (UI).

##### `test/validator.spec.js`

En este archivo se completaron las pruebas unitarias de las funciones utilizando Jest.


