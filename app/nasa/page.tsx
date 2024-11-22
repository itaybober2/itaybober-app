'use client'
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Nasa() {

    const [chosenNumber, setChosenNumber] = useState(1);
    const [showData, setShowData] = useState(false);
    const [parsedData, setParsedData] = useState([] as any[]);

    const getData = (count: number) => {
        fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&&count=" + count.toString())
      .then((response) => response.json())
      .then((data) => setParsedData(data)).then(() => setShowData(true));
    }

  return (
      <main className={styles.container}>
          <div className={styles.heading}>
              <h1>Welcome to the NASA part of my website!</h1>
          </div>
          <div className={styles.subHeading}>
              <h3>Please select how many images (and their explanations 🚀 ) you would like to present. </h3>
          </div>
              <div className={styles.submitInputContainer}>
                  <input type={'number'}
                         defaultValue={chosenNumber}
                         onChange={event => setChosenNumber(Number(event.target.value))}
                         min={1}
                         max={10}
                  />
                  <button onClick={() => getData(chosenNumber)} className={styles.submitButton}>Submit</button>
              </div>
              {showData && <div>
                  {parsedData.map((item, index) => {
                      return (
                          <div key={index} className={styles.dataContainer}>
                              <h3>{'OMG! is that a ' + item.title + '?! 🤯 '}</h3>
                              <img className={styles.imageContainer} src={item.url} alt={item.title}/>
                              <p className={styles.dataText}>{item.explanation}</p>
                          </div>
                      )
                  })}
              </div>}
      </main>
);
}
