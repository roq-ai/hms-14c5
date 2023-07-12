import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  name: yup.string().required(),
  phone_number: yup.string().required(),
  tag: yup.string(),
  user_id: yup.string().nullable(),
});
