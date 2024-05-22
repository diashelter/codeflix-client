type Props = {
  rating: string;
};

function borderColor(rating: string): string {

  switch (rating) {
    case 'pg':
      return 'text-green-500';
    case 'pg-13':
      return 'text-yellow-500';
    case 'r':
      return 'text-red-500';
    case 'nc-17':
      return 'text-red-700';
    default:
      return 'text-white';
  }
};

export default function MovieRating({ rating }: Props) {
  return (
    <span className={`text-xsm border-1 border border-gray-700 px-2 uppercase ${borderColor(rating)}`}>
      {rating}
    </span>
  )
};