import VideoCard from "@/components/Video/VideoCard";
import VideoSearch from "@/components/Video/VideoSearch";
import VideoUploadForm from "@/components/Video/VideoUploadForm";

export default function Videos() {
  return (
    <main className="mb-20 relative mx-auto items-center justify-center flex rounded-lg min-h-screen pt-16 ">
      

      <div className='fixed lg:bottom-5 top-10 right-5 z-50'>
        <VideoUploadForm />
      </div>

      <div className="pt-8 text-center max-w-2xl mx-auto">
        <p className="text-neutral-700 dark:text-neutral-300 mb-4">
          Here you can <strong>explore videos, like, comment</strong>, and upload your own content.
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Note: Videos currently are uploaded by friends or test accounts since this app is not yet in production. 
        </p>
      </div>

      <div className="pt-8"> 
        <VideoCard />
      </div>
    </main>
  );
}
