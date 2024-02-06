import { Card, Text } from '@tremor/react';
import Form from './form/form';

const Page: React.FC = () => {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <h1 className="text-left font-medium text-3xl">TOTO</h1>
      <Text>Titi</Text>
      <Card className="mt-6 w-96">
        <Form />
      </Card>
    </main>
  );
};

export default Page;
