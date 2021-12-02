import React, {Component} from "react";
import axios from "axios";
import {Button, Form} from 'react-bootstrap';

export default class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        city: ""
      };
    }

    setCityName(event) {
        event.preventDefault();
        this.setState({city: event.target.value});
        alert(this.state.city);
    }

    handleChange(event) {
        this.setState({ city: event.target.value });
    }

    render () {
        return(
            <Form>
            <Form.Control
                type="text"
                placeholder="Enter city name"
                onChange={event => this.handleChange(event)}
                value={this.state.city}
            />
            <Button variant="primary" onClick={event => this.setCityName(event)}>Search</Button>
            <Button variant="warning">Current</Button>
        </Form>
        );
    }

}