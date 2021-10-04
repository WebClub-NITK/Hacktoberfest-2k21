import axios from "axios";
import React, { Component, Fragment } from "react";
import LeadFormView from "./leadFormView";

class LeadFormContainerView extends Component {
  constructor(props) {
    super(props);

    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      lead: {
        name: "",
        email: "",
        message: "",
      },
    };
  }

  handleSubmit() {
    const { lead } = this.state;
    axios
      .post("/api/leads/", lead)
      .catch((err) => {
        console.log(err);
      });
  }

  handleFormChange(event, field) {
    const { lead } = this.state;
    const newLead = lead;
    newLead[field] = event.target.value;

    this.setState({
      lead: newLead,
    });
  }

  render() {
    const { lead } = this.state;
    return (
      <Fragment>
        <LeadFormView
          lead={lead}
          onFormChange={this.handleFormChange}
          onSubmit={this.handleSubmit}
        />
      </Fragment>
    );
  }
}

export default LeadFormContainerView;
