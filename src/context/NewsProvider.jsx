import React, { useState } from "react";
import NewsContext from "./NewsContext";

function NewsProvider ({ children }) {
  const [allNews, setAllNews] = useState([]);
 
const contextValue = {
  allNews,
  setAllNews,
};

return (
<NewsContext.Provider value={contextValue}>
    {children}
</NewsContext.Provider>
);
}

export default NewsProvider;