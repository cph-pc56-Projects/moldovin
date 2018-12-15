import Layout from '../components/Layout';
import Paper from '@material-ui/core/Paper';


export default () => (
    <Layout>
  <div >
    <style jsx>{`
    background-colour: white;
    background-image: url('../static/assets/bottle.jpg'),url('../static/assets/bottle.jpg'),url('../static/assets/bottle.jpg');
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;

    `}
       </style>          
      <div>
       <div className="w3-content w3-container w3-padding-64" id="about">
       <h3 className="w3-center">ABOUT US</h3>
   
       <p align="center">Based in Copenhagen, Denmark, MoldoVin is providing the Danish wine market with high quality
         Moldovan wine. Our team
         has years of experience in online retail and world wide distribution. We are committed to providing our clients
         with
         fantastic service and great wines. </p>
       <p align="center">MoldoVin aims to be the foremost distributor of Moldovan wine in Scandinavia. We bring the
         outstanding wines of Moldova
         into the homes and onto the tables of Scandinavian wine enthusiasts. </p>
   
     </div>
      <div className="w3-container">
      <div className={"col-lg-8 col-lg-offset-2 w3-panel w3-center w3-card-4"} id={"History"}>
      <h2>History of Wine in Moldova</h2>
      <div align="center" classname="w3-left">
        <img className={"w3-left w3-padding-small"} width={"35%;"} src={`../static/assets/blacknwhite.jpg`}>
        </img>
        <p> Grapes have been grown in the hills of the Eastern European country of Moldova for thousands of years. The
          earliest
          winemaking in the world can be traced to the late neolithic period in Mesopotamia and the south and east of
          the
          black sea. From here, the cultivation of grapes spread throughout the ancient world.</p>
        <p>When the Greeks and later the Romans pushed into eastern Europe in the first centuries BC, winemaking had an
          established
          culture for the indigenous tribes. The Romans quickly recognised the quality of the grape produced in the new
          colonies
          and developed the winemaking infrastructure. </p>
         <figure>
          <img src={`../static/assets/Stefan.jpg`} className={"w3-right w3-grayscale-min"} width={"35%;"}> 
          </img>
          <figcaption>Stefan Cel Mare</figcaption>
          </figure>

        <p>Stefan cel Mare (Stephen the Great), Voivode of Moldova from 1457 to 1504, is a central figure in Moldovan
          culture
          and History. Stefan has become a celebrated national hero, honoured for protecting the country from the
          Ottoman
          invaders, amongst others, in the 15th century. Stefan was also responsible for further improving the
          technology
          and organisation of the Moldovan vineyards. He created a position within the Moldovan court solely
          responsible
          for overseeing the quality of production; monastic houses became the industrial centres of Moldovan
          winemaking.
        </p>
        <p> After the death of Stefan the great, for the next 300 years the region came under the sway of the Ottoman
          Empire.
          In this period winemaking suffered a decline due to the bans imposed by the ruling overlords. The Monks of
          Cricova
          famously continued to make wine in secret in this period, stubbornly hiding in remote caves and continuing
          the
          traditions of the previous centuries.</p>
        <p>After the treaty of Bucharest in 1812, Moldova became a territory of the Russian Empire. Wine making and
          drinking
          was a fashionable pastime for Russian aristocrats. Estates and plantations for the cultivation of grapes were
          nurtured
          and the individual wine-regions of Moldova were established.</p>
        <p>Moldovan wine was considered prestigious enough to be served at the table of the Russian Tsar and other
          noble families
          in Europe. By the mid 19th century, Moldova accounted for over half of the wine produced in the Russian
          Empire.</p>
        <p>The end of the 19th and early 20th century was a damaging time for Moldovan wine. Moldova suffered an
          outbreak of
          phylloxera, destroying much of the Moldavian grape crop. The considerable destruction caused by the
          subsequent
          World Wars slowed the winemaking industry to a crawl. </p>
        <p>In the 1950s and 1960s, and the stability brought by the USSR, the wine industry made a full recovery. This
          is testament
          to the strength of the winemaking culture and the perfect conditions of Moldova. </p>
        <p>In 1991 Moldova gained its independence from Soviet Russia. Since then the now privately owned vineyards
          have received
          much in the way of investment, allowing them to flourish and evolve. This investment has attracted
          international
          winemakers who have transferred their knowledge of modern winemaking processes to the vineyards of Moldova.
          Adopting
          and integrating these practices into the traditional Moldovan winemaking practices, Moldovan wine is better
          than
          ever and continually improving.</p>
        <p> Today Moldova holds a National Wine Day in early October, celebrating a fascinating history of respecting
          tradition
          and having the courage for innovation. Moldovan wine is enjoyed worldwide by people from all walks of life.
          Notably
          Queen Elizabeth II of England is a connoisseur of Moldovan wine.</p>
        <p> </p>
        <p> </p>      
    </div>
    </div>
    </div>
    
     <div className="w3-content w3-container w3-padding-64" id="Moldova">
    <h3 className="w3-center">Why Moldova?</h3>
    <img className={"w3-center img-responsive"} padding={"20px, 10px"} src={`../static/assets/MDmap.png`}>
    </img>

    <div padding={"10px, 0px"}>
      <p>The little known European country of Moldova is putting its name on the map for its fantastic wines. The rich
        flavor
        of these wines is fast becoming recognised by world-renowned wine experts. Moldovan wine has great texture,
        warmth
        and flavour that will surprise and delight. </p>
      <p>Moldova is challenging the long-established wineries of the world, pushing and changing what we traditionally
        think
        of as a good wine region. This is partly down to the rich soil and the warm humid continental climate that
        helps
        create the perfect conditions for growing grape vines. </p>
      <p>The Moldovan people have a rich tradition of winemaking.</p>
      <p class="w3-large w3-serif w3-bold">
        <i>
          <b>"Moldovans consider wine to be in the blood of their people. They are born with wine, live with wine and
            die with
            wine."
          </b>
        </i>
      </p>
    </div>
  </div>
  </div> 
  </div>     
    </Layout>

  )
