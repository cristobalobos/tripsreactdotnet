# Trip Management Project

This is a simple project that allows you to manage trips using a REST API. The main goal is to practice development with services, data models, and dependency injection in a C# application.

---

## 🗂 Project Structure

The project is organized into the following main folders:

### 1. **`Data`**

- Contains all files related to data, such as models and services.

### 2. **`Models`**

- This folder defines the data models. For example, `Trip.cs`, which represents a trip with properties such as `Id`, `Name`, `Description`, `DateStarted`, and `DateCompleted`.

### 3. **`Services`**

- Contains the services that interact with the data models. These services implement the business logic required to get, create, update, and delete trips.

---

## 🧱 Data Model

To handle trip data, the class `Trip` is defined within the `Trips.Data` namespace. This model includes the following properties:

- `Id`: Unique identifier for the trip.
- `Name`: Name of the trip.
- `Description`: A brief description of the trip.
- `DateStarted`: Start date of the trip.
- `DateCompleted`: End date of the trip (optional).

---

## 🧪 Mock Services

Mock services are used (no real database) to simulate data manipulation.

- The `ITripService.cs` interface defines the required methods for performing CRUD operations.
- The `TripService.cs` class implements this interface and uses a static list defined in `Data.cs` to store the data in memory.

---

## 🧩 Dependency Injection

Dependency injection is configured in the `Startup.cs` file, allowing services to be available throughout the application:

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddTransient<ITripService, TripService>();
}
```

---

## 🌐 CRUD Actions (Frontend)

The frontend of the application allows performing the following operations on trips:

- **Read**: View a list of all trips or view the details of a specific trip.
- **Write**: Create a new trip.
- **Update**: Edit the data of an existing trip.
- **Delete**: Remove a trip from the list.

These operations interact with the API using HTTP requests (GET, POST, PUT, DELETE).
