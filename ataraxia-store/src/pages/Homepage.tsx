import { NavLink } from "react-router-dom"
import { useState } from "react"

import headerBanner from "../assets/images/brand/bannerImage.png"
import computer from "../assets/images/ai-images/computer.png"

import "./Homepage.scss"

const Homepage = () => {
    const [count, setCount] = useState(0)

    return (
    <main className="header">
      <div className="header__div">
        <img className="header__image" src={headerBanner} alt="Ataraxia banner image" />
      </div>
      <section>
      <nav className="nav">
        <ul className="nav__ul">
          <NavLink classname="nav__link"><li className="nav__li">トップページ</li></NavLink>
          <NavLink classname="nav__link"><li className="nav__li">ギャラリー</li></NavLink>
          <NavLink classname="nav__link"><li className="nav__li">プロダクツ</li></NavLink>
          <NavLink classname="nav__link"><li className="nav__li">&#123;  ATARAXIA  &#125;</li></NavLink>
        </ul>
      </nav>
      <main>
      <img className="main__image" src={computer} alt="Ataraxia banner image" />
      <iframe className="main__iframe" src="https://open.spotify.com/embed/playlist/1YIe34rcmLjCYpY9wJoM2p?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </main>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      </section>
    </main>
    )
    
}
export default Homepage