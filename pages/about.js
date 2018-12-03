//import style from '../stylesheet/style.css'
import Link from 'next/link'
import Layout from '../components/Layout';
// import { Button } from 'react-bootstrap';
import Button from '@material-ui/core/Button'

export default () => (
    <Layout>
  <div >
    <style jsx>{`
    img{
      width: 500px;
    }
    font-family: "Lato", sans-serif;
    height: 50%;
    width: 90%;         
    color: #777;
    img align: left;
    line-height: 1.8;
    padding: 10px 50px 80px 200px;
    background-colour: white;
    background-image: url("../static/assets/");
    background-repeat: no-repeat;
    background-position: middle bottom;
    background-size: cover;
    background-attachment: fixed;
    `}
       </style>          
       <div>
       <img class={"img-responsive"} src={`../static/assets/bottle.jpg`} />
       <p align="center"> ABOUT US </p>
         MoldoVin is a wine importer and distribution company that solely wants to provide the Danish market with Moldovan wine. Hence, the name MoldoVin. 
         The company was founded almost 2 years ago. This means that MoldoVin is an early startup company. Company’s team is less than 5 people. 
       </div>
  <div>
      <img class={"img-responsive"} src={`../static/assets/MDmap.png`} align={"right"}/>
      <p align="center">HISTORY OF WINE IN MOLDOVA </p>
            Grapes have been grown in the hills of the Eastern European country of Moldova for thousands of years. 
            The earliest winemaking in the world can be traced to the late neolithic period in Mesopotamia and the south and east of the black sea.
            From here, the cultivation of grapes spread throughout the ancient world.
            When the Greeks and later the Romans pushed into eastern Europe in the first centuries BC, 
            winemaking had an established culture for the indigenous tribes. The Romans quickly recognised the quality of the grape produced in the
            new colonies and developed the winemaking infrastructure.
            Stefan Cel Mare
            Stefan cel Mare (Stephen the Great), Voivode of Moldova from 1457 to 1504, is a central figure in Moldovan culture and History. 
            Stefan has become a celebrated national hero, honoured for protecting the country from the Ottoman invaders, amongst others, in the 15th century. 
            Stefan was also responsible for further improving the technology and organisation of the Moldovan vineyards.
            He created a position within the Moldovan court solely responsible for overseeing the quality of production;
            monastic houses became the industrial centres of Moldovan winemaking.
            After the death of Stefan the great, for the next 300 years the region came under the sway of the Ottoman Empire.
            In this period winemaking suffered a decline due to the bans imposed by the ruling overlords. 
            The Monks of Cricova famously continued to make wine in secret in this period, stubbornly hiding in remote caves and continuing the traditions of the previous centuries.
            After the treaty of Bucharest in 1812, Moldova became a territory of the Russian Empire. Wine making and drinking was a fashionable pastime for Russian aristocrats. Estates and plantations for the cultivation of grapes were nurtured and the individual wine-regions of Moldova were established.
            Moldovan wine was considered prestigious enough to be served at the table of the Russian Tsar and other noble families in Europe. By the mid 19th century, Moldova accounted for over half of the wine produced in the Russian Empire.
            The end of the 19th and early 20th century was a damaging time for Moldovan wine. Moldova suffered an outbreak of phylloxera, destroying much of the Moldavian grape crop. The considerable destruction caused by the subsequent World Wars slowed the winemaking industry to a crawl.
            In the 1950s and 1960s, and the stability brought by the USSR, the wine industry made a full recovery. This is testament to the strength of the winemaking culture and the perfect conditions of Moldova.
            In 1991 Moldova gained its independence from Soviet Russia. Since then the now privately owned vineyards have received much in the way of investment, allowing them to flourish and evolve. This investment has attracted international winemakers who have transferred their knowledge of modern winemaking processes to the vineyards of Moldova. Adopting and integrating these practices into the traditional Moldovan winemaking practices, Moldovan wine is better than ever and continually improving.
            Today Moldova holds a National Wine Day in early October, celebrating a fascinating history of respecting tradition and having the courage for innovation. Moldovan wine is enjoyed worldwide by people from all walks of life. Notably Queen Elizabeth II of England is a connoisseur of Moldovan wine. 
            </div> 
       
     <div>
            <p align="center"> WHY MOLDOVA </p>
                 The little known European country of Moldova is putting its name on the map for its fantastic wines. The rich flavor of these wines is fast becoming recognised by world-renowned wine experts. Moldovan wine has great texture, warmth and flavour that will surprise and delight.
                 Moldova is challenging the long-established wineries of the world, pushing and changing what we traditionally think of as a good wine region. This is partly down to the rich soil and the warm humid continental climate that helps create the perfect conditions for growing grape vines.
                 The Moldovan people have a rich tradition of winemaking.
                 "Moldovans consider wine to be in the blood of their people. They are born with wine, live with wine and die with wine." 
                 </div>
                 </div>   
       <div class="footer">
             <style jsx>{` 
             position: fixed;
             left: 0;
             bottom: 0;
             height:10%;
             width: 100%;
             background-color: grey;
             color: white;
             text-align: center;   
             `}
            </style>
                 <a href = "http://moldovin.dk/"></a>
                 <a href = "https://www.facebook.com/MoldoVin/">Facebook<i class="fa fa-facebook"></i></a>
                 <a href = "https://instagram.com/moldovin.dk?utm_source=ig_profile_share&igshid=ve95kp57ph82">Instagram <i class="fa fa-instagram"></i></a>
              </div>
        
    </Layout>

  )