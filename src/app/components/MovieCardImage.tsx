import Image from 'next/image';

type Props = {
  title: string;
  bannerFileURL: string;
};

export default function MovieCardImage({ title, bannerFileURL }: Props) {
  return (
    <Image
      alt={title}
      src={bannerFileURL}
      width={600}
      height={400}
      className='rounded-md object-cover object-top transition'
    />
  );
};