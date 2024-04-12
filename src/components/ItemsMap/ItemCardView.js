import Link from 'next/link'
import Image from 'next/image'

export default function ItemCardView({ key, spotImageUrls, id, address, parkName }) {
  return (
    <div className='flex h-[322px]  w-[257.5px] flex-col items-center justify-center space-y-2 rounded-lg bg-gray-400'>
      <Link href={`/skateboardSwagger/${id}`}>
        <div className='h-[266.56px] w-full rounded-lg bg-black'>
          <img
            key={key}
            src={spotImageUrls}
            alt=''
            className='aspect-custom h-auto w-full rounded-lg object-cover'
          />
        </div>
      </Link>
      <div className='h-[200px] w-full rounded-lg '></div>
      <Link className='h-100 grid w-full grid-cols-2' href={`/skateboardSwagger/${id}`}>
        <span className='col-span-7 line-clamp-1 text-lg  font-semibold text-white'>
          {parkName}
        </span>
        <span className='col-span-7 line-clamp-1 text-lg font-semibold text-white'>{address}</span>
      </Link>
    </div>
  )
}
