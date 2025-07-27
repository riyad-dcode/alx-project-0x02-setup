import { UserProps } from '@/interfaces';

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-md mb-5 max-w-2xl">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600 mb-1">📧 {email}</p>
      <p className="text-gray-500 text-sm">
        🏠 {address.street}, {address.suite}, {address.city} {address.zipcode}
      </p>
    </div>
  );
}