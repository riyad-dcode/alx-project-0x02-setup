import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-4xl font-bold mb-6">Users</h1>

        {loading ? (
          <p className="text-gray-600">Loading users...</p>
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