import React, { Component } from 'react';
import axios from 'axios';

// This component lets the user update an existing trip
export class Update extends Component {
    constructor(props) {
        super(props);

        // Bind functions to the component
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onUpdateCancel = this.onUpdateCancel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Initial state of the form
        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
    }

    // When the component loads, get the trip data from the API
    componentDidMount() {
        const { id } = this.props.match.params;

        // Get the trip by ID from the server
        axios.get("api/Trips/SingleTrip/" + id).then(trip => {
            const response = trip.data;

            // Fill the form with the trip data
            this.setState({
                name: response.name,
                description: response.description,
                // Convert the date to format "YYYY-MM-DD" for the input
                dateStarted: new Date(response.dateStarted).toISOString().slice(0, 10),
                dateCompleted: response.dateCompleted ? new Date(response.dateCompleted).toISOString().slice(0, 10) : null
            });
        });
    }

    // Update the name when the input changes
    onChangeName(e) {
        this.setState({ name: e.target.value });
    }

    // Update the description
    onChangeDescription(e) {
        this.setState({ description: e.target.value });
    }

    // Update the start date
    onChangeDateStarted(e) {
        this.setState({ dateStarted: e.target.value });
    }

    // Update the end date
    onChangeDateCompleted(e) {
        this.setState({ dateCompleted: e.target.value });
    }

    // If user clicks "Cancel", go back to the trips page
    onUpdateCancel() {
        const { history } = this.props;
        history.push('/trips');
    }

    // When the user submits the form
    onSubmit(e) {
        e.preventDefault(); // Prevent default form submit behavior
        const { history } = this.props;
        const { id } = this.props.match.params;

        // Create an object with the updated trip data
        let tripObject = {
            name: this.state.name,
            description: this.state.description,
            dateStarted: new Date(this.state.dateStarted).toISOString(),
            dateCompleted: this.state.dateCompleted ? new Date(this.state.dateCompleted).toISOString() : null
        }

        // Send the update to the API
        axios.put("api/Trips/UpdateTrip/" + id, tripObject).then(result => {
            // After updating, go back to the list of trips
            history.push('/trips');
        });
    }

    render() {
        return (
            <div className="trip-form">
                <h3>Update trip</h3>
                <form onSubmit={this.onSubmit}>
                    {/* Input for trip name */}
                    <div className="form-group">
                        <label>Trip name: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>

                    {/* Input for trip description */}
                    <div className="form-group">
                        <label>Trip description: </label>
                        <textarea
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>

                    <div className="row">
                        {/* Input for start date */}
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of start: </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.dateStarted}
                                    onChange={this.onChangeDateStarted}
                                />
                            </div>
                        </div>

                        {/* Input for end date */}
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of completion: </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.dateCompleted}
                                    onChange={this.onChangeDateCompleted}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Buttons: Cancel and Update */}
                    <div className="form-group">
                        <button onClick={this.onUpdateCancel} className="btn btn-default">Cancel</button>
                        <button type="submit" className="btn btn-success">Update</button>
                    </div>
                </form>
            </div>
        );
    }
}
