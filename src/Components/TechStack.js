import React, { useState, useEffect } from 'react';
import { ReactComponent as ReactLogo } from './svg/react.svg'
import { ReactComponent as NextLogo } from './svg/nextjs.svg'
import { ReactComponent as MaterialLogo } from './svg/material-ui.svg'
import { ReactComponent as MongoLogo } from './svg/mongodb.svg'
import { ReactComponent as NodeLogo } from './svg/nodejs.svg'
import { ReactComponent as FirebaseLogo } from './svg/firebase.svg'
import { ReactComponent as ReactQueryLogo } from './svg/react-query.svg'
import { ReactComponent as RouterLogo } from './svg/react-router.svg'
import { ReactComponent as SassLogo } from './svg/sass.svg'
import { ReactComponent as TailwindLogo } from './svg/tailwindcss.svg'


const mobileSize = window.matchMedia('(min-width: 700px)')

const styles = {
  container: isRowBased => ({
    display: 'flex',
    flexDirection: isRowBased ? 'row' : 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    height: isRowBased ? "500px" :  '200px',
    width: '100%'
  }),
  img: isRowBased => ({
    width:'15%',
    height: isRowBased ? '200px' : '70px'
  })
}


const TechStack = () => {  
const [matches, setMatches] = useState(mobileSize.matches);


  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mobileSize.addListener(handler);
    return () => mobileSize.removeListener(handler);
  });
    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>My Current Tech Stack.</h1>

            <div style={styles.container(matches)}>
              <ReactLogo style={styles.img(matches)} className="stack-logo"/>
              <NextLogo style={styles.img(matches)} className="stack-logo"/>
              <ReactQueryLogo style={styles.img(matches)} className="stack-logo"/>
              <NodeLogo style={styles.img(matches)} className="stack-logo"/>
              <MaterialLogo style={styles.img(matches)} className="stack-logo"/>
              <MongoLogo style={styles.img(matches)} className="stack-logo"/>
              <FirebaseLogo style={styles.img(matches)} className="stack-logo"/>
              <SassLogo style={styles.img(matches)} className="stack-logo"/>
              <RouterLogo style={styles.img(matches)} className="stack-logo"/>
              <TailwindLogo style={styles.img(matches)} className="stack-logo"/>



            </div>
          </div>
        </div>  
      </section>
    );
  }

export default TechStack;
