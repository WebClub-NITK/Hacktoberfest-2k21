import React, { Component } from "react";
import axios from "axios";
import LeadView from "./leadView";

class LeadContainerView extends Component {
  constructor(props) {
    super(props);

    this.handleDeleteLead = this.handleDeleteLead.bind(this);

    this.state = {
      leads: [],
    };
  }

  async componentDidMount() {
    axios
      .get("/api/leads/")
      .then((res) => {
        this.setState({ leads: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleDeleteLead(lead) {
    axios
      .delete(`/api/leads/${lead.id}`)
      .then(() => {
        axios
          .get("/api/leads/")
          .then((res) => {
            this.setState({ leads: res.data });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { leads } = this.state;
    return <LeadView leads={leads} onDeleteLead={this.handleDeleteLead} />;
  }
}

export default LeadContainerView;
