import HotTakeList from "@/components/HotTake/HotTakeList";
import HotTakeForm from "@/components/HotTake/HotTakeForm";

export default function HotTakesPage() {
  return (
    <main className="relative">
  
      <div className="fixed right-4 top-4 z-50">
        <HotTakeForm />
      </div>

      <div className="mt-28 mx-10 md:mx-20">
 
        <section className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-neutral-900 dark:text-white mb-4">
            Hot Takes
          </h1>
          <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
            Hot takes are **quick, bold opinions or thoughts** about topics that spark discussion.
            Share your own perspective or explore others’ takes below. 
            Try uploading a Hot take a random Opinion of yours let other rate it...
          </p>
        </section>

  
        <div>
          <HotTakeList />
        </div>
      </div>
    </main>
  );
}
