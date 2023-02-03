function Card({ news }) {

  return(
    <a href={ news.url } target='_blank' rel="noreferrer noopener">
        <h2>{ news.headline }</h2>
        <p>{ news.inserted }</p>
        <p>{ news.kicker }</p>
        <img src={ `https://www.vagalume.com.br/${news.pic_src}`} alt='News Thumbnail' />
    </a>
  )
}

export default Card;