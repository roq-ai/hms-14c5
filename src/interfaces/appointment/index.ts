import { DepartmentInterface } from 'interfaces/department';
import { UserInterface } from 'interfaces/user';
import { PatientInterface } from 'interfaces/patient';
import { GetQueryInterface } from 'interfaces';

export interface AppointmentInterface {
  id?: string;
  department_id?: string;
  doctor_id?: string;
  patient_id?: string;
  created_at?: any;
  updated_at?: any;

  department?: DepartmentInterface;
  user?: UserInterface;
  patient?: PatientInterface;
  _count?: {};
}

export interface AppointmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  department_id?: string;
  doctor_id?: string;
  patient_id?: string;
}
