
function App() {
  return (
    <>
    <div className='flex flex-col gap-5 items-center'>
      <div className='flex flex-col gap-5 items-center'>
          <div className='flex gap-6'>
            <img className='w-16' src="/cherry.svg" alt="" />
            <div className='text-[#f467a6] text-6xl font-bold font-sans flex gap-4'>
              <h1>Cherrytop</h1>
              <h1 className="text-[#f9618c]">Kanban</h1>
            </div>
          </div>
        <p className='text-white font-mono text-lg'>Organize your tasks better</p>
      </div>
      <a href="./downloads/Cherrytop_0.1.0_x64_en-US.msi" download className='text-white'>
        <button className="py-3 px-4 bg-[#7e2a42] rounded-2xl font-sans shadow-sm font-semibold cursor-pointer hover:bg-[#912847]">Download for Windows</button>
      </a>
    </div>
    </>
  )
}

export default App
