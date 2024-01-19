import { Card, Text, Title, BarList, Flex } from '@tremor/react';
import { categories, data } from '../../../data/stats/Website/stats';

const Chart = () => (
  <Card>
    <Title>Test</Title>
    <Flex justifyContent="start" alignItems="baseline" className="space-x-2">
      <Text>10,234 Total Views</Text>
    </Flex>
    <Flex className="mt-6">
      {categories.map((category) => (
        <Text key={category}>{category}</Text>
      ))}
    </Flex>
    <BarList
      color="blue"
      data={data}
      valueFormatter={(number: number) =>
        Intl.NumberFormat('en-us').format(number).toString()
      }
      className="mt-2 bar-list"
    />
  </Card>
);

export default Chart;
