import { Navslide } from "@/src/components/ui/Navslide";



export default function Home() {
  return (
    <>
    <div className="flex">
        
        <div>
    <Navslide activeItems={["Home", "About", "Contact"]} textColor="text-black" bgColor="bg-white" />
        </div>
        <div className="text-3xl font-bold underline">
            Hello world!
        </div>
    </div>
    </>
  );
}
