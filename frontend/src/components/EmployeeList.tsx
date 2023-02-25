import React from "react";
import { Employee } from "../models/Models";
import api from "../utils/api";
import { EmployeeDetailListItem } from "./EmployeeDetailListItem";
import { LoadingIndicator } from "./LoadingIndicator";

type EmployeeListProps = {};
type EmployeeListState = {
  allEmployees?: Employee[];
};

export class EmployeeList extends React.Component<
  EmployeeListProps,
  EmployeeListState
> {
  state: EmployeeListState = {};

  componentDidMount() {
    const self = this;
    api
      .listEmployees()
      .then((employees) => self.setState({ allEmployees: employees }));
  }

  render() {
    return (
      <div className="employee_list_page">
        <h2>Employee List</h2>
        <ul>
          {!this.state.allEmployees && (
            <LoadingIndicator message="Fetching employees..." />
          )}
          {this.state.allEmployees?.map((employee) => (
            <EmployeeDetailListItem key={employee.id} employee={employee} />
          ))}
        </ul>
      </div>
    );
  }
}
