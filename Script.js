
document.addEventListener("DOMContentLoaded", () => {
    // Sample data for states, including CO2 emissions and corresponding images
    const statesData = {
      "Andhra Pradesh": { image: "https://imgv2-2-f.scribdassets.com/img/document/633149851/original/46265b9f43/1682089074?v=1", co2: [0.034,0.035,0.036,0.037,0.038,0.039,0.040,0.041,0.042,0.043,0.044,0.044] },
      "Arunachal Pradesh": { image: "https://tse1.mm.bing.net/th?id=OIP.BKMBi-us0FQPy7gaJ4CmMwHaEg&pid=Api&P=0&h=180", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
      "Assam": { image: "https://www.mapsofindia.com/ci-moi-images/answers/2019/12/map-of-assam.jpg", co2: [0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007] },
      "Bihar": { image: "https://w7.pngwing.com/pngs/853/733/png-transparent-map-geography-bihar-bihari-portrait.png", co2: [0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.020,0.021,0.021] },
      "Chhattishgarh": { image: "http://www.mapsofworld.com/india/chattisgarh/chattisgarh.jpg", co2: [0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.031] },
      "Delhi": { image: "https://im.indiatimes.in/content/2015/Nov/delhi_1447758195.png", co2: [0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.02] },
      "Goa": { image: "https://i1.wp.com/www.romanticbug.com/wp-content/uploads/2016/04/goa-map.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
      "Gujarat": { image: "https://wallpapercave.com/wp/wp8925192.jpg", co2: [0.044,0.046,0.048,0.05,0.052,0.054,0.056,0.058,0.06,0.062,0.064,0.064] },
       "Haryana": { image: "https://www.burningcompass.com/countries/india/maps/haryana-division-map.jpg", co2: [0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.023] },
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
       "West Bengal": { image: "https://www.burningcompass.com/countries/india/maps/west-bengal-district-map.jpg", co2: [0.026,0.028,0.030,0.032,0.034,0.036,0.038,0.04,0.042,0.044,0.046,0.046] },
       "Andaman and Nicobar Islands": { image: "https://www.andamansguide.com/wp-content/uploads/2016/08/Andaman-Tourist-Map.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
       "Chandigarh": { image: "https://1.bp.blogspot.com/-CnMKCzDaPqI/Wb4mnGOHgiI/AAAAAAAADQI/fr0EQJNUIXkZ59kdBE4B2XtAWhFrUuqlwCLcBGAs/s1600/chandigarh-map.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
       "Dadra and Nagar Haveli and Daman and Diu": { image: "https://img.jagranjosh.com/imported/images/E/GK/dadra-and-nagar-haveli-and-daman-and-diu-map.webpu.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
       "Jammu and Kashmir": { image: "https://image.shutterstock.com/z/stock-vector-jammu-and-kashmir-map-district-map-of-jammu-and-kashmir-in-district-map-of-jammu-and-kashmir-1970895275.jpg", co2: [,0.003,0.003,0.003,0.003,0.003,0.003,0.004,0.004,0.004,0.004,0.005,0.005] },
       "Ladakh": { image: "https://www.lehladakhtourism.com/about-ladakh/images/ladakh-tourist-map.jpg", co2: [0.0003,0.0003,0.0004,0.0004,0.0005,0.0005,0.0006,0.0006,0.0007,0.0007,0.0008,0.0008] },
       "Lakshadweep": { image: "https://tse2.mm.bing.net/th?id=OIP.F-sELXurCRdMc4OI0h1WIgAAAA&pid=Api&P=0&h=180", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
       "Puducherry": { image: "http://www.mapsofworld.com/india/puducherry/puducherry-map.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] } 
    };
    // Populate the state dropdown dynamically
    const stateDropdown = document.getElementById("state-dropdown");
    for (const state in statesData) {
        const option = document.createElement("option");
        option.value = state;
        option.textContent = state;
        stateDropdown.appendChild(option);
    }
    // Function to display state data for a selected year
    document.getElementById("submit-button").addEventListener("click", function () {
        const selectedYear = parseInt(document.getElementById("year-input").value);
        const selectedState = stateDropdown.value;
        // Validate year input
        if (isNaN(selectedYear) || selectedYear < 2014 || selectedYear > 2025) {
            alert("Please select a valid year between 2014 and 2024.");
            return;
        }
        // Validate state selection
        if (!selectedState) {
            alert("Please select a state.");
            return;
        }
        // Get CO2 emissions for the selected state and year
        const stateData = statesData[selectedState];
        const pollution = [2243461160, 2260482790, 2303736300, 2434123800, 2573606310, 2541365980, 2320678660, 2528133480, 2693034100, 2903090750];
        let emissions = stateData.co2[selectedYear - 2014]*pollution[selectedYear - 2014];
        // Update output
        document.getElementById("state-image").src = stateData.image;
        document.getElementById("state-name").textContent = `${selectedState} (${selectedYear})`;
        document.getElementById("state-co2").textContent = `CO₂ Emissions: ${emissions} Mt`;
        // Show the selected state's emissions data
        document.getElementById("state-output-container").style.display = "block";
        document.getElementById("carousel-container").style.display = "none";
    });
    // Function to show CO₂ data for all states in a carousel if no state is selected
    function showCarousel(selectedYear) {
        const carousel = document.getElementById("carousel");
        carousel.innerHTML = ""; // Clear previous carousel items
        for (const state in statesData) {
            const stateData = statesData[state];
            const pollution = [2243461160, 2260482790, 2303736300, 2434123800, 2573606310, 2541365980, 2320678660, 2528133480, 2693034100, 2903090750];
            const emission = stateData.co2[selectedYear - 2014]*pollution[selectedYear - 2014];
            const stateDiv = document.createElement("div");
            stateDiv.className = "carousel-item";
            stateDiv.innerHTML = `
                <img src="${stateData.image}" alt="${state} Image">
                <div>${state}</div>
                <div>CO₂ Emissions for ${selectedYear}: ${emission} Mt</div>
            `;
            carousel.appendChild(stateDiv);
        }
        document.getElementById("state-output-container").style.display = "none";
        document.getElementById("carousel-container").style.display = "block";
    }



    // Event listener for the state dropdown to show data in carousel if no state is selected
    stateDropdown.addEventListener("change", () => {
        const selectedYear = parseInt(document.getElementById("year-input").value);
        const selectedState = stateDropdown.value;
        if (!selectedState && !isNaN(selectedYear)) {
            showCarousel(selectedYear);
        }
    });
     // Event listener for the year input to show data in carousel if no state is selected
     document.getElementById("year-input").addEventListener("input", () => {
        const selectedYear = parseInt(document.getElementById("year-input").value);
        const selectedState = stateDropdown.value;
        if (!selectedState && !isNaN(selectedYear)) {
            showCarousel(selectedYear);
        }
    });
 // Event listener for the Prediction button
    document.getElementById("future-button").addEventListener("click", () => {
        const selectedState = stateDropdown.value;
        const iterations = 250;
        const selectedYear = parseInt(document.getElementById("year-input").value);
        if (!selectedState || isNaN(selectedYear)) {
            alert("Please select a state and a valid year to predict.");
            return;
        }

        class Matrix {
            /**
             * Creates a new Matrix object to store data.
             * @constructor
             * @param {Number} rows - The number of rows in the matrix.
             * @param {Number} cols - The number of columns in the matrix.
             */
          
            constructor(rows, cols) {
              if (isNaN(rows) || isNaN(cols)) {
                throw new MatrixTypeError("constructor", "Number and Number");
              }
          
              rows = Math.floor(rows);
              cols = Math.floor(cols);
          
              if (rows <= 0 || cols <= 0) {
                throw new Error("Invalid values in Matrix constructor, rows and cols must be greater than or equal to 1");
              }
          
              this.rows = rows;
              this.cols = cols;
              this.matrix = [];
          
              for (let i = 0; i < rows; i++) {
                this.matrix[i] = [];
          
                for (let j = 0; j < cols; j++) {
                  this.matrix[i][j] = 0;
                }
              }
            }
          
            /**
             * Randomizes the elements of the matrix with floating point numbers ranging from min to max.
             * @param {Number} [min=0] - The minimum value of elements (inclusive).
             * @param {Number} [max=1] - The maximum value of elements (exclusive).
             */
            randomize(min, max) {
              if (isNaN(min)) {
                min = 0;
                max = 1;
              } else if (isNaN(max)) {
                max = min;
                min = 0;
              }
          
              for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                  this.matrix[i][j] = Math.random() * (max - min) + min;
                }
              }
            }
          
            /**
             * Applies a function to all elements of the matrix.
             * @param {function} func - The function to be applied to the elements.
             */
            map(func) {
              if (!(func instanceof Function)) {
                throw new MatrixTypeError("map", "function");
              }
              for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                  let val = this.matrix[i][j];
                  this.matrix[i][j] = func(val, i, j);
                }
              }
            }
          
            /**
             * Converts this matrix to a 1-D array by going from left to right for each row.
             * @returns {Number[]} result - A 1-D array containing the elements of the matrix.
             */
            toArray() {
              let result = [];
          
              for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                  result.push(this.matrix[i][j]);
                }
              }
          
              return result;
            }
          
            addElementwise(m) {
              if (!(m instanceof Matrix)) {
                throw new MatrixTypeError("addElementwise", "Matrix");
              }
              if (m.rows !== this.rows && m.cols !== this.cols) {
                throw new DimensionError(false, "addElementwise", this, m);
              }
              for (let i = 0; i < m.rows; i++) {
                for (let j = 0; j < m.cols; j++) {
                  let value = this.matrix[i][j] + m.matrix[i][j];
                  this.matrix[i][j] = value;
                }
              }
            }
          
            addScalar(scalar) {
              for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                  let value = this.matrix[i][j] + scalar;
                  this.matrix[i][j] = value;
                }
              }
            }
          
            subtractElementwise(m) {
              if (!(m instanceof Matrix)) {
                throw new MatrixTypeError("subtractElementwise", "Matrix");
              }
              if (m.rows !== this.rows && m.cols !== this.cols) {
                throw new DimensionError(false, "subtractElementwise", this, m);
              }
              for (let i = 0; i < m.rows; i++) {
                for (let j = 0; j < m.cols; j++) {
                  let value = this.matrix[i][j] - m.matrix[i][j];
                  this.matrix[i][j] = value;
                }
              }
            }
          
            subtractScalar(scalar) {
              for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                  let value = this.matrix[i][j] - scalar;
                  this.matrix[i][j] = value;
                }
              }
            }
          
            multiplyElementwise(m) {
              if (!(m instanceof Matrix)) {
                throw new MatrixTypeError("multiplyElementwise", "Matrix");
              }
              if (m.rows !== this.rows && m.cols !== this.cols) {
                throw new DimensionError(false, "multiplyElementwise", this, m);
              }
              for (let i = 0; i < m.rows; i++) {
                for (let j = 0; j < m.cols; j++) {
                  let value = this.matrix[i][j] * m.matrix[i][j];
                  this.matrix[i][j] = value;
                }
              }
            }
          
            multiplyScalar(scalar) {
              for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                  let value = this.matrix[i][j] * scalar;
                  this.matrix[i][j] = value;
                }
              }
            }
          
            static map(m, func) {
              if (!(m instanceof Matrix && func instanceof Function)) {
                throw new MatrixTypeError("map", "Matrix and function");
              }
              let result = new Matrix(m.rows, m.cols);
          
              for (let i = 0; i < m.rows; i++) {
                for (let j = 0; j < m.cols; j++) {
                  let val = m.matrix[i][j];
                  result.matrix[i][j] = func(val, i, j);
                }
              }
          
              return result;
            }
          
            static fromArray(array) {
              if (!Array.isArray(array)) {
                throw new MatrixTypeError("fromArray", "array");
              }
              let result = new Matrix(array.length, 1);
          
              for (let i = 0; i < array.length; i++) {
                result.matrix[i][0] = array[i];
              }
          
              return result;
            }
          
            /**
             * Converts the specified matrix to a 1-D array by going from left to right for each row of the matrix.
             * @param {Matrix} m - The matrix object to be converted to array.
             * @returns {Number[]} result - A 1-D array containing the elements of the matrix m.
             * @static
             */
            static toArray(m) {
              if (!(m instanceof Matrix)) {
                throw new MatrixTypeError("toArray", "Matrix");
              }
          
              let result = [];
          
              for (let i = 0; i < m.rows; i++) {
                for (let j = 0; j < m.cols; j++) {
                  result.push(m.matrix[i][j]);
                }
              }
          
              return result;
            }
          
            static addElementwise(a, b) {
              if (!(a instanceof Matrix && b instanceof Matrix)) {
                throw new MatrixTypeError("addElementwise", "Matrix and Matrix");
              }
          
              if (a.rows !== b.rows || a.cols !== b.cols) {
                throw new DimensionError(true, "addElementwise", a, b);
              }
          
              let result = new Matrix(a.rows, a.cols);
          
              for (let i = 0; i < a.rows; i++) {
                for (let j = 0; j < a.cols; j++) {
                  result.matrix[i][j] = a.matrix[i][j] + b.matrix[i][j];
                }
              }
          
              return result;
            }
          
            static addScalar(matrix, scalar) {
              if (!(matrix instanceof Matrix)) {
                throw new MatrixTypeError("addScalar", "Matrix");
              }
          
              let result = new Matrix(matrix.rows, matrix.cols);
          
              for (let i = 0; i < matrix.rows; i++) {
                for (let j = 0; j < matrix.cols; j++) {
                  result.matrix[i][j] = Number(matrix.matrix[i][j]) + Number(scalar);
                }
              }
          
              return result;
            }
          
            static subtractElementwise(a, b) {
              if (!(a instanceof Matrix && b instanceof Matrix)) {
                throw new MatrixTypeError("subtractElementwise", "Matrix and Matrix");
              }
          
              if (a.rows !== b.rows || a.cols !== b.cols) {
                throw new DimensionError(true, "subtractElementwise", a, b);
              }
          
              let result = new Matrix(a.rows, a.cols);
          
              for (let i = 0; i < a.rows; i++) {
                for (let j = 0; j < a.cols; j++) {
                  result.matrix[i][j] = a.matrix[i][j] - b.matrix[i][j];
                }
              }
          
              return result;
            }
          
            static subtractScalar(matrix, scalar) {
              if (!(matrix instanceof Matrix)) {
                throw new MatrixTypeError("subtractScalar", "Matrix");
              }
          
              let result = new Matrix(matrix.rows, matrix.cols);
          
              for (let i = 0; i < matrix.rows; i++) {
                for (let j = 0; j < matrix.cols; j++) {
                  result.matrix[i][j] = matrix.matrix[i][j] - scalar;
                }
              }
          
              return result;
            }
          
            static multiplyElementwise(a, b) {
              if (!(a instanceof Matrix && b instanceof Matrix)) {
                throw new MatrixTypeError("multiplyElementwise", "Matrix and Matrix");
              }
          
              if (a.rows !== b.rows || a.cols !== b.cols) {
                throw new DimensionError(true, "multiplyElementwise", a, b);
              }
          
              let result = new Matrix(a.rows, a.cols);
          
              for (let i = 0; i < a.rows; i++) {
                for (let j = 0; j < a.cols; j++) {
                  result.matrix[i][j] = a.matrix[i][j] * b.matrix[i][j];
                }
              }
          
              return result;
            }
          
            static multiplyScalar(matrix, scalar) {
              if (!(matrix instanceof Matrix)) {
                throw new MatrixTypeError("multiplyScalar", "Matrix");
              }
          
              let result = new Matrix(matrix.rows, matrix.cols);
          
              for (let i = 0; i < matrix.rows; i++) {
                for (let j = 0; j < matrix.cols; j++) {
                  result.matrix[i][j] = matrix.matrix[i][j] * scalar;
                }
              }
          
              return result;
            }
            static tanh(a){
            let result=Math.tanh(a)
            return result;
            }
            /**
             * Multiplies two matrices according to the rules of matrix product. The number of columns of a must be equal to the number of rows of b.
             * @param {Matrix} a - First matrix object.
             * @param {Matrix} b - Second matrix object.
             * @returns {Matrix} result - The resultant matrix having number of rows equal to a and number of columns equal to b.
             * @static
             */
            static matrixProduct(a, b) {
              if (!(a instanceof Matrix && b instanceof Matrix)) {
                throw new MatrixTypeError("matrixProduct", "Matrix and Matrix");
              }
              if (a.cols !== b.rows) {
                throw new Error("Invalid matrix dimensions in matrixProduct, cols of a must be equal to rows of b");
              }
          
              let result = new Matrix(a.rows, b.cols);
          
              for (let i = 0; i < result.rows; i++) {
                for (let j = 0; j < result.cols; j++) {
                  let sum = 0;
          
                  for (let k = 0; k < a.cols; k++) {
                    sum += a.matrix[i][k] * b.matrix[k][j];
                  }
          
                  result.matrix[i][j] = sum;
                }
              }
          
              return result;
            }
          
            static transpose(matrix) {
              if (!(matrix instanceof Matrix)) {
                throw new MatrixTypeError("transpose", "Matrix");
              }
              let result = new Matrix(matrix.cols, matrix.rows);
          
              for (let i = 0; i < matrix.rows; i++) {
                for (let j = 0; j < matrix.cols; j++) {
                  result.matrix[j][i] = matrix.matrix[i][j];
                }
              }
          
              return result;
            }
          }
            // Neural network training function for 2024
    function trainModel(iterations=250) {
    let sum = new Matrix(1, 1);
    let target;
    let error;
    let rates_deviation = [0.037879514, 0.036436408, 0.037157961];
    let lr = 0.05;  // learning rate
    let r;
    let d_weights = new Matrix(2, 1);
    let gradient = new Matrix(2, 1);
    let delta_weight;
    // Set input and initial weights for training
    let input= new Matrix(1,2)
    input.matrix[0][0]= 0.082;
    input.matrix[0][1]= 0.072;
                                   ;  // Example GDP 2023
    let weight=Matrix.fromArray([[0.0085],
                                  [0.0078]]);
    let a=new Matrix(weight.rows,weight.cols); // Example financial growth 2023
    let biasMatrix = new Matrix(1, 1);
        for (let i = 0; i < 1; i++) {
            for (let j = 0; j < 1; j++) {
                biasMatrix.matrix[i][j] = 0.01;
            }
        }
    console.log(input);
    
    for (let iterationsCompleted = 0; iterationsCompleted < iterations; iterationsCompleted++) {
        // Compute gradients (derivative of tanh(x) is 1 - tanh(x)^2)
        for (let i = 0; i < input.rows; i++) {
            for (let j = 0; j < input.cols; j++) {
                gradient.matrix[i][j] = 1 - Math.pow(Math.tanh(input.matrix[i][j]), 2);  // derivative of tanh
            }
        }
       
        let m3 = Matrix.matrixProduct(input, weight);
        console.log(weight.matrix);
        // Ensure biasMatrix has the same dimensions as m3
    
        sum = Matrix.addElementwise(m3, biasMatrix); 
        console.log(sum); // Add bias properly

        r = Matrix.tanh(sum.matrix[0][0]);
        console.log(r);
        // Set target value based on the rates deviation
        if (r > rates_deviation[0]) {
            target = rates_deviation[0];
        } else if (r < rates_deviation[1]) {
            target = rates_deviation[1];
        } else {
            target = rates_deviation[2];
        }
    
        error = target - r;
        // Compute d_weights and update weight
        for (let i = 0; i < input.rows; i++) {
            for (let j = 0; j < input.cols; j++) {
                d_weights.matrix[i][j] = lr * error * input.matrix[i][j] * gradient.matrix[i][j];
            }
        }
        delta_weight =Matrix.transpose(d_weights);
        console.log(delta_weight.matrix[0][0]);

       a = Matrix.addScalar(weight, d_weights.matrix[0][0]);
        console.log(a.matrix);
    }
    let u_inputs=Matrix.matrixProduct(input,a);
    let u_biases=Matrix.addScalar(u_inputs, biasMatrix.matrix[0][0]);
    r=Math.tanh(u_biases.matrix[0][0])*((Math.random()*(0.037879514-0.037157961))+0.03005);
    return r;
 }
    // Function to train the model for year 2025
function trainModelFor2025(iterations=250) {
  let sum = new Matrix(1, 1);
  let target;
  let error;
  let rates_deviation = [0.037879514, 0.036436408, 0.037157961];
  let lr = 0.05;  // learning rate
  let r;
  let d_weights = new Matrix(2, 1);
  let gradient = new Matrix(2, 1);
  let delta_weight;
  // Set input and initial weights for training
  let input= new Matrix(1,2)
  input.matrix[0][0]=0.082;
  input.matrix[0][1]=0.072;
                                 ;  // Example GDP 2023
  let weight=Matrix.fromArray([[0.0085],
                                [0.0078]]);
  let a=new Matrix(weight.rows,weight.cols); // Example financial growth 2023
  let biasMatrix = new Matrix(1, 1);
      for (let i = 0; i < 1; i++) {
          for (let j = 0; j < 1; j++) {
              biasMatrix.matrix[i][j] = 0.01;
          }
      }
  console.log(input);
  
  for (let iterationsCompleted = 0; iterationsCompleted < iterations; iterationsCompleted++) {
      // Compute gradients (derivative of tanh(x) is 1 - tanh(x)^2)
      for (let i = 0; i < input.rows; i++) {
          for (let j = 0; j < input.cols; j++) {
              gradient.matrix[i][j] = 1 - Math.pow(Math.tanh(input.matrix[i][j]), 2);  // derivative of tanh
          }
      }
     
      let m3 = Matrix.matrixProduct(input, weight);
      console.log(weight.matrix);
      // Ensure biasMatrix has the same dimensions as m3
  
      sum = Matrix.addElementwise(m3, biasMatrix); 
      console.log(sum); // Add bias properly

      r = Matrix.tanh(sum.matrix[0][0]);
      console.log(r);
      // Set target value based on the rates deviation
      if (r > rates_deviation[0]) {
          target = rates_deviation[0];
      } else if (r < rates_deviation[1]) {
          target = rates_deviation[1];
      } else {
          target = rates_deviation[2];
      }
      error = target - r;
      // Compute d_weights and update weight
      for (let i = 0; i < input.rows; i++) {
          for (let j = 0; j < input.cols; j++) {
              d_weights.matrix[i][j] = lr * error * input.matrix[i][j] * gradient.matrix[i][j];
          }
      }
          delta_weight =Matrix.transpose(d_weights);
          console.log(delta_weight.matrix[0][0]);

          a = Matrix.addScalar(weight, d_weights.matrix[0][0]);
          console.log(a.matrix);
       }
  let u_inputs=Matrix.matrixProduct(input,a);
  let u_biases=Matrix.addScalar(u_inputs, biasMatrix.matrix[0][0]);
  r=Math.tanh(u_biases.matrix[0][0])*((Math.random()*(0.037879514-0.037157961))+0.03005);
  return r;
 }
 let r2024=trainModel(iterations);
 let r2025=trainModelFor2025(iterations);
 let Em2024 = displayStateDataFor2024(selectedState, selectedYear);
 let Em2025 = displayStateDataFor2025(selectedState, selectedYear);
  // Display CO2 Prediction for 2024 in the output
 function displayStateDataFor2024(state, year) {
    const stateData = statesData[state];
    const co2Index = year - 2014;
    const pollution = [2243461160, 2260482790, 2303736300, 2434123800, 2573606310, 2541365980, 2320678660, 2528133480, 2693034100, 2903090750]; // Value holder for all yearly pollution values.
    const CO2 =pollution[9] * Math.exp(r2024);
    return CO2;
 }
  // Display CO2 Prediction for 2025 in the output
 function displayStateDataFor2025(state, year) {
    const stateData = statesData[state];
    const co2Index = year - 2014;
    const pollution = [2243461160, 2260482790, 2303736300, 2434123800, 2573606310, 2541365980, 1320678660, 2528133480, 2693034100, 2903090750]; // Value holder for all yearly pollution values.
    const CO2024 = pollution[9] * Math.exp(r2025);
    const CO2 =CO2024*1.002;
    return CO2;
 }
 if (selectedYear && selectedState) {
    if (selectedYear == 2024) {
               // Handle training for 2024
              
               console.log("Training for 2024...");
               console.log(`Prediction for 2024 CO2 emissions: ${Em2024}`);
    } else if (selectedYear == 2025) {
               // Handle training for 2025
              
               console.log("Training for 2025...");
               console.log(`Prediction for 2025 CO2 emissions: ${Em2025}`);
           } else {
               alert("Please select a valid year (2024 or 2025).");
           }
       } else {
           alert("Please select both a state and a year.");
       }
 if(selectedYear==2024){
    if (statesData && statesData.co2 >= 0 && statesData.co2 < statesData.co2.length) {
      document.getElementById("state-image").src = statesData.image;
      document.getElementById("state-name").textContent = `${selectedState} (${selectedYear})`;
      document.getElementById("state-co2").textContent = `CO₂ Emissions: ${Em2024} Mt`;
      // Show the selected state's emissions data
      document.getElementById("state-output-container").style.display = "block";
      document.getElementById("carousel-container").style.display = "none";
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
});
