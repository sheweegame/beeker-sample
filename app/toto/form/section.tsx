import { Grid, TextInput, Text } from '@tremor/react';
import { hasErrorMessage, getErrorMessage } from '@adapters/_utils/forms';
import { SectionProps } from './section-props';

const Section: React.FC<SectionProps> = (props: SectionProps) => {
  const { formProps } = props;
  const { values, handleChange, handleBlur } = formProps;

  return (
    <Grid className="flex-col space-y-4">
      <Grid className="flex-col mt-2 w-100">
        <Text>Name</Text>
        <TextInput
          id="name"
          name="name"
          placeholder="Enter your name"
          value={values?.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={hasErrorMessage(formProps, 'name')}
          errorMessage={getErrorMessage(formProps, 'name')}
        />
      </Grid>
      <Grid className="flex-col mt-2 w-100">
        <Text>Username</Text>
        <TextInput
          id="username"
          name="username"
          placeholder="Choose a username"
          value={values?.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={hasErrorMessage(formProps, 'username')}
          errorMessage={getErrorMessage(formProps, 'username')}
        />
      </Grid>
      <Grid className="flex-col mt-2 w-100">
        <Text>Email</Text>
        <TextInput
          id="email"
          name="email"
          placeholder="Enter your email"
          value={values?.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={hasErrorMessage(formProps, 'email')}
          errorMessage={getErrorMessage(formProps, 'email')}
        />
      </Grid>
    </Grid>
  );
};

export default Section;
