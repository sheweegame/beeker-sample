'use client';

import { Card, Metric, Text, Title, BarList, Flex } from '@tremor/react';

export default function ViewsCard(props: { item: any }) {
  const { item } = props;

  return (
    <Card key={item.category}>
      <Title>{item.category}</Title>
      <Flex justifyContent="start" alignItems="baseline" className="space-x-2">
        <Metric>{item.stat}</Metric>
        <Text>Total views</Text>
      </Flex>
      <Flex className="mt-6">
        <Text>Pages</Text>
        <Text className="text-right">Views</Text>
      </Flex>
      <BarList
        color="blue"
        data={item.data}
        valueFormatter={(number: number) =>
          Intl.NumberFormat('en-us').format(number).toString()
        }
        className="mt-2 bar-list"
      />
    </Card>
  );
}
