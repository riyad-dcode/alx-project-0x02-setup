import { PostProps } from '@/interfaces';

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm mb-5 max-w-2xl">
      <h3 className="text-xl font-semibold mb-1 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-2">{content}</p>
      <span className="text-sm text-gray-400">Posted by User {userId}</span>
    </div>
  );
}