import HotTakeList from "@/components/HotTake/HotTakeList";
import HotTakeForm from "@/components/HotTake/HotTakeForm";

export default function HotTakesPage() {
  return (
    <main>
      
       <div className=" right-4 top-4 fixed z-50 ">
        <HotTakeForm/>

       </div>
      <div className="mt-20 mx-20 "> 
       
      <HotTakeList/>
      </div>
    </main>
  );
}
