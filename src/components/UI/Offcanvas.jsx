/* eslint-disable react/prop-types */
import { useContext } from "react";
import ReactDOM from "react-dom";
import "./Offcanvas.css";
import { MyContext } from "../../Context/MyContext";

const Backdrop = () => {
  const { hideCartHandler } = useContext(MyContext);

  return <div className="backdrop" onClick={hideCartHandler} />;
};

const OffcanvasOverlay = (props) => {
  return <div className="offcanvas">{props.children}</div>;
};

const Offcanvas = (props) => {
  const portalElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <OffcanvasOverlay>{props.children}</OffcanvasOverlay>,
        portalElement
      )}
    </>
  );
};

export default Offcanvas;
