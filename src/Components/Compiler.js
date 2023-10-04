import Dropdown from "./SelectCompiler";

export default function Compiler() {
  return (
    <div className='mx-auto h-[85%] w-[98%] border-2 gap-2 flex'>
    <div className="code h-full w-[70%] border-2 border-black/50 rounded-lg">
        <div className="h-28 w-full flex justify-end"> <Dropdown/> </div>
    </div>
    <div className="io h-full w-[30%] border-2 border-black/50 rounded-lg"></div>
    </div>
  )
}
