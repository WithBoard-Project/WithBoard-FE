import KakaoMap from '../components/KakaoMap'

export default function HomePage() {
  return (
    <div>
      <div className='flex '>
        <div>Kakao map</div>
        <main className='absolute left-0 top-20 h-screen w-screen'>
          <KakaoMap />
        </main>
      </div>
    </div>
  )
}
