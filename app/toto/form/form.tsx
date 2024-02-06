'use client';

import Section from './section';
import useForm from './hook';
import Actions from './actions/actions';

const Form = () => {
  const formProps = useForm();

  return (
    <form onSubmit={formProps.handleSubmit}>
      <Section formProps={formProps} />
      <Actions formProps={formProps} />
    </form>
  );
};

export default Form;
