import { Loader } from "@googlemaps/js-api-loader";
import Charmander from "./svgs/004-charmander.svg"
import Squirtle from "./svgs/007-squirtle.svg"
import Metapod from "./svgs/011-metapod.svg"
import Weedle from "./svgs/013-weedle.svg"
import Pidgeot from "./svgs/018-pidgeot.svg"
import Ekans from "./svgs/023-ekans.svg"
import Pikachu from "./svgs/025-pikachu.svg"
import Sandslash from "./svgs/028-sandslash.svg"
require('dotenv').config();

const loader = new Loader({
  apiKey: process.env.API_KEY,
  version: "weekly"
})

loader.load().then(() => {
  const berlin = { lat: 52.5200, lng: 13.4050  }
  const map = new google.maps.Map(document.getElementsByClassName('map')[0], {
    zoom: 14,
    center: berlin,
    mapId: process.env.MAP_ID,
    fullScreenControl: false,
    streetViewControl: false,
  })

  const markers = [
    {
      title: 'Charmander',
      position: { lat: 52.512294, lng: 13.366291 },
      icon: Charmander,
    },
    {
      title: 'Squirtle',
      position: { lat: 52.52727221875936, lng: 13.430657466131827 },
      icon: Squirtle
    },
    {
      title: 'Weedle',
      position: { lat: 52.53065315273925, lng: 13.359060149896598 },
      icon: Weedle,
    },
    {
      title: 'Metapod',
      position: { lat: 52.54426207203826, lng: 13.385331745773234 },
      icon: Metapod,
    },
    {
      title: 'Pidgeot',
      position: { lat: 52.5064100524279, lng: 13.402942375976254 },
      icon: Pidgeot,
    },
    {
      title: 'Pikachu',
      position: { lat: 52.49907300031794, lng: 13.432606183408392 },
      icon: Pikachu,
    },
    {
      title: 'Sandslash',
      position: { lat: 52.49595328381801, lng: 13.378330798520395 },
      icon: Sandslash,
    },
    {
      title: 'Ekans',
      position: berlin,
      icon: Ekans,
    }
  ]
  markers.forEach(it => {
    const singleMarker = new google.maps.Marker({
      title: it.title,
      position: { lat: it.position.lat, lng: it.position.lng },
      map: map,
      animation: google.maps.Animation.DROP,
      icon: it.icon,
    })

    const details = new google.maps.InfoWindow({
      content: `Name: ${it.title}, Latitude: ${it.position.lat}, Longitude: ${it.position.lng}`
    })

    singleMarker.addListener('click', () => 
      details.open(map, singleMarker)
    )
  })
})

