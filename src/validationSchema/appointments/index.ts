import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  department_id: yup.string().nullable(),
  doctor_id: yup.string().nullable(),
  patient_id: yup.string().nullable(),
});
