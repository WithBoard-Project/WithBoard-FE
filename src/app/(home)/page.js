import KakaoMap from '@/components/KakaoMap'
import Navibar from '@/components/Navibar'

export default function HomePage() {
  return (
    <div className='w-ful flex h-full flex-col items-center justify-center p-8'>
      <Navibar />
      <div className='flex h-screen w-screen justify-center'>
        <KakaoMap />
      </div>
    </div>
  )
}
