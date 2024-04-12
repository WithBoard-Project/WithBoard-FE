import Navibar from '@/components/Navibar'
import NoticeBoard from '@/components/noticeBoardComponents/NoticeBoard'

export default async function SkateboardSwaggerId() {
  const result = await fetch('http://localhost:8080/api/home/affectionPost', { cache: 'no-store' })
  const inner = await result.json()
  const affectionData = inner.result

  return (
    <div className='jusitfy-center flex flex-col items-center'>
      <Navibar />
      <div className='h-full w-full'>
        <NoticeBoard affectionData={affectionData} />
      </div>
    </div>
  )
}
