import "ol/ol.css";
import "ol-layerswitcher/dist/ol-layerswitcher.css";

import Map from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import View from 'ol/View';
import { ScaleLine, defaults as defaultControls } from 'ol/control.js';
import LayerSwitcher from "ol-layerswitcher";

const layers = [
    new TileLayer({
        title: "OpenStreetMap",
        source: new OSM(),
    }),
    new TileLayer({
        title: "Граница Пермского края",
        source: new TileWMS({
            url: 'http://192.168.43.160:8080/geoserver/wms',
            params: { 'LAYERS': 'Perm:boundary', 'TILED': true },
            serverType: 'geoserver',
            transition: 0,
        }),
    }),
    new TileLayer({
        title: "Земли Пермского края",
        source: new TileWMS({
            url: 'http://192.168.43.160:8080/geoserver/wms',
            params: { 'LAYERS': 'Perm:land', 'TILED': true },
            serverType: 'geoserver',
            transition: 0,
        }),
    }),
    new TileLayer({
        title: "Лес",
        source: new TileWMS({
            url: 'http://192.168.43.160:8080/geoserver/wms',
            params: { 'LAYERS': 'Perm:forest', 'TILED': true },
            serverType: 'geoserver',
            transition: 0,
        }),
    }),
    new TileLayer({
        title: "Земли населённых пунктов",
        source: new TileWMS({
            url: 'http://192.168.43.160:8080/geoserver/wms',
            params: { 'LAYERS': 'Perm:city', 'TILED': true },
            serverType: 'geoserver',
            transition: 0,
        }),
    }),
    new TileLayer({
        title: "Дороги",
        source: new TileWMS({
            url: 'http://192.168.43.160:8080/geoserver/wms',
            params: { 'LAYERS': 'Perm:roads', 'TILED': true },
            serverType: 'geoserver',
            transition: 0,
        }),
    }),
    new TileLayer({
        title: "Железные дороги",
        source: new TileWMS({
            url: 'http://192.168.43.160:8080/geoserver/wms',
            params: { 'LAYERS': 'Perm:railroad', 'TILED': true },
            serverType: 'geoserver',
            transition: 0,
        }),
    }),
    new TileLayer({
        title: "Автобусные остановки",
        source: new TileWMS({
            url: 'http://192.168.43.160:8080/geoserver/wms',
            params: { 'LAYERS': 'Perm:station', 'TILED': true },
            serverType: 'geoserver',
            transition: 0,
        }),
    }),
    new TileLayer({
        title: "Цифровая модель рельефа",
        source: new TileWMS({
            url: 'http://192.168.43.160:8080/geoserver/wms',
            params: { 'LAYERS': 'Perm:ЦМР_Пермь', 'TILED': true },
            serverType: 'geoserver',
            transition: 0,
        }),
    }),
];

const map = new Map({
    controls: defaultControls().extend([
        new ScaleLine({
            units: 'metric',
        }),
    ]),
    layers: layers,
    target: 'map',
    view: new View({
        center: [6293254, 8201684],
        zoom: 6,
    }),
});

map.addControl(new LayerSwitcher({
    reverse: false,
}));

