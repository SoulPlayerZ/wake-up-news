const getAllNews = async () => {
  const news = await fetch('http://servicodados.ibge.gov.br/api/v3/noticias/');
  const { items } = await news.json();
  return items;
}

export default getAllNews;