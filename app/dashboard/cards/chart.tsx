import { Card, AreaChart, Title, Text } from '@tremor/react';
import { data, categories } from '../data/chart/chart';

const Chart = () => (
  <Card className="mt-8">
    <Title>Test</Title>
    <Text>Comparison between Sales and Profit</Text>
    <AreaChart
      className="mt-4 h-80"
      data={data}
      categories={categories}
      index={(data.length && Object.keys(data[0])[0]) || ''}
      colors={['blue', 'indigo']}
      valueFormatter={(number: number) =>
        `$ ${Intl.NumberFormat('us').format(number).toString()}`
      }
      yAxisWidth={60}
    />
  </Card>
);

export default Chart;
