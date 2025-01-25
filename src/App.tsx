

function App() {
  return (
    <div className='flex flex-col gap-5 items-center'>
      <div className='flex flex-col gap-5 items-center'>
          <div className='flex gap-6'>
            <img className='w-16' src="/cube.svg" alt="" />
            <h1 className='text-[#f467a6] text-6xl font-bold font-sans'>Flow <span>shape</span></h1>
          </div>
        <p className='text-white font-mono text-lg'>Organize your tasks better</p>
      </div>
      <a href="./downloads/Flowshape_0.1.0_x64_en-US.zip" download className='text-white'>
        <button>Download for Windows</button>
      </a>
    </div>
  )
}

export default App
