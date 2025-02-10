import { Navbar, Hero } from "../components"

const HomePage = () => (
  <div className='bg-white w-full overflow-hidden px-30 sm:px-10'>
    <div className='sm:px-16 px-6'>
      <div className='xl:max-w-[1280px] w-full'><Navbar /></div>
    </div>

    <div className="w-full">
      <div><Hero /></div>
    </div>

  </div>
)

export default HomePage