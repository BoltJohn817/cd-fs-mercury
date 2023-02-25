import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EmployeeDetailListItem } from "./EmployeeDetailListItem";
import { ErrorMessage } from "./ErrorMessage";
import { LoadingIndicator } from "./LoadingIndicator";

import { DepartmentDetail, Employee } from "../models/Models";
import api from "../utils/api";

export type DepartmentDetailParam = {
  id: string;
};

export const DepartmentDetails = () => {
  const { id } = useParams<DepartmentDetailParam>();
  const [isLoading, setLoading] = useState(false);
  const [departmentDetail, setDepartmentDetail] = useState<DepartmentDetail>();

  useEffect(() => {
    setLoading(true);
    api
      .listDepartmentDetail(id)
      .then((dDptData) => setDepartmentDetail(dDptData))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div>
      <h2>Department Details: {departmentDetail && departmentDetail.name}</h2>
      {isLoading ? (
        <LoadingIndicator />
      ) : departmentDetail ? (
        departmentDetail.employees && (
          <ul>
            {departmentDetail.employees?.map((employee: Employee) => (
              <EmployeeDetailListItem key={employee.id} employee={employee} />
            ))}
          </ul>
        )
      ) : (
        <ErrorMessage>Cannot find department with id: {id}</ErrorMessage>
      )}
    </div>
  );
};
