# Proyecto de Gestión de Viajes

Este es un proyecto simple que permite gestionar viajes mediante una API REST. El objetivo es practicar el desarrollo con servicios, modelos de datos e inyección de dependencias en una aplicación en C#.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

### 1. **Carpeta "Datos"**

- Esta carpeta contiene todos los archivos relacionados con los datos, como los modelos y los servicios.

### 2. **Carpeta "Modelos"**

- Dentro de esta carpeta se encuentran las definiciones de los modelos de datos. Por ejemplo, el modelo `Trip.cs`, que representa un viaje con propiedades como `Id`, `Nombre`, `Descripción`, `DateStarted`, y `DateCompleted`.

### 3. **Carpeta "Servicios"**

- Aquí se encuentran los servicios que interactúan con los modelos de datos. Los servicios se encargan de la lógica de negocio, como obtener viajes, agregar nuevos viajes, actualizar, eliminar, etc.

## Creación de Modelos de Datos

Para trabajar con los datos, se crea un modelo que representa un viaje en nuestra aplicación. En el archivo `Trip.cs` definimos una clase `Trip` dentro del espacio de nombres `Trips.Data`. El modelo tiene las siguientes propiedades:

- `Id`: Un identificador único para el viaje.
- `Nombre`: El nombre del viaje.
- `Descripción`: Una breve descripción del viaje.
- `DateStarted`: La fecha de inicio del viaje.
- `DateCompleted`: La fecha de finalización del viaje (opcional, ya que no todos los viajes están completos).

## Creación de Servicios Ficticios

El siguiente paso es crear servicios que manipulen los datos. Los servicios permiten realizar operaciones sobre los viajes, como obtener todos los viajes, obtener un viaje por su ID, actualizar un viaje, eliminar un viaje y agregar un nuevo viaje. Para esto, se creó la interfaz `ITripService.cs` dentro de la carpeta `Servicios`, que define los métodos necesarios.

La clase `TripService.cs` implementa esta interfaz y contiene la lógica de negocio para realizar estas operaciones. Debido a que no estamos conectando nuestra aplicación a una base de datos, los datos se gestionan en memoria a través de una lista estática en el archivo `Data.cs`, que simula la base de datos con algunos viajes predefinidos.

## Inyección de Dependencias

Para que los servicios estén disponibles en toda la aplicación, se configura la inyección de dependencias en el archivo `Startup.cs`. En el método `ConfigureServices`, se agrega la configuración para que `ITripService` sea inyectado con su implementación `TripService`. Esto permite que los servicios se puedan utilizar en los controladores de la API y otras partes de la aplicación.

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddTransient<ITripService, TripService>();
}
```
