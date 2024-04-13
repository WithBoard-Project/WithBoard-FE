import ItemCardView from '@/components/ItemsMap/ItemCardView'

export default async function ItemsMap() {
  const result = await fetch(`http://43.200.173.121:8080/api/home/hotspot`)
  const inner = await result.json()
  const hotspot = inner.result

  // const limitHostSpot = hotspot.length(4)
  hotspot.length = 5
  const itemsView = hotspot.map((item, index) => (
    <ItemCardView
      key={index}
      spotImageUrls={item.imageUrl}
      id={item.id}
      address={item.spotAddress}
      parkName={item.parkName}
    />
  ))

  return (
    <div className='sm:gap-x- z-0 grid h-full w-11/12 auto-cols-max grid-cols-1 gap-x-1 gap-y-2  sm:grid-cols-2 sm:gap-y-2 md:grid-cols-3 md:gap-x-3 md:gap-y-3 lg:grid-cols-4 lg:gap-x-4 lg:gap-y-4 xl:grid-cols-5 xl:gap-x-6 xl:gap-y-5'>
      {itemsView}
    </div>
  )
}
