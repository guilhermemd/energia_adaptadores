import "./News.css";
import whiplash from "../../img/news/whiplash.png";
import DG from "../../img/news/DG.png";
import CP from "../../img/news/CP.png";

const imgsMews = [
  {
    image: whiplash,
    link: "https://whiplash.net/materias/news_731/330818-classicriders.html",
  },
  {
    image: DG,
    link: "http://amp.diariogaucho.clicrbs.com.br/rs/entretenimento/noticia/2021/02/trio-apaixonado-por-motos-e-rock-conheca-a-classic-rider-s-14666513.html",
  },
  {
    image: CP,
    link: "https://www.correiodopovo.com.br/blogs/cenarock/classic-rider-s-1.571744",
  },
];
const News = () => {
  return (
    <section className="news">
      <h1 className="title">Classic Rider's</h1>
      <h2 className="subtitle">Motos e Rock</h2>

      <div className="imgsWrapper">
        {imgsMews.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`img-news-${index}`}
            key={index}
          >
            <img src={item.image} alt={index} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default News;
