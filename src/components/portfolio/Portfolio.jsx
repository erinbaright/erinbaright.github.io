import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/breddit.png'
import IMG2 from '../../assets/petlyfe.png'
import IMG3 from '../../assets/guessthecity.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Breddit - Better Reddit',
    github: 'https://github.com/SEI-Buffleheads/reddit-clone',
    demo: 'https://breddit.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'PetLyfe - E-Commerce Pet Supply',
    github: 'https://github.com/Brandon-Alvarez-03/pet-style-mern',
    demo: 'https://pet-lyfe.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Name The City - JavaScript Game',
    github: 'https://github.com/erinbaright/namethecity',
    demo: 'https://guess-the-city-ebaright.netlify.app/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio