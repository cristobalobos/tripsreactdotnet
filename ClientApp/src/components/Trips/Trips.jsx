import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Trips = () => {
    const [trips, setTrips] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("api/Trips/GetTrips")
            .then(response => {
                setTrips(response.data);
                setLoading(false);
            });
    }, []);

    const onTripUpdate = (id) => {
        navigate('/update/' + id);
    };

    const onTripDelete = (id) => {
        navigate('/delete/' + id);
    };

    const renderAllTripsTable = (trips) => (
        <div className="table-responsive shadow rounded mt-4">
            <table className="table table-hover table-bordered align-middle mb-0 bg-white">
                <thead className="table-primary text-center">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Date started</th>
                        <th>Date completed</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {trips.map(trip => (
                        <tr key={trip.id}>
                            <td>{trip.name}</td>
                            <td>{trip.description}</td>
                            <td>{new Date(trip.dateStarted).toISOString().slice(0, 10)}</td>
                            <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toISOString().slice(0, 10) : '-'}</td>
                            <td className="text-center">
                                <button onClick={() => onTripUpdate(trip.id)} className="btn btn-outline-success btn-sm me-2">
                                    ✏️ Update
                                </button>
                                <button onClick={() => onTripDelete(trip.id)} className="btn btn-outline-danger btn-sm">
                                    🗑️ Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">🌍 All Trips</h2>
            <p className="text-center">Here you can see all your saved trips.</p>
            {loading ? (
                <div className="text-center mt-5">
                    <div className="spinner-border text-primary" role="status" />
                    <p className="mt-2">Loading...</p>
                </div>
            ) : (
                renderAllTripsTable(trips)
            )}
        </div>
    );
};
