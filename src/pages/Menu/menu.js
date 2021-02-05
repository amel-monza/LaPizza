import React from 'react';
import styles from './styles.module.scss';
import logo2 from '../../images/logo2.png';
import pizza from '../../images/pizza.png';
import pizza2 from '../../images/pizza2.png';
import margarita from '../../images/margarita.png';
import kaprivrat from '../../images/kaprivrat.png';
import lapizzameni from '../../images/lapizzameni.png';
import vege from '../../images/vege.png';
import kratovska from '../../images/kratovska.png';
import veleska from '../../images/veleska.png';
import skopska from '../../images/skopska.png';



export const Menu = () => {
    return (

        <div className={styles.Container}>
        <div className={styles.Meni}>
          <header className={styles.parent}>
          <img src={logo2} />
          <nav>
            <ul className={styles.UL}>
              <li><a href="/">Почетна</a></li>
              <li><a href="/menu">Мени</a></li>
              <li><a href="g">За Нас</a></li>
              
            </ul>
          </nav>
          <a
            className={styles.cta}
            href="a"
          ><p>Контакт</p>
          </a>
        </header>

        <div className={styles.tekst10}>
   
          
              <span className={styles.text2}>Мени</span>

              </div>
        </div>

        <div className={styles.pici}>
          <span className={styles.ZostoLaTekst}>Пици</span> 
          <div className={styles.first}>
   <img src={pizza}/>
   <span className={styles.peperoni}>Пеперони</span>
   <span className={styles.Span2}>Доматен сос, кашкавал, кулен</span>
   <div className={styles.div3}>
     <span className={styles.Span3}>
       260 ден.
     </span>
     <span className={styles.Span4}>
       380 ден.
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
       260 ден.
     </span>
     <span className={styles.Span4}>
       450 ден.
     </span>
     
   </div>
   <div className={styles.div4}>
   <span className={styles.Span5}>Фамилијарна 40cm</span>
   <span className={styles.Span6}>Средна 30cm</span>
   </div>
 </div>  
 <div className={styles.first}>
   <img src={margarita}/>
   <span className={styles.peperoni}>Маргарита</span>
   <span className={styles.Span2}>Доматен сос, кашкавал</span>
   <div className={styles.div3}>
     <span className={styles.Span3}>
       210 ден.
     </span>
     <span className={styles.Span4}>
       320 ден.
     </span>
     
   </div>
   <div className={styles.div4}>
   <span className={styles.Span5}>Фамилијарна 40cm</span>
   <span className={styles.Span6}>Средна 30cm</span>
   </div>
 </div>   
 <div className={styles.first}>
   <img src={kaprivrat}/>
   <span className={styles.peperoni}>Капри Врат</span>
   <span className={styles.Span2}>Доматен сос, кашкавал, врат, печурки</span>
   <div className={styles.div3}>
     <span className={styles.Span3}>
       260 ден.
     </span>
     <span className={styles.Span4}>
       400 ден.
     </span>
     
   </div>
   <div className={styles.div4}>
   <span className={styles.Span5}>Фамилијарна 40cm</span>
   <span className={styles.Span6}>Средна 30cm</span>
   </div>
 </div>   
 <div className={styles.first}>
   <img src={lapizzameni}/>
   <span className={styles.peperoni}>Ла Пица</span>
   <span className={styles.Span2}>Доматен сос, кашкавал, врат, сланина, печурки, кајмак</span>
   <div className={styles.div3}>
     <span className={styles.Span3}>
       370 ден.
     </span>
     <span className={styles.Span4}>
       490 ден.
     </span>
     
   </div>
   <div className={styles.div4}>
   <span className={styles.Span5}>Фамилијарна 40cm</span>
   <span className={styles.Span6}>Средна 30cm</span>
   </div>
 </div>    
 <div className={styles.first}>
   <img src={vege}/>
   <span className={styles.peperoni}>Вегетаријана</span>
   <span className={styles.Span2}>Доматен сос, кашкавал, пиперка, кромид, маслинки, печурки, домат</span>
   <div className={styles.div3}>
     <span className={styles.Span3}>
       250 ден.
     </span>
     <span className={styles.Span4}>
       370 ден.
     </span>
     
   </div>
   <div className={styles.div4}>
   <span className={styles.Span5}>Фамилијарна 40cm</span>
   <span className={styles.Span6}>Средна 30cm</span>
   </div>
 </div>    
 

        </div>
        <div className={styles.pastr}> 
        <span className={styles.ZostoLaTekst}>Пастрмајлии</span> 
        <div className={styles.first}>
   <img src={kratovska}/>
   <span className={styles.peperoni}>Кратовска</span>
   <span className={styles.Span2}>Суво домашно димено месо, зачин</span>
   <div className={styles.divPastr3}>
     <span className={styles.SpanPastr3}>
       250 ден.
     </span>
     
     
   </div>
   <div className={styles.divPastr4}>
   <span className={styles.SpanPastr5}>50cm</span>
   
   </div>
 </div>    
 <div className={styles.first}>
   <img src={veleska}/>
   <span className={styles.peperoni}>Велешка</span>
   <span className={styles.Span2}>Свинско месо, јајце, зачин</span>
   <div className={styles.divPastr3}>
     <span className={styles.SpanPastr3}>
       250 ден.
     </span>
     
     
   </div>
   <div className={styles.divPastr4}>
   <span className={styles.SpanPastr5}>50cm</span>
   
   </div>
 </div>    

 <div className={styles.first}>
   <img src={skopska}/>
   <span className={styles.peperoni}>Велешка</span>
   <span className={styles.Span2}>Свинско месо, јајце, кашкавал, зачин</span>
   <div className={styles.divPastr3}>
     <span className={styles.SpanPastr3}>
       280 ден.
     </span>
     
     
   </div>
   <div className={styles.divPastr4}>
   <span className={styles.SpanPastr5}>50cm</span>
   
   </div>
 </div>    
        </div>
        <div className={styles.Footer} >
        <div className={styles.inline}>
       <div className={styles.GoogleMap}>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1763.5117076021638!2d21.46668074614379!3d41.98178661259898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415a17af45a5f%3A0x36d4d68a7ac211f!2sLa%20Pizza%20Aerodrom%20-%20Pizza%20Delivery!5e0!3m2!1sen!2smk!4v1611716583601!5m2!1sen!2smk" width="100%" height="450" frameborder="0"   allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
       </div>
       <div className={styles.Kontakt}>


         <div className={styles.Navigacija}>
         <h2>Навигација</h2>
         
         <p><a href="/">Почетна</a></p>
         <p><a href="/">Мени</a></p>
         <p><a href="/">За Нас</a></p>
       
         </div>
 

         <div className={styles.Konts}>
         <h2>Контакт</h2>
      
         <p><cv>Адреса:</cv><br/> Бул. Јане Сандански 98</p>
         <p><cv>Телефонски број: </cv>+389 72 57 57 56</p>
         <p><cv>Е-маил: </cv>lapizza@hotmail.com</p>
         <a className={styles.FBSVG} href="https://www.facebook.com/lapizzaskopje/" target="_blank"><svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" class="svg-inline--fa fa-facebook fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a>


         <a className={styles.FBSVG} href="https://www.instagram.com/lapizza_delivery_/" target="_blank">
         <svg height="50px" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" class="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></a>


 
         </div>
         </div>
 </div>
       </div>
        
 
   <div className={styles.Rights}>
   © 2021 All Rights Reserved | LaPizza.com
      </div>
      
      
        </div>

    )
}
