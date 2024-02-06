import { FormikProps, useFormik } from 'formik';
import { FormValues } from './values';
import { validationSchema } from './validation-schema';
import { initialValues } from './initial-values';

const useForm = () => {
  const handleSubmit = () => {
    throw new Error('Not implemented');
  };

  const formProps: FormikProps<FormValues> = useFormik<FormValues>({
    enableReinitialize: true,
    validationSchema,
    initialValues,
    onSubmit: handleSubmit,
    validateOnBlur: false,
    validateOnChange: true,
  });

  return formProps;
};

export default useForm;
