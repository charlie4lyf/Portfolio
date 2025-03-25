import Hero from "@/components/hero";

export default function Home() {
  return (
   <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
    <div className="max-w-7xl w-full">
      <Hero/>
    </div>
   </main>
  );
}
