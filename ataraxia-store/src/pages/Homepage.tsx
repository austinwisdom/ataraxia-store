import { NavLink } from "react-router-dom"
import { TypeAnimation } from 'react-type-animation';
import moment from 'moment';
moment().format();


import headerBanner from "../assets/images/brand/bannerImage.png"
import computer from "../assets/images/ai-images/computer.png"
import myCity from "../assets/images/ai-images/tell-my-story/my-city.png"
import myParents from "../assets/images/ai-images/tell-my-story/where-i-am.png"

import "./Homepage.scss"

const Homepage = () => {

    
    
    return (
    <div className="home">
      <div className="header__div">
        <img className="header__image" src={headerBanner} alt="Ataraxia banner image" />
      </div>
      <section className="home__section">
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
      <img className="main__image" src={computer} alt="90s style computer" />
      <div className="main__text">
          <div className="main__conversation">
            <TypeAnimation className="main__typewriter"
              style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
              sequence={[
                3000,
                `I am creating art with the machine.\nI am the machine.\nI am the art.`,
              ]}
              repeat={0}
            />    
          </div>
        <div className="main__iframe--container">
          <iframe className="main__iframe" width="100%" height="166" scrolling="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1501426021&color=%23ff0099&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        </div>
      </div>
      </main>
      </section>
      <section className="home__section page2">
        <div className="page2__titles">
          <h1 className="page2__title">CONTINUE</h1>
          <h2 className="page2__subtitle">続けてください</h2>
        </div>
        <div className="page2__image--div">
          <img src={myCity} className="main__image page2__image"/>
          <TypeAnimation className="main__typewriter"
              style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
              sequence={[
                10000,
                `This is my city.\nIt was raining that day.`,
              ]}
              repeat={0}
          />    
        </div>
      </section>
      <section className="home__section">
        <div className="page2__end">
          <h1>--&gt;</h1>
          <img src={myParents} className="page3__image"/>
        </div>
      </section>
    </div>
    )
    
}
export default Homepage