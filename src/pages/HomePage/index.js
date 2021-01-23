import React, { useState, useEffect } from 'react';
import { useUser } from 'services/users/user/hook';
import Slider from 'infinite-react-carousel';
import './style.css';
import logo from '../../images/logo.jpg';
import logo2 from '../../images/logo2.png';
import pizza from '../../images/pizza.png';
import pizza2 from '../../images/pizza2.png';
import sostojki from '../../images/sostojki.png';
import dostava from '../../images/dostava.png';
import family from '../../images/family.png';
import zanas from '../../images/zanas.png';
import divider from '../../images/divider.png';
import mushroom from '../../images/mushroom.png';
import tomato from '../../images/tomato.png';
import garlic from '../../images/garlic.png';
import lettuce from '../../images/lettuce.png';
import klienti from '../../images/klienti.jpg';
import fb from '../../images/fb.png';
import stars1 from '../../images/stars1.png';
import styles from './styles.module.scss';

export const HomePage = () => {
  const { getUser, user, loading } = useUser();
  const [state, setState] = useState({
    count: 0,
  });
  const settings = {
    
    dots: false,
    duration: 40,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 12000,
    pauseOnHover: false,
    
  };

  const settingz = {
    
    dots: true,
    
    arrows: true,
    autoplay: false,
    duration: 100,
    pauseOnHover: false,
    
  };

  return (
    <>
  
      <div className={styles.divKlas}>
        <header className={styles.parent}>
          <img src={logo2} />
          <nav>
            <ul className={styles.UL}>
              <li><a href="g">Мени</a></li>
              <li><a href="g">За Нас</a></li>
              <li><a href="g">Достава</a></li>
              <li><a href="g">Галерија</a></li>
            </ul>
          </nav>
          <a
            className={styles.cta}
            href="a"
          ><p>Контакт</p>
          </a>
        </header>
        <Slider {...settings}>
  
          <div className={styles.eachSlide}>
  
            <div className={styles.tekst10}>
   
              <span className={styles.text1}>Добредојдовте во </span>
              <span className={styles.text2}>LaPizza!</span>
              <h4 className={styles.wordCarousel}>    
                <div className={styles.wordCar}> 
 
                  <ul className={styles.flip3}> 
                    <li>Најдобрата</li>
                    <li>Највкусната</li>
                    <li>Најквалитетната</li> 
               
                  </ul>
                </div>  
                <span>пица во градот!</span>  
        
              </h4>
    
            </div>
            <div className={styles.Menu}>
              <a
                href="menu"
                className={styles.MenuHref}
              > <p>Мени  </p>
              </a>
            </div>
          </div>
   
          <div className={styles.test}>
           
            <div className={styles.tekst10}>
              <span className={styles.text1}>Добредојдовте во </span>
              <span className={styles.text2}>LaPizza!</span>
              <h4 className={styles.wordCarousel}>    
                <div className={styles.wordCar}> 
 
                  <ul className={styles.flip3}> 
                    <li>Најдобрата</li>
                    <li>Највкусната</li>
                    <li>Најквалитетната</li> 
               
                  </ul>
                </div>  
                <span>пица во градот!</span>  
        
              </h4>
            </div>
            <div className={styles.Menu}>
              <a
                href="menu"
                className={styles.MenuHref}
              > <p>Мени  </p>
              </a>
            </div>

            <div className={styles.eachSlide1} />
          </div>

          <div className={styles.test}>
       
            <div className={styles.tekst10}>
              <span className={styles.text1}>Добредојдовте во </span>
              <span className={styles.text2}>LaPizza!</span>
              <h4 className={styles.wordCarousel}>    
                <div className={styles.wordCar}> 
 
                  <ul className={styles.flip3}> 
                    <li>Најдобрата</li>
                    <li>Највкусната</li>
                    <li>Најквалитетната</li> 
               
                  </ul>
                </div>  
                <span>пица во градот!</span>  
        
              </h4>
            </div>
            <div className={styles.Menu}>
              <a
                href="menu"
                className={styles.MenuHref}
              > <p>Мени  </p>
              </a>
            </div>

            <div className={styles.eachSlide2} />
          </div>

        </Slider>
 
      </div>
  
      <div className={styles.ChapterTwo}>
        <img
          src={mushroom}
          className={styles.mushroom}
          alt="mushroom"
        />
        <img
          src={tomato}
          className={styles.tomato}
          alt="tomato"
        />
        <img
          src={garlic}
          className={styles.garlic}
          alt="garlic"
        />
        <img
          src={lettuce}
          className={styles.lettuce}
          alt="lettuce"
        />
        <div className={styles.ZostoLa}>
          <img
            src={zanas}
            alt="zanas"
          />
          <div className={styles.ZostoContainer}>
            <div className={styles.Conta}> <span className={styles.ZostoLaTekst}>За Нас</span></div>
            <div className={styles.Contas}> <img
              src={divider}
              alt="divider"
            />
            </div>
  
            <span className={styles.SostojkiSpan}>Нашата приказна почнува во Октомври, далечната 2005. После долги години како почитувани пиц мајстори во Италија, одлучивме да се вратиме во Македонија и да ги пренесеме вкусовите и искуствата од стекнатото знаење во Италија. Решивме да отвориме наша пицерија. Се од тогаш па до сега ги задоволуваме сите потреби на нашите купувачи со вкусни пици и брза достава.
              <br />
              <br />
              Нашата цел е да се прошириме на цела територија на град Скопје и секој граѓанин да го дели еден повик од највкусната пица во градот, а притоа да го задржиме квалитетот!
            </span>
          </div>
        </div>
        <div className={styles.ZostoLa}>
          <span className={styles.ZostoLaTekst}>Зошто LaPizza?</span>
        </div>
        <div className={styles.Contas}> <img
          src={divider}
          alt="divider"
        />
        </div>
        <div className={styles.Sostojki}>
     
          <div className={styles.SostojkiDiv}>
            <img
              src={sostojki}
              alt="sostojki"
            />
            <span className={styles.SostojkiNaslov}>Квалитет</span>
            <div className={styles.SostojkiDef}>
              <span className={styles.SostojkiSpan}>LaPizza како реномиран бренд од почетокот па до сега ги користи најквалитетните состојки и оригиналните италијански рецепти за правење пици.</span>
            </div>
          </div>

          <div className={styles.DostavaDiv}>
            <img
              src={dostava}
              alt="dostava"
            />
            <span className={styles.SostojkiNaslov}>Брза достава</span>
            <div className={styles.SostojkiDef}>
     
              <span className={styles.SostojkiSpan}>Зимајќи во предвид дека пицата е најубава кога е топла, Ние како тим секокаш се стремиме кон тоа за пицата да стигне кај вас во најбрз можен рок.</span>
            </div>
          </div>

          <div className={styles.FamilyDiv}>
            <img
              src={family}
              alt="family"
            />
            <span className={styles.SostojkiNaslov}>Посветеност</span>
            <div className={styles.SostojkiDef}>
     
              <span className={styles.SostojkiSpan}>Нашиот тим од искусни пиц мајстори и доставувачи даваат се од себе за вашата нарачка да биде највкусна и доставена кај вас на време!</span>
            </div>
          </div>

        </div>

        <div className={styles.Back}>
          <span className={styles.Vpecatoci}>Ваши Впечатоци</span>
          <Slider {...settingz}>
  
            <div className={styles.eachSlideReviews}>
              <div className={styles.Klienti}>
  
                <div className={styles.LaPizzaFb}>
                  <img
                    src={fb}
                    alt="hh"
                  />
                  <a
                    href="https://www.facebook.com/permalink.php?story_fbid=146958336732266&id=100042543022352"
                    target="_blank"
                  /> 
                </div>
                <span className={styles.Opis}>"Одличен вкус со уште по прифатливи цени за обемот и исполнетоста на пиците и пастрмајлиите. Брза достава и љубезност од истата. Браво."</span>
                <img
                  src={stars1}
                  alt="hh"
                  className={styles.Stars}
                />
                <span className={styles.Nickname}>Госпожа Ѓорѓиќ</span>
              </div>
  
            </div>

            <div className={styles.eachSlideReviews}>
  
              <div className={styles.Klienti}>
   
                <div className={styles.LaPizzaFb}>
                  <img
                    src={fb}
                    alt="hh"
                  />
                  <a
                    href="https://www.facebook.com/DuleAeroporto/posts/10216959615606614"
                    target="_blank"
                  /> 
                </div>
                <span className={styles.Opis}>"Одлична услуга, љубезен персонал и пристојни цени. Keep it going!"</span>
                <img
                  src={stars1}
                  alt="hh"
                  className={styles.Stars}
                />
                <span className={styles.Nickname}>Trajkovski Dule</span>
              </div>
            </div>
 
            <div className={styles.eachSlideReviews}>

              <div className={styles.Klienti}>
  
                <div className={styles.LaPizzaFb}>
                  <img
                    src={fb}
                    alt="hh"
                  />
                  <a
                    href="https://www.facebook.com/druid.mali/posts/10205978209730928"
                    target="_blank"
                  /> 
                </div>
                <span className={styles.Opis}>"Предобра пица, луѓето фини, брза достава, секоја чест."</span>
                <img
                  src={stars1}
                  alt="hh"
                  className={styles.Stars}
                />
                <span className={styles.Nickname}>Andrej Arsovski</span>
              </div>

            </div>

          </Slider>
        </div>
        <div className={styles.Footer} />
       
        
 <div className={styles.first}>
   <img src={pizza}/>
   <span className={styles.peperoni}>Пеперони</span>
   <span className={styles.Span2}>Доматен сос, кашкавал, кулен</span>
   <div className={styles.div3}>
     <span className={styles.Span3}>
       220ден
     </span>
     <span className={styles.Span4}>
       370ден
     </span>
     
   </div>
   <div className={styles.div4}>
   <span className={styles.Span5}>Фамилијарна 40cm</span>
   <span className={styles.Span6}>Средна 30cm</span>
   </div>
 </div>  
 <div className={styles.first}>
   <img src={pizza2}/>
   <span className={styles.peperoni}>Туна</span>
   <span className={styles.Span2}>Доматен сос, кашкавал, туна, маслинки, печурки, рукола, пченка</span>
   <div className={styles.div3}>
     <span className={styles.Span3}>
       250ден
     </span>
     <span className={styles.Span4}>
       460ден
     </span>
     
   </div>
   <div className={styles.div4}>
   <span className={styles.Span5}>Фамилијарна 40cm</span>
   <span className={styles.Span6}>Средна 30cm</span>
   </div>
 </div>   
   
      </div>

    </>
  );
};
 
