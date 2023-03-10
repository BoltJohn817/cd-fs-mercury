export interface Employee {
  id: string;
  name: string;
  birthday: Date;
  bio: string;
  departmentId: string;
}

export interface Department {
  id: string;
  name: string;
}

export interface DepartmentDetail extends Department{
  employees: Employee[]
}