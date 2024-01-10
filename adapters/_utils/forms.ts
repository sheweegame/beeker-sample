import { FormikProps, getIn } from 'formik';

export const getErrorMessage = <T>(
  props: FormikProps<T>,
  fieldName: string
): string => {
  const { touched, errors } = props;
  const fieldTouched = getIn(touched, fieldName);
  const fieldErrors = getIn(errors, fieldName);

  if (fieldTouched && fieldErrors) return fieldErrors;

  return '';
};

export const hasErrorMessage = <T>(
  props: FormikProps<T>,
  fieldName: string
): boolean => {
  return Boolean(getErrorMessage(props, fieldName));
};
