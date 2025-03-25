
import { cn } from '@/lib/utils'
import { Spotlight } from './ui/spotlight'
const hero = () => {
  return (
    <div className='pb-20 pt-30'>
        <div>
         <Spotlight className="-top-40 -left-10 md:-lef-32 
         md:-top-20 h-screen" fill='white'/>
         <Spotlight className="top-10 left-full h-[80vh] w-[50vw] " fill='purple'/>
         <Spotlight className="top-28 left-8 
         h-[80vh] w-[50vw]" fill='blue'/>
        </div>

      <div className="relative flex h-screen w-full items-center justify-center bg-white dark:bg-black">
        <div
            className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
            )}
        />
        </div>
    </div>
  )
}

export default hero