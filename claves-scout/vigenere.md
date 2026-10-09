# Vigenere

> Canonical HTML: https://bredaz.com/claves-scout/vigenere.html

1 Cómo funciona

Es un cifrado polialfabético: la misma letra se convierte en letras distintas según la posición, lo que hace inútiles los conteos de frecuencia simples. La palabra clave es la clave, y se repite tantas veces como sea necesario.

## 2 Cómo se usa, paso a paso

  1. Elegí una palabra clave (por ejemplo PATRULLA) y anotala: no se repite en el mensaje.
  2. Escribí el mensaje en claro y, debajo, la palabra clave repetida letra por letra.
  3. Para cada posición, corré la letra del mensaje tantas posiciones como la letra de la clave (A=0, B=1...).
  4. Para descifrar, corré cada letra hacia atrás la misma cantidad.
  5. Si el mensaje es corto, la palabra clave es la única cosa que hay que adivinar: probá palabras cortas y frecuentes.

## 3 Ejemplo

Con la palabra clave PATRULLA, el mismo mensaje cambia de letra por letra: es la clave que más se parece a una cifra “de verdad”.

## 4 Variantes y errores comunes

Vigenère completo con tabla, versión con desplazamiento inicial, y variantes modernas que usan una palabra clave larga como frase. Es la puerta de entrada a los métodos polialfabéticos que la app incluye junto a los clásicos.

Error clásico: escribir el mensaje sin separar palabras o sin acordar la convención de los espacios. El receptor no puede adivinar dónde termina una palabra, así que la primera regla de cualquier clave es dejar la convención por escrito antes de mandar el primer mensaje.

## 5 Dónde se usa en el scoutismo

Pruebas de nivel avanzado, mensajes de larga duración, actividades para instructores y patrullas mayores.

## 6 Practicarla en EncryptIA

En [EncryptIA](/encryptia/) (la app gratuita de Bredaz) esta clave está incluida con su tabla resuelta: podés cifrar, descifrar y pedirle a la inteligencia artificial que identifique la clave y el desplazamiento usados en un mensaje. Es la forma más rápida de practicar sin instructor.

  * [Descargar EncryptIA en Google Play](https://play.google.com/store/apps/details?id=com.bredaz.encryptia)
  * [Ver las otras claves scout](/claves-scout/)
  * [Usar la versión web](/encryptia/app/)

## 7 Preguntas frecuentes

### ¿Vigenère sirve para proteger información real hoy?

No. Aunque fue considerada indescifrable durante siglos, se rompe con análisis estadístico y con pocos recursos. Hoy se estudia por su valor histórico y por lo que enseña sobre claves.

### ¿Por dónde empiezo si quiero llegar a Vigenère?

Primero la clave César, después la de los números y la del teléfono. Con esas tres entendés el desplazamiento y llegás a Vigenère sin saltear pasos.

### ¿Dónde aprendo el resto de las claves scout?

En la [guía completa de claves scout](/claves-scout/) están las diez más usadas, y más de cuarenta en la app.
