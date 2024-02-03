import { FC } from "react";
import { NavLink } from "react-router-dom";

import { TypeAnimation } from 'react-type-animation';

import tv from "../../assets/images/ai-images/computer2.png"
import garden from "../../assets/images/ai-images/garden.png"
import cy from "../../assets/images/ai-images/cy.png"
// import headerBanner from "../../assets/images/brand/bannerImage.png"
import "./GalleryPage.scss"


const GalleryPage: FC = () => {
    return (
        <div>
            {/* <div className="header__div">
                <img className="header__image" src={headerBanner} alt="Ataraxia banner image" />
            </div> */}
      <section className="home__section">
      <nav className="nav">
        <ul className="nav__ul nav__full">
          <NavLink to={"/gallery"} className="nav__link"><li className="nav__li">ギャラリー</li></NavLink>
          <NavLink to={"https://www.ataraxia.clothing/"} target="_blank" className="nav__link"><li className="nav__li">プロダクツ</li></NavLink>
          <NavLink to={"/"} className="nav__link">
            <ul>
              <li className="nav__li">&#123;  ATARAXIA  &#125;</li>
              <li className="nav__li nav__li--subtitle">トップページ</li>
            </ul>
          </NavLink>
        </ul>
      </nav>
            <main className="gallery">
                <div className="gallery__div--image">
                    <img className="d-1 gallery__image" src={tv} />
                    <div className="text__transform">
                        <TypeAnimation className="gallery__typewriter"
                            style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                            sequence={[
                              `ビデオゲームをするのが好きです。`,
                              1000,
                              `I ビデオゲームをするのが好きです。`,
                              200,
                              `I ビデオゲームをするのがLIKE。`,
                              200,
                              `I ビデオGAMESをするのが LIKE。`,
                              200,
                              `I ビデオ GAMESをPLAYINGのが LIKE。`,
                              200,
                              `I VIDEO GAMESをPLAYINGのが LIKE。`,
                              200,
                              `I LIKE VIDEO GAMES PLAYINGのが。`,
                              200,
                              `I LIKE PLAYING VIDEO GAMES のが。`,
                              200,
                              `I LIKE PLAYING VIDEO GAMES。`
                            ]}
                            speed={99}
                            omitDeletionAnimation={true}
                            repeat={0}
                            cursor={false}
                        />
                    </div>
                </div>
                <div className="gallery__div--image">
                    <img className="d-1 gallery__image" src={garden} />
                    <div className="text__transform">
                        <TypeAnimation className="gallery__typewriter"
                            style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                            sequence={[
                              `ここは私の庭です。`,
                              1000,
                              `THIS は私の庭です。`,
                              200,
                              `THIS は私の庭 IS。`,
                              200,
                              `THIS はMY庭 IS。`,
                              200,
                              `THIS は MY 庭 IS。`,
                              200,
                              `THIS IS MY 庭。`,
                              200,
                              `THIS IS MY GARDEN。`,
                              3000
                            ]}
                            speed={99}
                            omitDeletionAnimation={true}
                            repeat={10}
                            cursor={false}
                        />
                    </div>
                </div>
                <div className="gallery__div--image">
                    <img className="d-1 gallery__image" src={cy} />
                    <div className="text__transform">
                        <TypeAnimation className="gallery__typewriter"
                            style={{ whiteSpace: 'pre-line', height: '195px', display: 'block' }}
                            sequence={[
                              `私のお気に入りのセルフポートレートです。`,
                              1000,
                              `MY お気に入りのセルフポートレートです。`,
                              200,
                              `MY お気に入りのSELFポートレートです。`,
                              200,
                              `MY お気に入りの SELF ポートレートです。`,
                              200,
                              `MY FAVORITE SELF ポートレートです。`,
                              200,
                              `MY FAVORITE SELF PORTRAITです。`,
                              200,
                              `MY FAVORITE SELF PORTRAIT です。`,
                              200,
                              `MY FAVORITE SELF PORTRAIT。`,
                              3000
                            ]}
                            speed={99}
                            omitDeletionAnimation={true}
                            repeat={5}
                            cursor={false}
                        />
                    </div>
                </div>

            </main>
            </section>
        </div>
    );
};

export default GalleryPage;