import { NavLink } from "react-router-dom"
import { TypeAnimation } from 'react-type-animation';


import headerBanner from "../assets/images/brand/bannerImage.png"
import computer from "../assets/images/ai-images/computer.png"

import "./Homepage.scss"

const Homepage = () => {
    
    return (
    <div className="header">
      <div className="header__div">
        <img className="header__image" src={headerBanner} alt="Ataraxia banner image" />
      </div>
      <section>
      <nav className="nav">
        <ul className="nav__ul">
          <NavLink classname="nav__link"><li className="nav__li">ギャラリー</li></NavLink>
          <NavLink classname="nav__link"><li className="nav__li">プロダクツ</li></NavLink>
          <NavLink classname="nav__link">
            <ul>
              <li className="nav__li">&#123;  ATARAXIA  &#125;</li>
              <li className="nav__li nav__li--subtitle">トップページ</li>
            </ul>
          </NavLink>
        </ul>
      </nav>
      <main className="main">
      <img className="main__image" src={computer} alt="Ataraxia banner image" />
      <div className="main__text">
        <div className="main__conversation">
        <TypeAnimation className="main__typewriter"
          style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
          sequence={[
            `I am creating art with the machine.\nI am the machine.\nI am the art.`,
          ]}
          repeat={0}
        />
          <div className="main__time" data-type="clock" data-font-color="#000000" data-border-color="#000000" data-background-color="#ffffff" data-font-size="60" data-location-type="city" data-location-id="58258" ></div>
<script type="text/javascript" src="https://www.thetimenow.com/ttn-embed.min.js"></script>
            
          </div>
        <div className="main__typewriter">
          Music goes here.
          {/* <iframe className="main__iframe" width="100%" height="166" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1501426021&color=%23ff0099&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div><a href="https://soundcloud.com/lofi_girl" title="Lofi Girl" target="_blank">Lofi Girl</a> · <a href="https://soundcloud.com/lofi_girl/1-am-chill-session" title="1 A.M Chill Session" target="_blank">1 A.M Chill Session</a></div> */}
        </div>
      </div>
      </main>
      </section>
    </div>
    )
    
}
export default Homepage