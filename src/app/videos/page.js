import VideoCard from "@/components/Video/VideoCard";
import VideoSearch from "@/components/Video/VideoSearch";

export default function Videos() {
  return (
    <main className="mb-20 relative mx-auto items-center justify-center flex rounded-lg min-h-screen pt-16 ">
      
      <div className=" z-30  max-w-screen-xl left-0 ">

      <VideoSearch />
      </div>

 
      <div className="pt-8"> 
        <VideoCard />
      </div>
    </main>
  );
}
