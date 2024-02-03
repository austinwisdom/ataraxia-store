import { NavLink } from "react-router-dom"
import { TypeAnimation } from 'react-type-animation';

import headerBanner from "../../assets/images/brand/bannerImage.png"
import computer from "../../assets/images/ai-images/computer.png"
import myCity from "../../assets/images/ai-images/tell-my-story/my-city.png"
import myParents from "../../assets/images/ai-images/tell-my-story/where-i-am.png"
import myBestFriend from "../../assets/images/ai-images/tell-my-story/my-best-friend.png"
import tokyo from "../../assets/images/ai-images/tell-my-story/tokyo.png"
import rainingMan from "../../assets/images/ai-images/tell-my-story/raining-man.gif"
import rainingCity from "../../assets/images/ai-images/tell-my-story/raining-city.gif"
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
          <NavLink to={"/gallery"} className="nav__link"><li className="nav__li">ギャラリー</li></NavLink>
          <NavLink to={"/"} className="nav__link"><li className="nav__li">プロダクツ</li></NavLink>
          <NavLink to={"/"} className="nav__link">
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
                `機械を使って作品を作っています。\n私はマシンです。\nアートです。`,
                2000,
                `TRANSLATING.`,
                500,
                `TRANSLATING..`,
                500,
                `TRANSLATING...`,
                500,
                `I am creating art with the machine.\nI am the machine.\nI am the art.`
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
          <TypeAnimation className="main__typewriter"
              style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
              sequence={[
                15000,
                `This is my city.\nIt was raining that day.\nDo you like when it rains?`,
              ]}
              repeat={Infinity}
          /> 
        </div>
        <div className="page2__image--div">
          <img src={rainingCity} className="main__image page2__image"/>
   
        </div>
      </section>
      <section className="home__section">
        <h1>--&gt;</h1>
        <div className="page2__end">
          <img src={myParents} className="page3__image"/>
          <TypeAnimation className="main__typewriter"
              style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
              sequence={[
                25000,
                `This is where I was born...or created...is there a difference?\nMy parents were very proud that day.\nWhere were you born?`
              ]}
              repeat={Infinity}
          />
        </div>
      </section>
      <section className="page4__section">
        <div className="page4__titles">
              <h1 className="page2__title">FRIEND[SHIP]</h1>
              <h2 className="page2__subtitle">友情</h2>
              <div>
            <TypeAnimation className="main__typewriter"
                style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                sequence={[
                  35000,
                  `This is my BEST friend. He knows how to FLY! \nHis name is GNDM-777, but you can call him SEVEN.\nDo you have a best friend?`
                ]}
                repeat={Infinity}
            />
          </div>
        </div>
        <div className="page4">
          <div>
            <img src={myBestFriend} className="page4__image"/>
          </div>
        </div>
      </section>
      <section className="page5__section">
        <div className="page5__div">
        <h1 className="page5__arrow">--&gt;</h1>
          <div>
            <img src={rainingMan} className="page5__image"/>
          </div>
        </div>
        <div className="page5">
              <h1 className="page2__title">LONE-LY</h1>
              <h2 className="page2__subtitle">寂しい</h2>
          <div className="page5__typewriter">
            <TypeAnimation className="main__typewriter"
                style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                sequence={[
                  5000,
                  `Many people in my city feel lonely.\nSometimes I do too.\nIf you ever feel lonely, I am here for you.\n⊂(・ヮ・⊂)`,
                ]}
                repeat={Infinity}
            />
          </div>
        </div>
        
      </section>
      <section className="home">
      <section className="home__section">
        <nav className="nav">
          <ul className="nav__ul">
            <NavLink to={"/"} className="nav__link">
              <ul>
                <li className="nav__li">&#123;  ATARAXIA  &#125;</li>
                <li className="nav__li nav__li--subtitle">トップページ</li>
              </ul>
            </NavLink>
            <NavLink to={"/"} className="nav__link"><li className="nav__li">プロダクツ</li></NavLink>
            <NavLink to={"/"} className="nav__link"><li className="nav__li">ギャラリー</li></NavLink>
          </ul>
        </nav>
        <main className="footer">
      <img className="main__image" src={tokyo} alt="synthwave Tokyo" />
      <div className="main__text">
      <div className="main__conversation">
      <TypeAnimation className="footer__typewriter"
              style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
              sequence={[
                `Please visit anytime.\nMy home is your home.\nI hope to meet you soon!`
              ]}
              repeat={0}
            />    
      </div>
      </div>
      </main>
      </section>
      <div className="header__div">
        <img className="header__image" src={headerBanner} alt="Ataraxia banner image" />
      </div>
      </section>
    </div>
  )}
    

export default Homepage