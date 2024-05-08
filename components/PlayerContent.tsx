'use client';

import { Song } from '@/types';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';

import MediaItem from './MediaItem';
import LikeButton from './LikeButton';
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai';
import { HiSpeakerWave, HiSpeakerXMark } from 'react-icons/hi2';

interface PlayerContentProps {
  key: string;
  song: Song;
  songUrl: string;
}

const PlayerContent = ({ key, song, songUrl }: PlayerContentProps) => {
  const Icon = true ? BsPauseFill : BsPlayFill;

  const VolumeIcon = true ? HiSpeakerXMark : HiSpeakerWave;
  return (
    <div className="grid grid-cols-2 md:grid-col-3 h-full">
      <div className="flex w-full justify-start">
        <div className="flex items-center gap-x-4">
          <MediaItem data={song} />
          <LikeButton songId={song.id} />
        </div>
      </div>
      <div className="flex md:hidden col-auto w-full justify-end items-center">
        <div
          onClick={() => {}}
          className="h-10 w-10 flex items-center justify-center rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
      </div>

      <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
        <AiFillStepBackward
          size={30}
          className="cursor-pointer text-neutral-400 hover:text-white transition"
        />
        <div
          onClick={() => {}}
          className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer"
        >
          <Icon size={30} className="text-black" />
        </div>
        <AiFillStepForward
          onClick={() => {}}
          size={30}
          className="cursor-pointer text-neutral-400 hover:text-white transition"
        />
      </div>
      <div className="hidden md:flex w-full justify-end pr-2">
        <div className="flex items-center gap-x-2 w-[120px]">
          <VolumeIcon onClick={() => {}} className="cursor-pointer" size={34} />
        </div>
      </div>
    </div>
  );
};

export default PlayerContent;