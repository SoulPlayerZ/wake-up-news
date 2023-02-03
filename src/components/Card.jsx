import "../css/card.css";

function Card({ news }) {

  return( 
    <section className="card">
      <a className="card-content" href={ news.url } target='_blank' rel="noreferrer noopener">
        <img className="card-img" src={ `https://www.vagalume.com.br/${news.pic_src}`} alt='News Thumbnail' />
        <h2 className="card-title">{ news.headline }</h2>
        <p className="card-title">{ news.kicker }</p>
        <p className="card-title">{ news.inserted }</p>
      </a>
    </section>
  )
}

export default Card;


// <section className="card">

// <a  href={ news.url } target='_blank' rel="noreferrer noopener">
//   <h2 className="card-title">{ news.headline }</h2>
//   <img src={ `https://www.vagalume.com.br/${news.pic_src}`} alt='News Thumbnail' className="card-img-top" />
//   <p className="card-kicker">{ news.kicker }</p>
//   <p className="card-inserted">{ news.inserted }</p>
// </a>
// </section>
