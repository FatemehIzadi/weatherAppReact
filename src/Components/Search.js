import React, {Component} from "react";
import {Button, Form} from 'react-bootstrap';

export default class Search extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    
    submit(event) {
        event.preventDefault();
        this.props.refresh(this.state.value);
    }

    render () {
        return(
            <Form>
            <Form.Control
                className="float-left"
                type="search"
                placeholder="Enter city name"
                onChange={event => this.handleChange(event)}
                value={this.state.value}
            />
            <Button variant="primary"  onClick={event => this.submit(event)}>Search</Button>
            <Button variant="warning">Current</Button>
        </Form>
        );
    }
}