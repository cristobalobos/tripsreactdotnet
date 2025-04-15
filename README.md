# 🧭 Trip Management Project

This project allows users to manage trips using a RESTful API developed in ASP.NET Core with a React frontend. It serves as a practice project for concepts such as dependency injection, data modeling, Entity Framework Core, and frontend/backend integration.

---

## 📁 Project Structure

The solution is organized as follows:

### 1. `Controllers`

- Contains the API endpoints, such as `TripsController.cs`, which receives and processes HTTP requests for CRUD operations.

### 2. `Data`

- Contains the `TripsDbContext` for Entity Framework Core and the `Trip` model.
- Handles connection to the SQL Server database.

### 3. `Services`

- `ITripService.cs`: Interface for service abstraction.
- `TripService.cs`: Service layer that interacts with the `DbContext`.

### 4. `ClientApp` (React Frontend)

- Contains all React components.
- Includes views for:
  - Listing trips (`Trips.jsx`)
  - Creating a trip (`Create.jsx`)
  - Updating a trip (`Update.jsx`)
  - Deleting a trip (`Delete.jsx`)

---

## 📊 Data Model

The core model is `Trip.cs`:

```csharp
public class Trip
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public DateTime DateStarted { get; set; }
    public DateTime? DateCompleted { get; set; }
}
```

---

## 🧠 Backend Features

- Built with **ASP.NET Core**
- RESTful architecture
- Uses **Entity Framework Core** with SQL Server
- Supports full CRUD for `Trip` entities
- Dependency injection for service layer

```csharp
public void ConfigureServices(IServiceCollection services)
{
    services.AddControllersWithViews();
    services.AddDbContext<TripsDbContext>(options =>
        options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
    services.AddTransient<ITripService, TripService>();
}
```

---

## 🖥️ Frontend Features

- Built using **React** with functional components and **Hooks**
- Uses `axios` for HTTP requests to the backend
- Navigation via `react-router-dom`
- Bootstrap-based responsive design

### Frontend Functionalities:

- **📥 Create**: Add a new trip
- **📄 Read**: View a table of trips
- **✏️ Update**: Edit an existing trip
- **🗑️ Delete**: Remove a trip

Example of fetching trips with `useEffect`:

```jsx
useEffect(() => {
  axios.get("api/Trips/GetTrips").then((response) => {
    setTrips(response.data);
    setLoading(false);
  });
}, []);
```

---

## 📦 How to Run

1. Make sure you have **.NET SDK**, **Node.js**, and **npm** installed.
2. Clone the repo:

```
git clone https://github.com/cristobalobos/tripsreactdotnet.git
```

3. Restore dependencies and run backend:

```
cd travelsreactdotnet
dotnet restore
dotnet run
```

4. From `ClientApp/` run frontend:

```
npm install
npm start
```

---

## 📌 Notes

- Some parts of the frontend include comments comparing **class components vs hooks** for learning purposes.
- `package-lock.json` is ignored via `.gitignore`.

---

## 🚀 Future Improvements

- Add validation to forms
- Support filtering/search in the trip list
- Improve UI/UX with animations or design systems

---

## 🤝 Credits

Developed by Cristóbal Obos for educational purposes. Contributions and improvements are welcome!
