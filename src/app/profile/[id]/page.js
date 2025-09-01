'use client'

import CustomProfileCard from '@/components/Profile/CustomProfileCard';

import { useParams } from 'next/navigation.js';

export default function CustomProfilePage({username}) {
   const params = useParams();
    const profileId = params.id;
    console.log(profileId, "username ?? ")

  return (



    <main className="  ">

         <h1> Profile of {profileId}</h1>
        <div className='pt-14   h-[100vh] z-0 not-lg:mx-10 hover:contrast-[1.01] '>

      <CustomProfileCard  />
        </div>


    </main>

  );
}
