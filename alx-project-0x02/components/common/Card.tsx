import { type CardProps } from '@/interfaces';

export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 mb-6 max-w-xl border border-gray-200">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 text-base">{content}</p>
    </div>
  );
}
