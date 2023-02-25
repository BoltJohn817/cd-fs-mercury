import { Employee } from "../models/Models";

type EmployeeDetailListItemProps = {
  employee: Employee;
};
export const EmployeeDetailListItem = ({ employee }: EmployeeDetailListItemProps) => {
  return (
    <li className="employee_detail">
      <h3>{employee.name}</h3>
      <h5>Birth Date: {employee.birthday}</h5>
      <p>{employee.bio}</p>
    </li>
  );
};
