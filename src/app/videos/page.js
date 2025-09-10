import VideoCard from "@/components/Video/VideoCard";
import VideoSearch from "@/components/Video/VideoSearch";
import VideoUploadForm from "@/components/Video/VideoUploadForm";

export default function Videos() {
  return (
    <main className="mb-20  flex-col relative mx-auto items-center justify-center flex rounded-lg min-h-screen pt-2 ">
      
      
      <div className="pt-2 text-center max-w-2xl mx-auto">
        <p className="text-neutral-800 text-lg dark:text-neutral-300 mb-4">
          Here you can <strong>explore videos, like, comment</strong>, and upload your own videos .
          
             
        </p>
        <p className="text-md text-neutral-700 dark:text-neutral-400">
          Note: Currently all the videos are uploaded by my friends or test accounts since this app is not yet in production. 
        </p>
      </div>
      <div className="hover:scale-105 fixed top-10 right-5 transition-all duration-300 ease-out ">

         <VideoUploadForm/>
      </div>

 
      <div className="pt-12"> 
        <VideoCard />
      </div>
    </main>
  );
}







      

      
