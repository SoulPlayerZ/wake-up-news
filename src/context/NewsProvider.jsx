import React, { useState } from "react";
import NewsContext from "./NewsContext";

function NewsProvider ({ children }) {
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredNews, setFilteredNews] = useState([]);
 
const contextValue = {
  allNews,
  setAllNews,
  loading,
  setLoading,
  filteredNews,
  setFilteredNews,
};

return (
<NewsContext.Provider value={contextValue}>
    {children}
</NewsContext.Provider>
);
}

export default NewsProvider;