import { MouseEvent } from 'react';
import { Button, Grid } from '@tremor/react';
import { useRouter } from 'next/navigation';
import { ActionsProps } from './actions-props';

const Actions: React.FC<ActionsProps> = (props) => {
  const { formProps } = props;
  const { isValid, dirty } = formProps;
  const router = useRouter();
  const goBack = (event: MouseEvent) => {
    event.preventDefault();
    router.back();
  };

  return (
    <Grid className="w-1/3 mt-8 flex space-x-4">
      <Button variant="secondary" onClick={goBack}>
        Cancel
      </Button>
      <Button type="submit" disabled={!isValid || !dirty}>
        Submit
      </Button>
    </Grid>
  );
};

export default Actions;
