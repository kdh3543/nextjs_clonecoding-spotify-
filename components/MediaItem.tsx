'use client';

import useLoadImage from '@/hooks/useLoading';
import { Song } from '@/types';
import Image from 'next/image';

interface MediaItemProps {
  data: Song;
  onClick: (id: string) => void;
}

const MediaItem = ({ data, onClick }: MediaItemProps) => {
  const imageUrl = useLoadImage(data);
  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-x-3 hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          src={imageUrl || '/images/like.jpg'}
          fill
          alt="Media Item"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className="text-white truncate">{data.title}</p>
        <p className="text-sm text-neutral-400 truncate">{data.author}</p>
      </div>
    </div>
  );
};

export default MediaItem;
