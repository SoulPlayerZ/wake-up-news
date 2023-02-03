import Card from "./Card";
import { useContext, useEffect } from "react";
import NewsContext from "../context/NewsContext";
import "../css/cardList.css";


function CardList () {
  const { allNews } = useContext(NewsContext);


  useEffect(() => {
     console.log(allNews)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return(
    <section className="card-list">
        {allNews.map((news) => <Card news={news} key={ news.id }/>)}
    </section>
  )
}

export default CardList;