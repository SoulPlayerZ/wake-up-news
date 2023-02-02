import React, { useState } from "react";
import NewsContext from "./NewsContext";

function NewsProvider ({ children }) {
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(false);
 
const contextValue = {
  allNews,
  setAllNews,
  loading,
  setLoading,
};

return (
<NewsContext.Provider value={contextValue}>
    {children}
</NewsContext.Provider>
);
}

export default NewsProvider;