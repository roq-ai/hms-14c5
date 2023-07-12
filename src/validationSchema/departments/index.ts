import * as yup from 'yup';

export const departmentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  hospital_id: yup.string().nullable(),
});
