import React from "react";
import './DetailedPage.css';

const DetailedPage = ({ match }) => {
  console.log(match);
  const tags = match.des_facet.join(', ')
  return (
    <section className='details-container'>
      <h2>{match.title}</h2>
      <p>{match.byline}</p>
      <div className='dates'>
        <p>Published: {match.created_date}</p>
        <p>{match.updated_date && `Updated: ${match.updated_date}`}</p>
      </div>
      <h3>{match.abstract}..<a className='article-url' href={match.url} target='_blank' rel='noopener noreferrer'>Read More</a></h3>
      <div className="article-img">
        {/* <img src={match.multimedia[0].url} height={match.multimedia[0].height} width={match.multimedia[0].width}/> */}
        <img src={match.multimedia[1].url} height={match.multimedia[1].height} width={match.multimedia[1].width} alt='image depiction of article topic'/>
        <p>{match.multimedia[1].caption}</p>
        {/* <img src={match.multimedia[2].url} height={match.multimedia[2].height} width={match.multimedia[2].width} alt='icon depiction of article topic'/> */}
      </div>
      <p>{tags && `Tags: ${tags}`}</p>
    </section>
  );
}

export default DetailedPage;