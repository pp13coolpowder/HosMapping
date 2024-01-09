import C_data from "./C_data";
import C_edit from "./C_edit";
import iconMarker from "../iconMap/iconMarker";
import { useState, useCallback, useRef } from "react";
import { Marker, Popup } from "react-leaflet";
function C_ceas({ iname, icolor, idetail, ihn, iar, iaddress, id, yakin, yacheed }) {
  const initialPosition = iaddress.split(",").map((coord) => parseFloat(coord));
  const [showData, setShowData] = useState(true);
  const toggleComponent = useCallback(() => {
    setShowData((prevShowData) => !prevShowData);
  }, []);
  const popupElRef = useRef(null);
  const hideElement = () => {
    if (!popupElRef.current) return;
    popupElRef.current.close()
  }

  return (
    <Marker
      position={initialPosition}
      icon={iconMarker(icolor)}
    >
      <Popup
        ref={popupElRef}
        closeButton={false}
      >
        <C_data
          show={showData}
          iname={iname}
          icolor={icolor}
          idetail={idetail}
          ihn={ihn}
          iar={iar}
          toggleDraggable={toggleComponent}
          id={id}
          hideElement={hideElement}
          yakin={yakin}
          yacheed={yacheed}
        />
        <C_edit
          show={showData && ('hidden')}
          iname={iname}
          idetail={idetail}
          iaddress={iaddress}
          icolor={icolor}
          ihn={ihn}
          iar={iar}
          id={id}
          toggleDraggable={toggleComponent}
          yakin={yakin}
          yacheed={yacheed} />
      </Popup>
    </Marker>
  );
}
export default C_ceas;