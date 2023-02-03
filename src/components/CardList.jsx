import Card from "./Card";
import { useContext, useEffect } from "react";
import NewsContext from "../context/NewsContext";

function CardList () {
  const { allNews } = useContext(NewsContext);


  useEffect(() => {
     console.log(allNews)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return(
    <section>
        {allNews.map((news) => <Card news={news} key={ news.id }/>)}
    </section>
  )
}

export default CardList;