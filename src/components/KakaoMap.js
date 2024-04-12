'use client'

import { useEffect, useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

export default function KakaoMap({ homeData }) {
  const positions = homeData.map((index) => ({
    title: index.id, // 혹은 적절한 제목 속성
    latlng: {
      lat: index.latitude,
      lng: index.longitude,
    },
  }))

  const [state, setState] = useState({
    center: {
      lat: 33.450701,
      lng: 126.570667,
    },
    errMsg: null,
    isLoading: true,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        },
      )
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false,
      }))
    }
  }, [])

  return (
    <>
      <Map
        center={state.center}
        style={{ width: '90%', height: '100%' }}
        className='mt-10 rounded-3xl'
        level={8} // 지도의 확대 레벨
      >
        {positions.map((position, index) => (
          <MapMarker
            key={index}
            position={position.latlng} // 마커를 표시할 위치
            image={{
              src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
              size: {
                width: 24,
                height: 35,
              }, // 마커이미지의 크기입니다
            }}
            title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          />
        ))}
      </Map>
    </>
  )
}
