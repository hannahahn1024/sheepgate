import React, {useEffect} from 'react'
// import {Map, MapMarker} from 'react-kakao-maps-sdk'
import homeMarker from '../assets/mapMarker.png'

const KakaoMap = () => {
  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(37.328946, 127.943840),
      level: 3
    };
    var zoomControl = new kakao.maps.ZoomControl();
    
    var map = new kakao.maps.Map(container, options);
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    
    var imageSrc = homeMarker,
      imageSize = new kakao.maps.Size(37, 51),
      imageOption = {offset: new kakao.maps.Point(17, 55)};
    
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
      markerPosition  = new kakao.maps.LatLng(37.328946, 127.943840); 
    var marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });
    marker.setMap(map);
    var circle = new kakao.maps.Circle({
      center : new kakao.maps.LatLng(37.328946, 127.943840),  
      radius: 15, 
      strokeWeight: 5, 
      strokeColor: '#75B8FA',
      strokeOpacity: 1, 
      strokeStyle: 'dashed', 
      fillColor: '#CFE7FF',
      fillOpacity: 0.7  
    }); 
    circle.setMap(map); 
    

    var iwContent = '<a href="https://map.kakao.com/link/to/강원특별자치도 원주시 소방서길 40-4,37.328946, 127.943840" style="color:blue" target="_blank">양문교회 오는 길</a>' , iwRemoveable = true;; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다

    var infowindow = new kakao.maps.InfoWindow({
      content : iwContent,
      removable : iwRemoveable
    });

    kakao.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker);  
    });
    }, []) 

    return <div id='map' className='pt-10 outline outline-2 mx-auto h-96 w-1/3 rounded-lg'></div>;
}

export default KakaoMap