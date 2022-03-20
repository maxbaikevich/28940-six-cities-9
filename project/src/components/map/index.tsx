import leaflet from 'leaflet';
import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {CityOffer, Points, Point} from '../../types/offers';
// import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const'
type MapProps = {
  city: CityOffer,
  points: Points
}


export default function Map({city, points}:MapProps): JSX.Element{
  const URL_MARKER_DEFAULT = 'img/pin.svg';
  // const URL_MARKER_CURRENT = '../../../public/img/pin-active.svg';
  const mapRef = useRef(null);
  const map = useMap({mapRef,city});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: URL_MARKER_CURRENT,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });
  useEffect(()=> {
    if(map) {
      points.forEach((point: Point)=> {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          },
          {
            icon: defaultCustomIcon,

          })
          .addTo(map);
      });
    }

  },[map, points, defaultCustomIcon]);

  return (
    <div
      style={{height: '743px'}}
      ref={mapRef}
    >
    </div>
  );
}
