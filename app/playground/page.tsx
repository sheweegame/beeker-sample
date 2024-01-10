import React from 'react';
import { Grid } from '@tremor/react';
import Chart from './chart';
import ViewsCard from './views-card';

interface BarData {
  name: string;
  value: number;
}

interface CardData {
  category: string;
  stat: string;
  data: BarData[];
}

const website: BarData[] = [
  { name: '/home', value: 1230 },
  { name: '/contact', value: 751 },
  { name: '/gallery', value: 471 },
  { name: '/august-discount-offer', value: 280 },
  { name: '/case-studies', value: 78 }
];

const shop: BarData[] = [
  { name: '/home', value: 453 },
  { name: '/imprint', value: 351 },
  { name: '/shop', value: 271 },
  { name: '/pricing', value: 191 }
];

const app: BarData[] = [
  { name: '/shop', value: 789 },
  { name: '/product-features', value: 676 },
  { name: '/about', value: 564 },
  { name: '/login', value: 234 },
  { name: '/downloads', value: 191 }
];

const data: CardData[] = [
  {
    category: 'Website',
    stat: '10,234',
    data: website
  },
  {
    category: 'Online Shop',
    stat: '12,543',
    data: shop
  },
  {
    category: 'Mobile App',
    stat: '2,543',
    data: app
  }
];

export default function PlaygroundPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <h1 className="text-left font-medium text-3xl">Results</h1>
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6 mt-6">
        {data.map((item) => (
          <ViewsCard key={item.category} item={item} />
        ))}
      </Grid>
      <Chart />
    </main>
  );
}
