import Layout from '../components/Layout';
import Paper from '@material-ui/core/Paper';


export default () => (
  <Layout>
    <div>
      <style jsx>
        {`
        .bgImage2 {
          background-image: url('../static/assets/about/bottle.jpg');
          height: 400px;
          
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        
        `}
      </style>
      <div className={'bgImage2 w3-display-container w3-opacity-min'}>
        <div className={'w3-display-middle'}>
          <span className={'w3-xxlarge w3-text-white w3-wide'}>ABOUT</span>
        </div>
      </div>
      <div className="w3-content w3-container w3-padding-64" id="about">
        <h3 className="w3-center">ABOUT US</h3>
        <p className="w3-center">
          <em>We love wine</em>
        </p>
        <p align="center">Based in Copenhagen, Denmark, MoldoVin is providing the Danish wine market with high quality
          Moldovan wine. Our team
          has years of experience in online retail and world wide distribution. We are committed to providing our clients
          with
      fantastic service and great wines. </p>
        <p align="center">MoldoVin aims to be the foremost distributor of Moldovan wine in Scandinavia. We bring the
          outstanding wines of Moldova
      into the homes and onto the tables of Scandinavian wine enthusiasts. </p>
        <br />
        <br />
      </div>
      <div className={'w3-content'}>
        <div className={'w3-card w3-padding w3-white'}>
          <h2 className={'w3-center w3-padding'}>History of Wine in Moldova</h2>
          <br />
          <img className={'w3-left w3-padding-small'} src='../static/assets/about/black-white-grapes.jpg' style={{ width: '35%' }} />
          <p>
            Grapes have been grown in the hills of the Eastern European country of Moldova for thousands of years. The
            earliest
            winemaking in the world can be traced to the late neolithic period in Mesopotamia and the south and east of
            the
            black sea. From here, the cultivation of grapes spread throughout the ancient world.
          </p>
          <p>
            When the Greeks and later the Romans pushed into eastern Europe in the first centuries BC, winemaking had an
              established
              culture for the indigenous tribes. The Romans quickly recognised the quality of the grape produced in the new
              colonies
              and developed the winemaking infrastructure.
          </p>
          <figure>
            <img src='../static/assets/about/Stefan.jpg' className={'w3-right w3-grayscale-min'} style={{ width: '35%' }} />
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
        </div>
      </div>
      <div className={"w3-content w3-container w3-padding-64"}>
        <h3 className={"w3-center"}>Find us</h3>
        <div className={"w3-padding-32 w3-section w3-center"}>
          <div className={"w3-container w3-section"}>
            <div className={"w3-large w3-margin-bottom"}>
              <i className={"fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"}></i> Copenhagen, Denmark
          <br />
              <i className={"fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"}></i> Phone: +45 40 11 62 74
          <br />
              <i className={"fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"}></i> Email: info@moldovin.dk
          <br />
              <i className={"fa fa-truck fa-fw w3-hover-text-black w3-xlarge w3-margin-right"}></i> Sales: sales@moldovin.dk
          <br />
            </div>
            <p>MoldoVin IVS CVR: 38570609</p>
          </div>
        </div>
      </div>
      <footer className={"w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off"}>
        <div className={"w3-xlarge w3-section"}>
          <a href="https://www.facebook.com/MoldoVin/" target="u_blank">
            <i className={"fa fa-facebook w3-hover-text-indigo w3-margin-right"}></i>
          </a>
          <a href="https://www.linkedin.com/company/moldovin/" target="u_blank">
            <i className={"fa fa-linkedin w3-hover-text-indigo w3-margin-right"}></i>
          </a>
          <a href="https://www.instagram.com/moldovin.dk/" target="u_blank">
            <i className={"fa fa-instagram w3-hover-text-indigo"}></i>
          </a>
        </div>
      </footer>
    </div>
  </Layout>
)