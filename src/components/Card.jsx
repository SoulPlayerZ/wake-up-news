import "../css/card.css";

function Card({ news }) {

  return( 
    <section className="card">
      <a className="card-content" href={ news.url } target='_blank' rel="noreferrer noopener">
        <img className="card-img" src={ `https://www.vagalume.com.br/${news.pic_src}`} alt='News Thumbnail' />
        <h2 className="card-title">{ news.headline }</h2>
        <p className="card-kicker">{ news.kicker }</p>
        <p className="card-inserted">{ news.inserted }</p>
      </a>
    </section>
  )
}

export default Card;