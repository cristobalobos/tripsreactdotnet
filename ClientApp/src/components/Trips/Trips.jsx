import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Trips = () => {
    // 🧠 HOOK EQUIVALENTE A this.state = { trips: [], loading: true }
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);

    // 🧠 HOOK EQUIVALENTE A this.props.history.push('/algo')
    const navigate = useNavigate();

    // 🧠 HOOK EQUIVALENTE A componentDidMount()
    useEffect(() => {
        axios.get("api/Trips/GetTrips")
            .then(response => {
                setTrips(response.data); // this.setState({ trips: response.data })
                setLoading(false);       // this.setState({ loading: false })
            });
    }, []); // [] hace que esto solo corra una vez, como componentDidMount

    // 🧠 FUNCIONES que antes estaban en métodos de clase
    const onTripUpdate = (id) => {
        navigate('/update/' + id); // equivalente a this.props.history.push('/update/' + id)
    };

    const onTripDelete = (id) => {
        navigate('/delete/' + id);
    };

    // 🧠 FUNCION QUE RENDERIZA UNA TABLA — esto es lo mismo con clases o hooks
    const renderAllTripsTable = (trips) => (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Date started</th>
                    <th>Date completed</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {trips.map(trip => (
                    <tr key={trip.id}>
                        <td>{trip.name}</td>
                        <td>{trip.description}</td>
                        <td>{new Date(trip.dateStarted).toISOString().slice(0, 10)}</td>
                        <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toISOString().slice(0, 10) : '-'}</td>
                        <td>
                            <button onClick={() => onTripUpdate(trip.id)} className="btn btn-success mr-2">
                                Update
                            </button>
                            <button onClick={() => onTripDelete(trip.id)} className="btn btn-danger">
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    // 🧠 EQUIVALENTE A render() { return (...) }
    return (
        <div>
            <h1>All trips</h1>
            <p>Here you can see all trips</p>
            {loading ? <p><em>Loading...</em></p> : renderAllTripsTable(trips)}
        </div>
    );
};
