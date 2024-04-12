import Link from 'next/link'

export default function ItemCardView({ key, spotImageUrls, id, address, parkName }) {
  return (
    <div className='flex h-auto   min-w-[87px] max-w-[486px] flex-col items-center justify-center space-y-2'>
      <div className='relative m-auto h-auto w-full rounded-lg'></div>
      <Link className='h-100 grid w-full grid-cols-2' href={`/skateboardSwagger/${id}`}>
        <span className='col-span-7 line-clamp-1 text-sm font-semibold'>{address}</span>
        <span className='col-span-7 line-clamp-1 text-sm font-semibold'>{parkName}</span>
      </Link>
    </div>
  )
}
