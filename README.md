# Proyecto React + ASP.NET Core

Aplicación full stack que integra un frontend en React con una API backend en ASP.NET Core. Generada con el comando `dotnet new react`.

## 🗂 Estructura del Proyecto

## ⚙️ Backend: API en ASP.NET Core

### Program.cs

- Contiene `Main()` y llama a `CreateWebHostBuilder()`.
- Usa `UseStartup<Startup>()` para configurar la app.

### Startup.cs

- `ConfigureServices`: Agrega servicios con inyección de dependencias.
- `Configure`: Define el middleware para manejar solicitudes HTTP.

### Controllers

- Define los endpoints de la API.
- Ejemplo: `TripsController` para gestionar viajes.

## 🧩 Frontend: Aplicación React (ClientApp)

### /public

- `index.html`: Único archivo HTML, contiene `<div id="root">` donde se monta React.

### /src

- `index.js`: Inicializa React apuntando al div con id `root`.
- `App.js`: Componente principal que agrupa los demás.
- `/components`: Componentes reutilizables (ej. `Counter`, `FetchData`, `NavMenu.js`).
- `Layout.js`: Define el diseño general de la app (ej. NavMenu + contenedor).

---

## 🧪 Comunicación entre React y la API

> (Este apartado se puede completar cuando implementes las llamadas fetch o axios hacia los endpoints de la API)

## 📦 Despliegue

> (Agregar detalles sobre publicación en IIS, Azure, Vercel u otro entorno)
