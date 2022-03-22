import {useEffect, useState, MutableRefObject} from 'react';
import leaflet from 'leaflet';
import {Map} from 'leaflet';
import {CityOffer} from '../types/offers';
type useMapProps = {
  city: CityOffer,
  mapRef: MutableRefObject<HTMLElement | null>,
}
export default function useMap({mapRef,city}:useMapProps): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  useEffect(()=> {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });
      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);
      setMap(instance);
    }
  },[mapRef, map, city]);
  return map;
}
