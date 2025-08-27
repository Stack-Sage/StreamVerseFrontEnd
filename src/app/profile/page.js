import ProfileTop from '@/components/Profile/ProfileTop.jsx';
import ProfileCard from '../../components/Profile/ProfileCard.jsx'

export default function ProfilePage() {
  return (
    <main className="min-h-screen  ">
      <div className=' top-0 lg:sticky md:sticky z-40 fixed  w-full '>
        <ProfileTop 
        navLinks={[
          {label:"Docs",href:'/docs'},
          {label:"About",href:'/about'},
          {label:"contact",href:'/contact'},
        ]}
        showSearch = {false}
        
        />
      </div>
      <div>
        <div className='lg:mt-0 md:mt-0 mt-2 z-0 not-lg:mx-10 '>

      <ProfileCard/>
        </div>

      </div>
    </main>
  );
}
