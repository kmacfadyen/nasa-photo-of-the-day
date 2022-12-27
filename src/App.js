import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";

import NasaPhoto from "./Components/NasaPhoto";

const dummyData = {
date: "2022-12-27",
explanation: "Have you ever seen an entire rainbow? From the ground, typically, only the top portion of a rainbow is visible because directions toward the ground have fewer raindrops. From the air, though, the entire 360-degree circle of a rainbow is more commonly visible. Pictured here, a full-circle rainbow was captured over the Lofoten Islands of Norway in September by a drone passing through a rain shower. An observer-dependent phenomenon primarily caused by the internal reflection of sunlight by raindrops, the rainbow has a full diameter of 84 degrees. The Sun is in the exact opposite direction from the rainbow's center.  As a bonus, a second rainbow that was more faint and color-reversed was visible outside the first.",
hdurl: "https://apod.nasa.gov/apod/image/2212/FullCircleRainbow_Moesch_4500.jpg",
title: "A Full Circle Rainbow over Norway"
}

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      // console.log(res);
      setData(res.data);
    }).catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      { data && <NasaPhoto photo={data} /> }
    </div>
  );
}

export default App;

/*


*/