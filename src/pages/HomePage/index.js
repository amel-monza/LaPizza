import React, {useState, useEffect} from 'react';
import { useUser } from 'services/users/user/hook';
import Slider from 'infinite-react-carousel';
import styles from './styles.module.scss';
import './style.css'
import logo from '../../images/logo.jpg'
 

export const HomePage = () => {
  const { getUser, user, loading } = useUser();
  const [state,setState] = useState({
    count: 0
  })
  const settings =  {
    
    dots: false,
    duration: 40,
    arrows:true,
    autoplay: true,
    autoplaySpeed:12000,
    pauseOnHover: false,
    
    
  };

  return (
 <>
  
  <div className={styles.divKlas}>
    <header className={styles.parent}>
      <img src={logo}/>
      <nav>
        <ul className={styles.UL}>
          <li><a href="g">Мени</a></li>
          <li><a href="g">За Нас</a></li>
          <li><a href="g">Достава</a></li>
          <li><a href="g">Галерија</a></li>
        </ul>
      </nav>
      <a className={styles.cta} href="a"><p>Контакт</p></a>
    </header>
  <Slider { ...settings } >
  
  <div className={styles.eachSlide}>
  
    <div className={styles.tekst10}>
   
    <span className={styles.text1}>Добредојдовте во </span>
   <span className={styles.text2}>LaPizza!</span>
   <h4 class={styles.wordCarousel}>    
<div className={styles.wordCar}> 
 
            <ul class={styles.flip3}> 
                <li>Најдобрата</li>
                <li>Највкусната</li>
                <li>Најквалитетната</li> 
               
            </ul>
        </div>  
        <span>пица во градот!</span>  
        
    </h4>
    
    
    </div>
    <div className={styles.Menu}>
    <a href="menu" className={styles.MenuHref}> <p>Мени  </p></a></div>
   </div>
   
   <div className={styles.test}>
           
<div className={styles.tekst10}>
    <span className={styles.text1}>Добредојдовте во </span>
   <span className={styles.text2}>LaPizza!</span>
   <h4 class={styles.wordCarousel}>    
<div className={styles.wordCar}> 
 
            <ul class={styles.flip3}> 
                <li>Најдобрата</li>
                <li>Највкусната</li>
                <li>Најквалитетната</li> 
               
            </ul>
        </div>  
        <span>пица во градот!</span>  
        
    </h4>
    </div>
    <div className={styles.Menu}>
    <a href="menu" className={styles.MenuHref}> <p>Мени  </p></a></div>
  <div className={styles.eachSlide1} >
   
   </div>
   </div>



   <div className={styles.test}>
       
<div className={styles.tekst10}>
    <span className={styles.text1}>Добредојдовте во </span>
   <span className={styles.text2}>LaPizza!</span>
   <h4 class={styles.wordCarousel}>    
<div className={styles.wordCar}> 
 
            <ul class={styles.flip3}> 
                <li>Најдобрата</li>
                <li>Највкусната</li>
                <li>Најквалитетната</li> 
               
            </ul>
        </div>  
        <span>пица во градот!</span>  
        
    </h4>
    </div>
    <div className={styles.Menu}>
    <a href="menu" className={styles.MenuHref}> <p>Мени  </p></a></div>
<div className={styles.eachSlide2}>
 
</div>
  </div>


  </Slider>
 
</div>

 



<div>lorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 zlorem55555555555555555555555555555555555555555555555555555555555555555555555555555555555 z</div>
 
 <div className={styles.container}>
   <span className={styles.text1}>Dobredojdovte</span>
   <span className={styles.text2}> vo LaPizza</span>
 </div>
 

  </>
  )
};


 