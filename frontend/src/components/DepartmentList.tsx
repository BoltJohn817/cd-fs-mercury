import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Department } from "../models/Models";
import api from "../utils/api";
import { ErrorMessage } from "./ErrorMessage";
import { LoadingIndicator } from "./LoadingIndicator";

export const DepartmentList = () => {
  const [departments, setDepartments] = useState<Department[] | undefined>();

  useEffect(() => {
    (async () => {
      try {
        setDepartments(await api.listDepartments());
      } catch (ex) {
        console.error(ex);
      }
    })();
  }, []);

  if (!departments) {
    return <LoadingIndicator message="Loading Departments..." />;
  } else if (departments.length === 0) {
    return <ErrorMessage>No departments</ErrorMessage>;
  }

  return (
    <>
      <h2>Department List</h2>

      <ul>
        {departments.map((d) => (
          <li key={`department-${d.id}`}>
            <h3>
              <Link to={`/department/${d.id}`}>{d.name}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};
