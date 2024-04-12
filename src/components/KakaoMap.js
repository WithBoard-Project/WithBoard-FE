'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { Map, MapMarker } from 'react-kakao-maps-sdk'

const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAO_API_KEY}&autoload=false`
//https://react-kakao-maps-sdk.jaeseokim.dev/docs/intro

export default function KakaoMap() {
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
      <Script src={KAKAO_SDK_URL} strategy='beforeInteractive' />

      <Map
        center={state.center}
        style={{ width: '90%', height: '50%' }}
        className='mt-10 rounded-3xl'
      >
        <MapMarker // 인포윈도우를 생성하고 지도에 표시합니다
          position={state.center}
        ></MapMarker>
      </Map>
    </>
  )
}
