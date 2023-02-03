import Card from "./Card";
import { useContext, useEffect } from "react";
import NewsContext from "../context/NewsContext";

function CardList () {
  const { allNews, setFilteredNews } = useContext(NewsContext);

  const filterAllNewsForRender = () => {
    const a = allNews.slice(0, 5)
    setFilteredNews(a);
  }

  useEffect(() => {
      filterAllNewsForRender ();
      
   
    // if (allNews.length !== 0) {

    //   console.log(allNews);
    // }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return(
    <section>
        {/* {filteredNews.map((news) => <Card news={news} key={ news.id }/>)} */}
        <Card />
    </section>
  )
}

export default CardList;