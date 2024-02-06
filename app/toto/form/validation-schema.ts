import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { FormValues } from './values';

export const validationSchema: SchemaOf<FormValues> = yup.object().shape({
  name: yup.string().required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
});
