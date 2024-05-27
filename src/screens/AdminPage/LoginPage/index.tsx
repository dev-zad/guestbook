import React from 'react';
import { LeftSide } from './LeftSide/LeftSide';
import { RightSide } from './RightSide/RightSide';

export function LogInForm() {
  return (
    <div className="flex flex-col lg:flex-row items-start  w-full">
      <LeftSide />
      <RightSide />
    </div>
  );
}
