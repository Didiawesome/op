import React from 'react'
import goat from '../img/goat.png'
import trophy from '../img/trophy.png'
import ronaldo2 from '../img/ronaldo.jpg'
import ronaldo from '../img/ronaldo2.jpg'
import ronaldo3 from '../img/ronaldo3.jpg'
import ronaldo4 from '../img/ronaldo4.jpg'
import ronaldo5 from '../img/ronaldo5.jpg'
import ronaldo6 from '../img/ronaldo6.jpg'

const Main = () => {
  return (
    <div className="main">
      <div className="main__wrapper">
        <div className="info">
          <div className="info__text">
            <h1>Greatest of all time</h1>
            <p>
              Cristiano Ronaldo is a Portuguese footballer and captain of the
              Saudi club Al-Nasr and the Portuguese national team. He is
              considered one of the best football players of all time and the
              record holder of European tournaments.
            </p>
          </div>
          <div className="info__img">
            <img src={goat} alt="Cristiano Ronaldo" />
          </div>
        </div>
        <div className="achievements">
          <div className="achievements__block">
            <div className="achievements__imgs">
              <img src={ronaldo} className="achievements__img" alt="" />
              <img src={ronaldo2} className="achievements__img" alt="" />
              <img src={ronaldo3} className="achievements__img" alt="" />
            </div>
            <div>
              <h1>Brilliant career</h1>
              <p>
                Ronaldo won the English Premier League, the Spanish Primera and
                the Italian Serie A - the first in history!
              </p>
            </div>
            <a
              href="https://genius.com/Cristiano-ronaldo-career-achievements-annotated"
              target="_blank"
            >
              Read more &raquo;
            </a>
          </div>
          <div className="achievements__block">
            <div className="achievements__imgs">
              <img src={ronaldo4} className="achievements__img" alt="" />
              <img src={ronaldo5} className="achievements__img" alt="" />
              <img src={ronaldo6} className="achievements__img" alt="" />
            </div>
            <div>
              <h1>Awards</h1>
              <p>
                The winner of many "Golden Balls" and "Golden Boots" is a real
                football genius!
              </p>
            </div>
            <a
              href="https://genius.com/Cristiano-ronaldo-career-achievements-annotated"
              target="_blank"
            >
              Read more &raquo;
            </a>
          </div>
        </div>
        <div className="ucl">
          <div className="ucl__title">
            <h1>UCL &ne; UEFA CHAMPIONS LEAGUE</h1>
            <h1>UCL = UEFA CRISTIANO LEAGUE</h1>
          </div>
          <div className="ucl__block">
          <div className='ucl__block_img'>
              <img src={trophy} alt="trophy" />
            </div>
            <div className="ucl__block_text">
              <h1>Mr. Champions League</h1>
              <p>
                C. Ronaldo is the first football player who scored 140 goals and
                assisted 48 times in UCL. Which makes him the top scorer and top
                assister of the whole Champions League history. Definitely "The
                GOAT🦌".
              </p>
            </div>
          </div>
          <div className='ucl__video'>
            <iframe src="https://www.youtube.com/embed/oJHGf7BaEFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
