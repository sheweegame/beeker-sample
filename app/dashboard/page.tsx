import { Text, Grid } from '@tremor/react';
import WebsiteStats from './cards/stats/Website/card';
import Chart from './cards/chart';

const Page: React.FC = () => {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <h1 className="text-left font-medium text-3xl">Dashboard</h1>
      <Text>All the metrics</Text>
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6 mt-6">
        <WebsiteStats />
      </Grid>
      <Chart />
    </main>
  );
};

export default Page;
