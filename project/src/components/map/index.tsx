import leaflet from 'leaflet';
import { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import {CityOffer, Points, Point} from '../../types/offers';
type MapProps = {
  city: CityOffer,
  points: Points
}
export default function Map({city, points}:MapProps): JSX.Element{
  const URL_MARKER_DEFAULT = 'img/pin.svg';

  const mapRef = useRef(null);
  const map = useMap({mapRef,city});

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [30, 40],
    iconAnchor: [20, 40],
  });
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
