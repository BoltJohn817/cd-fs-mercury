import { Router, Response, Request } from "express";

import { HTTPError } from "../lib/errors";
import { Department, Employee } from "../types";
import departments from "../db/departments.json";
import employees from "../db/employees.json";

const router: Router = Router();

router.get("/v1/departments/:id", (req: Request, res: Response) => {
  const departmentId = req.params.id;
  const department = departments.find(
    (d: Department) => d.id === parseInt(departmentId)
  );

  if (department) {
    const departmentEmployees = employees.filter(
      (e: Employee) => e.departmentId === departmentId
    );
    res.send({ ...department, employees: departmentEmployees });
  } else {
    throw new HTTPError(404, `Department with ID ${departmentId} not found.`);
  }
});

router.get("/v1/departments", (_req: Request, res: Response) => {
  res.send(departments);
});

router.get("/v1/employees", (_unused: Request, res: Response) => {
  res.send(employees);
});

export default router;
