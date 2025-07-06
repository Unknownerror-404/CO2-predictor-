
document.addEventListener("DOMContentLoaded", () => {
  
    const statesData = {
      "Andhra Pradesh": { image: "https://imgv2-2-f.scribdassets.com/img/document/633149851/original/46265b9f43/1682089074?v=1", co2: [0.034,0.035,0.036,0.037,0.038,0.039,0.040,0.041,0.042,0.043,0.044,0.044] },
      "Arunachal Pradesh": { image: "https://tse1.mm.bing.net/th?id=OIP.BKMBi-us0FQPy7gaJ4CmMwHaEg&pid=Api&P=0&h=180", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
      "Assam": { image: "https://www.mapsofindia.com/ci-moi-images/answers/2019/12/map-of-assam.jpg", co2: [0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007] },
      "Bihar": { image: "https://w7.pngwing.com/pngs/853/733/png-transparent-map-geography-bihar-bihari-portrait.png", co2: [0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.020,0.021,0.021] },
      "Chhattishgarh": { image: "http://www.mapsofworld.com/india/chattisgarh/chattisgarh.jpg", co2: [0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.031] },
      "Delhi": { image: "https://im.indiatimes.in/content/2015/Nov/delhi_1447758195.png", co2: [0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.02] },
      "Goa": { image: "https://i1.wp.com/www.romanticbug.com/wp-content/uploads/2016/04/goa-map.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
      "Gujarat": { image: "https://wallpapercave.com/wp/wp8925192.jpg", co2: [0.044,0.046,0.048,0.05,0.052,0.054,0.056,0.058,0.06,0.062,0.064,0.064] },
       "Haryana": { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3PlYDde_OaspS4CRsNtRqJ9KAdRtf7xxbvQ&s", co2: [0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.023] },
       "Himachal Pradesh": { image: "http://printablegraphics.in/wp-content/uploads/2017/11/Himachal-pradesh-political-map.jpg", co2: [0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002] },
       "Jharkhand": { image: "https://tse2.mm.bing.net/th?id=OIP.YtxXvSWfbbyJibOoqmHOUAHaGe&pid=Api&P=0&h=180", co2: [0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.020,0.021,0.022,0.022] },
       "Karnataka": { image: "https://tse2.mm.bing.net/th?id=OIP.7sA5s_JGoMXS6OqQpLSGCgHaJQ&pid=Api&P=0&h=180", co2: [0.031,0.033,0.035,0.037,0.039,0.041,0.043,0.045,0.047,0.049,0.051,0.051] },
       "Kerala": { image: "https://www.welt-atlas.de/datenbank/karten/en/karte-5-1038-en.gif", co2: [0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.02] },
       "Madhya Pradesh": { image: "https://i0.wp.com/www.bragitoff.com/wp-content/uploads/2015/12/madhya-pradesh.png", co2: [0.027,0.029,0.031,0.033,0.035,0.037,0.039,0.041,0.043,0.045,0.047,0.047] },
       "Maharashtra": { image: "https://www.mapsofindia.com/maps/maharashtra/maharashtra-map.jpg?v:1.0", co2: [0.071,0.075,0.079,0.083,0.087,0.091,0.095,0.099,0.103,0.107,0.11,0.11] },
       "Manipur": { image: "https://m.media-amazon.com/images/I/71ZaxHO49tL._SX522_.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
       "Meghalaya": { image: "https://tse4.mm.bing.net/th?id=OIP.7CHMn5lhpHLccgjL2-2NowHaFj&pid=Api&P=0&h=180", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
       "Mizoram": { image: "https://images.mapsofworld.com/india/mizoram.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
       "Nagaland": { image: "https://images-na.ssl-images-amazon.com/images/I/71vUTZUQgSL._SX679_.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
       "Odisha": { image: "https://tse2.mm.bing.net/th?id=OIP.T5pY248gC8u-jqC4QW4pJQHaFw&pid=Api&P=0&h=180", co2: [0.017,0.018,0.019,0.020,0.21,0.022,0.023,0.024,0.025,0.026,0.027,0.027] },
       "Punjab": { image: "https://tse4.mm.bing.net/th?id=OIP.6gV9Aon5f9MnvxHtf-UmagHaK5&pid=Api&P=0&h=180", co2: [0.014,0.015,0.016,0.017,0.018,0.019,0.020,0.021,0.022,0.023,0.024,0.024] },
       "Rajasthan": { image: "https://tse4.mm.bing.net/th?id=OIP.LwQHamWnx77ivRYDBS3a2QHaGl&pid=Api&P=0&h=180", co2: [0.026,0.028,0.030,0.032,0.034,0.036,0.038,0.040,0.042,0.044,0.046,0.048] },
       "Sikkim": { image: "https://tse2.mm.bing.net/th?id=OIP.877xs5kLTKHferdWGhewdQHaIY&pid=Api&P=0&h=180", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
       "Tamil Nadu": { image: "https://tse3.mm.bing.net/th?id=OIP.AtyqBWvlz0jyASLgi8n3owHaJQ&pid=Api&P=0&h=180", co2: [0.036,0.038,0.040,0.042,0.044,0.046,0.048,0.05,0.052,0.054,0.056,0.056] },
       "Telangana": { image: "https://tse2.mm.bing.net/th?id=OIP.4nmzfictXPqhh2dCXKhK9gHaH-&pid=Api&P=0&h=180", co2: [0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.030,0.031,0.031] },
       "Tripura": { image: "https://i.pinimg.com/736x/c1/ab/54/c1ab54af8672af49b48b46189c59e4a5.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
       "Uttar Pradesh": { image: "https://tse1.mm.bing.net/th?id=OIP.1jWQk3yLZR_ItKqnGkCZlgHaHU&pid=Api&P=0&h=180", co2: [0.045,0.048,0.051,0.054,0.057,0.06,0.063,0.066,0.069,0.072,0.075,0.075] },
       "Uttrakhand": { image: "https://www.whereig.com/india/states/map/uttarakhand-map.gif", co2: [0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002] },
       "West Bengal": { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT37xfbM1mxWtlRMMdOkrRRca6jh8OfZAJloQ&s", co2: [0.026,0.028,0.030,0.032,0.034,0.036,0.038,0.04,0.042,0.044,0.046,0.046] },
       "Andaman and Nicobar Islands": { image: "https://www.andamansguide.com/wp-content/uploads/2016/08/Andaman-Tourist-Map.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
       "Chandigarh": { image: "https://1.bp.blogspot.com/-CnMKCzDaPqI/Wb4mnGOHgiI/AAAAAAAADQI/fr0EQJNUIXkZ59kdBE4B2XtAWhFrUuqlwCLcBGAs/s1600/chandigarh-map.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
       "Dadra and Nagar Haveli and Daman and Diu": { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUVGKOLTOAwKOLEm4nf8N-HITY7ukNSF52Jg&s", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
       "Jammu and Kashmir": { image: "https://image.shutterstock.com/z/stock-vector-jammu-and-kashmir-map-district-map-of-jammu-and-kashmir-in-district-map-of-jammu-and-kashmir-1970895275.jpg", co2: [,0.003,0.003,0.003,0.003,0.003,0.003,0.004,0.004,0.004,0.004,0.005,0.005] },
       "Ladakh": { image: "https://www.lehladakhtourism.com/about-ladakh/images/ladakh-tourist-map.jpg", co2: [0.0003,0.0003,0.0004,0.0004,0.0005,0.0005,0.0006,0.0006,0.0007,0.0007,0.0008,0.0008] },
       "Lakshadweep": { image: "https://tse2.mm.bing.net/th?id=OIP.F-sELXurCRdMc4OI0h1WIgAAAA&pid=Api&P=0&h=180", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
       "Puducherry": { image: "http://www.mapsofworld.com/india/puducherry/puducherry-map.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] } 
    };
     const stateDropdown = document.getElementById("state-dropdown");
  for (const state in statesData) {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateDropdown.appendChild(option);
  }

  function showCarousel(selectedYear) {
    const carousel = document.getElementById("carousel");
    const container = document.getElementById("carousel-container");
    carousel.innerHTML = "";

    const pollution = [2243461160, 2260482790, 2303736300, 2434123800, 2573606310, 2541365980, 2320678660, 2528133480, 2693034100, 2903090750, 3050000000, 3120000000];

    const totalStates = Object.keys(statesData).length;
    const itemWidth = 180;
    carousel.style.width = `${totalStates * itemWidth}px`;

    for (const state in statesData) {
      const stateData = statesData[state];
      const emission = stateData.co2[selectedYear - 2014] * pollution[selectedYear - 2014];

      const stateDiv = document.createElement("div");
      stateDiv.className = "carousel-item";
      stateDiv.innerHTML = `
        <img src="${stateData.image}" alt="${state}">
        <div><strong>${state}</strong></div>
        <div>Year: ${selectedYear}</div>
        <div>CO₂: ${emission.toFixed(2)} Mt</div>
      `;
      carousel.appendChild(stateDiv);
    }

    carousel.style.display = "flex";
    carousel.style.animation = "scroll-left 60s linear infinite";
    container.style.display = "block";
    document.getElementById("state-output-container").style.display = "none";
  }

  document.getElementById("submit-button").addEventListener("click", () => {
    const selectedYear = parseInt(document.getElementById("year-input").value);
    const selectedState = stateDropdown.value;

    if (!isNaN(selectedYear) && !selectedState) {
      showCarousel(selectedYear);
    } else if (!isNaN(selectedYear) && selectedState) {
      const stateData = statesData[selectedState];
      const pollution = [2243461160, 2260482790, 2303736300, 2434123800, 2573606310, 2541365980, 2320678660, 2528133480, 2693034100, 2903090750, 3050000000, 3120000000];
      const emission = stateData.co2[selectedYear - 2014] * pollution[selectedYear - 2014];

      document.getElementById("state-image").src = stateData.image;
      document.getElementById("state-name").textContent = `${selectedState} (${selectedYear})`;
      document.getElementById("state-co2").textContent = `CO₂ Emissions: ${emission.toFixed(2)} Mt`;
      document.getElementById("state-output-container").style.display = "block";
      document.getElementById("carousel-container").style.display = "none";
<<<<<<< HEAD
 }
 else if(selectedYear==2025){
  document.getElementById("state-image").src = statesData.image;
  document.getElementById("state-name").textContent = `${selectedState} (${selectedYear})`;
  document.getElementById("state-co2").textContent = `CO₂ Emissions: ${Em2025} Mt`;
  // Show the selected state's emissions data
  document.getElementById("state-output-container").style.display = "block";
  document.getElementById("carousel-container").style.display = "none";
 }
}})
=======
    } else {
      alert("Please select at least a year.");
    }
  });

  document.getElementById("year-input").addEventListener("input", () => {
    const selectedYear = parseInt(document.getElementById("year-input").value);
    const selectedState = stateDropdown.value;
    if (!selectedState && !isNaN(selectedYear)) {
      showCarousel(selectedYear);
    }
  });
>>>>>>> 400f6705be715121cc483a9132174c08c5344a9a
});
