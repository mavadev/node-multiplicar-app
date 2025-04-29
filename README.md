# 📐 Node Multiplicar App

Una aplicación de línea de comandos desarrollada en **Node.js** y **TypeScript** que genera tablas de multiplicar personalizadas. Permite configurar diversos parámetros como la base, el límite, la visualización en consola, el nombre del archivo y la carpeta de destino.

---

## 🚀 Características

- ✅ Generación de tablas de multiplicar para cualquier base numérica.
- 📝 Personalización del nombre del archivo de salida.
- 📁 Especificación de la carpeta de destino para los archivos generados.
- 👀 Opción para mostrar la tabla en la consola.
- 🧱 Arquitectura basada en principios de Clean Architecture.
- ⚙️ Gestión de argumentos mediante `yargs`.

---

## 🛠️ Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/mavadev/node-multiplicar-app.git
   cd node-multiplicar-app
   
2. Instala las dependencias:

   ```bash
   npm install

---

## 💻 Uso

Puedes ejecutar la aplicación utilizando ts-node o compilando el proyecto previamente. A continuación, se presentan ejemplos utilizando ts-node:

## Generar y mostrar la tabla del 5 hasta el 10 y guardarla en `./tablas/tabla-5.txt`:
   ```bash
   npx ts-node src/app.ts --base=5 --limit=10 --show --name=tabla-5.txt --destination=tablas
  ```
## Generar la tabla del 9 hasta el 15 y guardarla en `./resultados/tabla-9.txt`:
   ```bash
   npx ts-node src/app.ts -b 9 -l 15 -n tabla-9.txt -d resultados
  ```

### Parámetros disponibles:

- `filename` o `-b`: (Obligatorio) Número base para la tabla de multiplicar.
- `limit` o `-l`: Límite hasta el cual se multiplicará la base. Por defecto es 10.
- `show` o `-s`: Muestra la tabla en la consola. Valor por defecto: false.
- `filename` o `-n`: Nombre del archivo de salida. Por defecto es tabla-{base}.txt.
- `destination` o `-d`: Carpeta donde se guardará el archivo. Por defecto es ./output.
