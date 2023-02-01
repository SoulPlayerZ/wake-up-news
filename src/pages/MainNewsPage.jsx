import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import NewsContext from "../context/NewsContext";
import getAllNews from "../services/getNewsFromApi";


function MainNewsPage () {
  const { allNews, setAllNews } = useContext(NewsContext);
  const { loading, setLoading } = useContext(NewsContext);

     const testGetNews = async () => {
        setLoading(true);
        const news = await getAllNews();
        setAllNews(news);
        setLoading(false);
        console.log(allNews);
    }

    useEffect(() => {
        testGetNews();
    })

  return(
    <Header/>
  )
}
 
 export default MainNewsPage;