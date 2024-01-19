import React from 'react';
import { Text } from '@tremor/react';

export default function Page() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <h1 className="text-left font-medium text-3xl">Page title</h1>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ornare, sem
        id pellentesque blandit, ex nisl laoreet sapien, nec vestibulum urna
        ligula pretium sem.
      </Text>
    </main>
  );
}
