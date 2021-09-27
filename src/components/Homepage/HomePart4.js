import React, { useState } from "react";
import { OverlayTrigger } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";

const HomePart4 = () => {
  const [copyText, setCopyText] = useState("");
  const [popup, setPopup] = useState("none");
  const [text, setText] = useState("-- Click to Copy --");

  function mailClick() {
    setCopyText("floydmanuel011@gmail.com");
    setPopup("block");
    setText("Text Copied");
    setTimeout(() => {
      setPopup("none");
      setText("-- Click to Copy --");
    }, 1000);
  }
  function callClick() {
    setCopyText("+919740250911");
    setText("Text Copied");
    setPopup("block");
    setTimeout(() => {
      setPopup("none");
      setText("-- Click to Copy --");
    }, 1000);
  }
  navigator.clipboard.writeText(copyText);

  return (
    <div className="h4-container">
      <div className="contents">
        <h1>CONTACT ME</h1>

        <div className="box">
          <p>INTERESTED IN HIRING ME FOR YOUR NEXT PROJECT ? </p>

          <div className="card">
            <h1>MAIL ME</h1>
            <i className="fas fa-envelope"></i>
            <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-disabled">{text}</Tooltip>}
          >
            <span onClick={() => mailClick()}>floydmanuel011@gmail.com</span>
            </OverlayTrigger>
          </div>
          <div className="popup" style={{ display: `${popup}` }}>
            <i className="fas fa-clipboard-check" /> Copied to clipboard
          </div>
          <div className="card">
            <h1>CALL ME</h1>
            
            <i className="fas fa-phone-alt"></i>
            <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip-disabled">{text}</Tooltip>}
          >
            <span onClick={() => callClick()}>+919740250911</span>
            </OverlayTrigger>
          </div>

          <span>Mangalore, India</span>
        </div>
      </div>
    </div>
  );
};

export default HomePart4;
