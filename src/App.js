import React from "react";
import ParticlesBg from "particles-bg";
import "./App.css";
import { BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import TextLoop from "react-text-loop";
import Typist from "react-typist";

function App() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="profile text-center">
            <img src="./profil.jpg" className="avatar" />
            <div className="bg_content rd_12 p_8 mt-16">
              <h1>@NieFarrell</h1>
              <Typist>Seputar Programming & Gaming</Typist>
            </div>
            <div className="bg_content rd_12 p_8 mt-16">
              Familiar with{" "}
              <TextLoop interval={800}>
                <span className="highlight">React JS</span>
                <span className="highlight">BootStrap</span>
                <span className="highlight">TailwindCSS</span>
                <span className="highlight">PHP</span>
              </TextLoop>{" "}
            </div>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://www.instagram.com/farrellnathaniel010308/">
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="">
              <FaTiktok />
              <span>Tiktok</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn_action bg_content" href="https://m.youtube.com/channel/UCNx8KVBbRlYBuNHYOBEHByQ">
              <FiYoutube />
              <span>Youtube</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
