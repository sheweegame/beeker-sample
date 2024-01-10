import { Card, Title, Text, Button, Grid } from '@tremor/react';
import { queryBuilder } from '../../../adapters/lib/planetscale';
import Search from './search';
import UsersTable from './table';
import Link from 'next/link';
import { MOCK_USERS } from './users.mock';

export default async function ListUsersPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>A list of users.</Text>
      <Grid className="mt-4 flex space-x-4">
        <Search />
        <Link href="/users/create">
          <Button>New</Button>
        </Link>
      </Grid>
      <Card className="mt-6">
        <UsersTable users={MOCK_USERS} />
      </Card>
    </main>
  );
}
