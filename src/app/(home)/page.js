import KakaoMap from '@/components/KakaoMap'
import Navibar from '@/components/Navibar'
import ItemsMap from '@/components/ItemsMap/ItemsMap'

export default async function HomePage() {
  const result = await fetch(`http://localhost:8080/api/home/`)
  const inner = await result.json()
  const homeData = inner.result

  return (
    <div className='w-ful flex h-full flex-col items-center justify-center p-5'>
      <Navibar />
      <div className='flex h-[450px] h-screen w-[85%] w-screen justify-center'>
        <KakaoMap homeData={homeData} />
      </div>
      <div className='mt-20 flex w-full justify-center'>
        <ItemsMap />
      </div>
    </div>
  )
}
