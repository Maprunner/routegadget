import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import TopTips from '../components/TopTips';
import Sites from '../components/Sites';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.heroContainer}>
        <div>
          <img src="/img/front-page-screenshot.png" alt="Routegadget screen shot"/>
        </div>
        <div>
          <p className={styles.heroTitle}>{siteConfig.title}</p>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Draw your route after an orienteering event and compare it with others.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <TopTips />
        <Sites />
      </main>
    </Layout>
  );
}
