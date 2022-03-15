import React from 'react';
import clsx from 'clsx';
import styles from './TopTips.module.css';

const TipsList = [
  {
    title: 'GPS speed colours',
    img: require('../../static/img/gps-colours.png').default,
    link: "/docs/user-guide/configuration-options#show-gps-speed-colours",
    description: (
      <>
        Colour-code your GPS track to see the impact of hills, thick vegetation and rough terrain.
      </>
    ),
  },
  {
    title: 'Performance analysis',
    img: require('../../static/img/performance.png').default,
    link: "/docs/user-guide/analysis-options#performance-analysis",
    description: (
      <>
        See how you did on each leg and get estimates of who lost what time where.
      </>
    ),
  },
  {
      title: 'Replay',
      img: require('../../static/img/replay.png').default,
      link: "/docs/user-guide/replay",
      description: (
        <>
          Replay selected runners to see how different routes compare.
        </>
      ),
  },

];

function Tip({img, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          <img src={img} alt={title} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3><a href={link}>{title}</a></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function TopTips() {
  return (
    <section className={styles.tips}>
      <div className="container">
        <div className="row">
          {TipsList.map((props, idx) => (
            <Tip key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
