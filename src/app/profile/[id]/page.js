'use client'

import CustomProfileCard from '@/components/Profile/CustomProfileCard';

import { useParams } from 'next/navigation.js';

export default function CustomProfilePage({username}) {
   const params = useParams();
    const profileId = params.id;


  return (



    <main className="  ">

        <div className='pt-14   h-[100vh] z-0 not-lg:mx-10 hover:contrast-[1.01] '>

      <CustomProfileCard  profileId = {profileId} />
      
        </div>


    </main>

  );
}
