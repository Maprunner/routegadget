import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'User Guide',
    Svg: require('../../static/img/user-guide.svg').default,
    link: "/docs/intro",
    description: (
      <>
        All you need to know to add your own route and see where other people went.
      </>
    ),
  },
  {
    title: 'Statistics',
    Svg: require('../../static/img/dashboard-monitoring.svg').default,
    link: "https://www.maprunner.co.uk/rg2-stats/",
    description: (
      <>
        Full details of all RG2 installations, including all the latest events and routes.
      </>
    ),
  },
  {
    title: 'Videos',
    Svg: require('../../static/img/videos.svg').default,
    link: "videos",
    description: (
      <>
        Videos showing how to use some of the features of Routegadget.
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          <Svg className={styles.featureSvg} alt={title} title={title} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={link}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
