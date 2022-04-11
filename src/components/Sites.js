import React from 'react';
import styles from './Sites.module.css';
import sites from '../data/sitedata.js';

function Site({ club1, club2, link }) {
  return (
    <div className={styles.siteName}>
      <a href={link} target="_blank" rel="noopener noreferrer"><div className={styles.nameContainer}><span>{club1}</span><span>{club2}</span></div></a>
    </div>
  )}

function nameSort(a, b) {
  if (a.club < b.club) {
    return -1;
  }
  if (a.club > b.club) {
    return 1;
  }  
  return 0;
} 

export default function Sites() {
  // horrible function to split site names evenly between two lines
  sites.forEach(site => {
    let club1;
    let club2;
    let pos = site.club.indexOf(" ")
    if (pos === -1) {
      club1 = site.club;
      club2 = "";
    } else {
      let middle = site.club.length / 2;
      let usePos = pos;
      let best = Math.abs(middle - pos);
      while (pos !== -1) {
        if (Math.abs(middle - pos) < best) {
          usePos = pos;
          best = Math.abs(middle - pos);
        }
        pos = site.club.indexOf(" ", pos + 1)
      }
      club1 = site.club.substring(0, usePos);
      club2 = site.club.substring(usePos + 1);
    }
    site.club1 = club1;
    site.club2 = club2;
  })
  const uk = sites.sort(nameSort).filter(site => site.bof === "true");
  const major = sites.sort(nameSort).filter(site => site.bof === "major");
  const other = sites.sort(nameSort).filter(site => site.bof === "false");
  return (
    <>
      <section className={[styles.sites, styles.uk].join(" ")}>
      <div className='container'>
        <h3>British Orienteering Federation club sites ({uk.length})</h3>
        <div className={styles.sitesContainer}>
          {uk.map((props, idx) => (
            <Site key={idx} {...props} />
          ))}
        </div>
      </div>
      </section>
      <section className={[styles.sites, styles.major].join(" ")}>
      <div className='container'>
        <h3>Major events ({major.length})</h3>
        <div className={styles.majorSitesContainer}>
          {major.map((props, idx) => (
            <Site key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
      <section className={[styles.sites, styles.other].join(" ")}>
      <div className='container'>
        <h3>Other Routegadget sites ({other.length})</h3>
        <div className={styles.sitesContainer}>
          {other.map((props, idx) => (
            <Site key={idx} {...props} />
          ))}
          </div>
      </div>
      </section>
    </>
  );
}
