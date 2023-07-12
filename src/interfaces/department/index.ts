import { AppointmentInterface } from 'interfaces/appointment';
import { HospitalInterface } from 'interfaces/hospital';
import { GetQueryInterface } from 'interfaces';

export interface DepartmentInterface {
  id?: string;
  name: string;
  hospital_id?: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  hospital?: HospitalInterface;
  _count?: {
    appointment?: number;
  };
}

export interface DepartmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  hospital_id?: string;
}
