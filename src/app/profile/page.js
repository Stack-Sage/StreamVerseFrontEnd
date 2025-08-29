import ProfileTop from '@/components/Profile/ProfileTop.jsx';
import ProfileCard from '../../components/Profile/ProfileCard.jsx'

export default function ProfilePage() {
  return (
    <main className="  ">
      <div className=' fixed right-0 left-0 z-30 pb-14 '>
        <ProfileTop 
        navLinks={[
          {label:"Docs",href:'/docs'},
          {label:"About",href:'/about'},
          {label:"contact",href:'/contact'},
        ]}
        showSearch = {false}
       
        
        />
      </div>
   
        <div className='pt-14  h-[100vh] z-0 not-lg:mx-10 hover:contrast-[1.01] '>

      <ProfileCard/>
        </div>


    </main>
  );
}
