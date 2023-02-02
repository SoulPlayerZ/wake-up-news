import React, { useContext, useEffect } from "react";
import CardList from "../components/CardList";
import Loading from "../components/Loading";
import NewsContext from "../context/NewsContext";
import getAllNews from "../services/getNewsFromApi";


function MainNewsPage () {
  const { setAllNews, loading, setLoading } = useContext(NewsContext);
    const getNews = async () => {
      setLoading(true);
      const news = await getAllNews();
      setAllNews(news);
      setLoading(false);
    }

    useEffect(() => {
        getNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return(
    <section>
      { loading ? <Loading /> : <CardList /> }
    </ section>
 
  )
}
 
 export default MainNewsPage;