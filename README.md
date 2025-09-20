# POKEFUSION

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 18.0.0

# Vistas
<img width="1864" height="1015" alt="image" src="https://github.com/user-attachments/assets/bf08fcb3-3c14-4aae-a5f7-f3616e015df3" />

# Objetivo
Consumir una API pokemon la cual debe generar 3 pokemones aleatorios y de esos mismos crear una tarjeta fusionada, asi como tambien tener un apartado para agregarlo a favoritos.

# Estructura 
<img width="418" height="525" alt="image" src="https://github.com/user-attachments/assets/f0b93a9e-4e18-46d3-97cd-6bd98670683e" />


#Herramientas
Angular 18
CSS
Material angular
API PokeAPI

## DESCARGAR E INSTALLAR
```bash
git clone
npm install
ng serve
```
# REGLAS DE SEGURIDAD
Cómo funciona con las reglas
Cada usuario tiene su propio “documento contenedor” identificado por su uid.
Dentro de ese documento, se guardan los Pokémon favoritos como documentos separados (docId_1, docId_2, …).
Las reglas que definimos permiten que:
El usuario solo lea y escriba dentro de su propio documento (request.auth.uid == userId).
Ningún otro usuario puede acceder a documentos ajenos.
Cualquier otra colección fuera de favorites está bloqueada por defecto.

# USO DE IA
1. Dónde se usó

Se utilizó IA para crear y mejorar componentes de Angular, servicios de Firebase y la integración con APIs externas (como PokeAPI y Firebase Firestore).
Estilos y animaciones: Se generaron sugerencias de CSS y animaciones dinámicas para las tarjetas de Pokémon y la interfaz de usuario.
Optimización de flujo de datos: La IA ayudó a estructurar la lógica de fusión de Pokémon y la presentación de los datos de forma más clara y eficiente.

2. Por qué se usó

Rapidez y eficiencia: Para acelerar la creación de componentes complejos sin tener que escribir todo el código manualmente.
Buenas prácticas: La IA proporcionó soluciones siguiendo las mejores prácticas de Angular y Firebase.
Soporte en diseño: Ayuda a implementar animaciones y estilos visualmente atractivos sin depender únicamente de experiencia previa en CSS.

3. Resumen de prompts

"Genera un componente de Angular para mostrar una lista de Pokémon fusionados con sus stats y tipos."
"Integra Firebase Firestore para guardar favoritos con reglas de seguridad."

4. Riesgos

Dependencia de la IA: Si se confía ciegamente en la IA, el código podría no cumplir con los requisitos de seguridad o buenas prácticas.
Errores o inconsistencias: La IA puede generar código con errores sutiles, incompatibilidades o sintaxis incorrecta.
Privacidad y seguridad: Uso de datos sensibles o integración con APIs externas puede generar vulnerabilidades si no se revisa el código generado.

5. Mitigación
Revisión manual: Todo el código generado fue revisado y adaptado manualmente.
Pruebas y depuración: Se ejecutaron pruebas funcionales y de seguridad para garantizar la correcta operación del proyecto.
Documentación y control de versiones: Se mantuvo un control de cambios y documentación para rastrear modificaciones y soluciones propuestas por la IA.

