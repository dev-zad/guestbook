import React from 'react';
import { Typography } from '@/components/Typography';

export function RightSide() {
  return (
    <div className='flex flex-col items-center justify-center h-[100vh] w-full'>
      <div className="w-full h-full flex flex-col items-center justify-center bg-yellow-500">
        <Typography variant="stronger">STRONGER</Typography>

        <div>
          <Typography variant="overline">BE STRONG IN THE LORD AND HIS MIGHTY POWER.</Typography>
          <div>
            <Typography variant="overline">EPHESIANS 6:10</Typography>
          </div>
        </div>
      </div>
    </div >
  );
}
