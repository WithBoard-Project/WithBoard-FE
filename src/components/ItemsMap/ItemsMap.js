import ItemCardView from '@/components/ItemsMap/ItemCardView'

export default function ItemCardViewGrid({ roomsData }) {
  const itemsView = roomsData.map((item, index) => (
    <ItemCardView
      key={index}
      spotImageUrls={item.spotImageUrls}
      id={item.id}
      address={item.address}
      parkName={item.parkName}
    />
  ))

  return (
    <div className='z-0 grid h-full w-11/12 auto-cols-max grid-cols-1 gap-x-1 gap-y-1 sm:grid-cols-2  sm:gap-x-2 sm:gap-y-2 md:grid-cols-3 md:gap-x-3 md:gap-y-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-4 xl:grid-cols-5 xl:gap-x-5 xl:gap-y-5'>
      {itemsView}
    </div>
  )
}
