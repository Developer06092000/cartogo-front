import { Placemark, YMaps, Map } from "react-yandex-maps";
import "./Maps.css";

const Maps = () => {
    return (
        <div
            // style={{
            //   width: "100%",
            //   height: "100%",
            //   minHeight: "400px",
            //   position: "relative",
            // }}
            className="yandex-map-css"
        >
            <YMaps
                query={{
                    ns: "use-load-option",
                    load: "Map,Placemark,control.ZoomControl,control.FullscreenControl",
                    lang: "uz_Uz",
                }}
                className="ymap"
            >
                <Map
                    className="map"
                    defaultState={{
                        center: [41.377861, 69.313055],
                        zoom: 9,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                >
                    <Placemark
                        defaultGeometry={[41.377861, 69.313055]}
                        properties={{
                            balloonContentBody: "This is balloon loaded by the Yandex.Maps API module system",
                        }}
                    />
                </Map>
            </YMaps>
        </div>
    );
};

export default Maps;
