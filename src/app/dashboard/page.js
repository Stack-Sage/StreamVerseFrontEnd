import ShowChannelStats from "@/components/Dashboard/ShowChannelStats";
import ShowTakesStats from "@/components/Dashboard/ShowTakesStats";
import ShowVideoStats from "@/components/Dashboard/ShowVideoStats";


export default function DashboardPage() {
  return (
    <main>
    <ShowChannelStats/>
    <ShowVideoStats/>
    <ShowTakesStats/>
  
    </main>
  );
}
