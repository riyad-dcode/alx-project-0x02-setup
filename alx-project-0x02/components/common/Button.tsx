import { type ButtonProps } from '@/interfaces';

export default function Button({ label, size = 'medium', shape = 'rounded-md', onClick }: ButtonProps) {
  let sizeClass = '';
  let shapeClass = '';

  switch (size) {
    case 'small':
      sizeClass = 'text-sm px-3 py-1';
      break;
    case 'large':
      sizeClass = 'text-lg px-6 py-3';
      break;
    case 'medium':
    default:
      sizeClass = 'text-base px-4 py-2';
      break;
  }

  switch (shape) {
    case 'rounded-sm':
      shapeClass = 'rounded-sm';
      break;
    case 'rounded-full':
      shapeClass = 'rounded-full';
      break;
    case 'rounded-md':
    default:
      shapeClass = 'rounded-md';
      break;
  }

  const baseClass = 'bg-blue-300 text-black font-medium hover:bg-blue-500 transition duration-200';

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${sizeClass} ${shapeClass}`}
    >
      {label}
    </button>
  );
}