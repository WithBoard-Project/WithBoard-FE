import Link from 'next/link'

export default function Navibar() {
  return (
    <>
      <div className='h-12 w-[90%]'></div>
      <div className='flex h-24 w-[95%] items-center justify-between rounded-2xl bg-black p-3'>
        <div className='ml-5 flex h-full w-40 flex-row items-center gap-10'>
          <Link href='/'>
            <span className=' text-xl text-white'>스팟</span>
          </Link>

          <Link href='/skateboardSwagger/1'>
            <span className='text-xl  text-white'>보드 자랑</span>
          </Link>
        </div>
        <div className='flex h-full w-16 items-center'>
          <span className='text-white'>profile</span>
        </div>
      </div>
    </>
  )
}
