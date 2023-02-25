import { Department, Employee, DepartmentDetail } from "../models/Models";
import { HTTPMethod, Service, Request, request } from "./_abstract";

const Requests = {
  departments: new Request<Department[]>(HTTPMethod.get, "v1/departments"),
  employees: new Request<Employee[]>(HTTPMethod.get, "v1/employees"),
  departmentDetail: (departmentId: string) =>
    new Request<DepartmentDetail>(HTTPMethod.get, `v1/departments/${departmentId}`),
};

class Backend implements Service {
  baseUrl = process.env.REACT_APP_API_HOST;

  async listEmployees(): Promise<Employee[]> {
    return request(this, Requests.employees).call();
  }

  async listDepartments(): Promise<Department[]> {
    return request(this, Requests.departments).call();
  }

  async listDepartmentDetail(departmentId: string): Promise<DepartmentDetail> {
    return request(this, Requests.departmentDetail(departmentId)).call();
  }
}

export default new Backend();
