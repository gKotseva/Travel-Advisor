import "./intro.modules.css";
import { useRef } from "react";

export default function Intro() {
  const introRef = useRef(null);

  return (
    <>
      <div className="intro">
        <h1 className="logo-header">
          <span className="logo">Travel </span>
          <span className="logo">Advisor.</span>
        </h1>
      </div>

      <header>
        <h4>Travel Advisor.</h4>
      </header>
    </>
  );
}
