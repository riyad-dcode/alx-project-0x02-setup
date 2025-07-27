import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps,UsersPageProps } from '@/interfaces';
import { GetStaticProps } from 'next';


export default function UsersPage({ users }: UsersPageProps) {
  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6">Users</h1>

        {users.length === 0 ? (
          <p className="text-gray-600">No users found.</p>
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))
        )}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: UserProps[] = await res.json();

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        users: [],
      },
    };
  }
};