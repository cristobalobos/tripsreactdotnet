import React, { Component } from 'react';
import axios from 'axios';

// This component lets the user create a new trip
export class Create extends Component {
    constructor(props) {
        super(props);

        // Bind functions to the component
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // Initial state (empty form)
        this.state = {
            name: '',
            description: '',
            dateStarted: null,
            dateCompleted: null
        }
    }

    // Update name in the state when the input changes
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    // Update description when the user types in the textarea
    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    // Update the start date
    onChangeDateStarted(e) {
        this.setState({
            dateStarted: e.target.value
        });
    }

    // Update the completion date
    onChangeDateCompleted(e) {
        this.setState({
            dateCompleted: e.target.value
        });
    }

    // Called when the form is submitted
    onSubmit(e) {
        e.preventDefault(); // Stop default form action

        const { history } = this.props;

        // Create a new trip object with values from the form
        let tripObject = {
            name: this.state.name,
            description: this.state.description,
            dateStarted: this.state.dateStarted,
            dateCompleted: this.state.dateCompleted
        }

        // Send the trip to the API (backend)
        axios.post("api/Trips/AddTrip", tripObject, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        history.push('/trips');
    }


    render() {
        return (
            <div className="trip-form">
                <h3>Add new trip</h3>
                <form onSubmit={this.onSubmit}>
                    {/* Input for the trip name */}
                    <div className="form-group">
                        <label>Trip name:  </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>

                    {/* Input for the description */}
                    <div className="form-group">
                        <label>Trip description: </label>
                        <textarea
                            type="text"
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>

                    <div className="row">
                        {/* Input for start date */}
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of start:  </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.dateStarted}
                                    onChange={this.onChangeDateStarted}
                                />
                            </div>
                        </div>

                        {/* Input for completion date */}
                        <div className="col col-md-6 col-sm-6 col-xs-12">
                            <div className="form-group">
                                <label>Date of completion:  </label>
                                <input
                                    type="date"
                                    className="form-control"
                                    value={this.state.dateCompleted}
                                    onChange={this.onChangeDateCompleted}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit button */}
                    <div className="form-group">
                        <input type="submit" value="Add trip" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}
