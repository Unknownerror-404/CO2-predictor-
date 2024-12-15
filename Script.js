



document.addEventListener("DOMContentLoaded", () => {

    // Sample data for states, including CO2 emissions and corresponding images

    const statesData = {

        "Andhra Pradesh": { image: "images/andhra-pradesh.jpg", co2: [0.034,0.035,0.036,0.037,0.038,0.039,0.040,0.041,0.042,0.043,0.044,0.044] },

     "Arunachal Pradesh": { image: "images/arunachal-pradesh.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },

     "Assam": { image: "images/assam.jpg", co2: [0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007] },

     "Bihar": { image: "images/bihar.jpg", co2: [0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.020,0.021,0.021] },

     "Chhattishgarh": { image: "images/chhattisgarh.jpg", co2: [0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03,0.031,0.031] },

     "Delhi": { image: "images/delhi.jpg", co2: [0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.02] },

     "Goa": { image: "images/goa.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },

     "Gujarat": { image: "images/gujarat.jpg", co2: [0.044,0.046,0.048,0.05,0.052,0.054,0.056,0.058,0.06,0.062,0.064,0.064] },

    "Haryana": { image: "images/haryana.jpg", co2: [0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022,0.023,0.023] },

    "Himachal Pradesh": { image: "images/himachal-pradesh.jpg", co2: [0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002] },

    "Jharkhand": { image: "images/jharkhand.jpg", co2: [0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.020,0.021,0.022,0.022] },

    "Karnataka": { image: "images/karnataka.jpg", co2: [0.031,0.033,0.035,0.037,0.039,0.041,0.043,0.045,0.047,0.049,0.051,0.051] },

    "Kerala": { image: "images/kerala.jpg", co2: [0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.02] },

    "Madhya Pradesh": { image: "images/madhya-pradesh.jpg", co2: [0.027,0.029,0.031,0.033,0.035,0.037,0.039,0.041,0.043,0.045,0.047,0.047] },

    "Maharashtra": { image: "images/maharashtra.jpg", co2: [0.071,0.075,0.079,0.083,0.087,0.091,0.095,0.099,0.103,0.107,0.11,0.11] },

    "Manipur": { image: "images/manipur.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },

    "Meghalaya": { image: "images/meghalaya.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },

    "Mizoram": { image: "images/mizoram.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },

    "Nagaland": { image: "images/nagaland.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },

    "Odisha": { image: "images/odisha.jpg", co2: [0.017,0.018,0.019,0.020,0.21,0.022,0.023,0.024,0.025,0.026,0.027,0.027] },

    "Punjab": { image: "images/punjab.jpg", co2: [0.014,0.015,0.016,0.017,0.018,0.019,0.020,0.021,0.022,0.023,0.024,0.024] },

    "Rajasthan": { image: "images/rajasthan.jpg", co2: [0.026,0.028,0.030,0.032,0.034,0.036,0.038,0.040,0.042,0.044,0.046,0.048] },

    "Sikkim": { image: "images/sikkim.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },

    "Tamil Nadu": { image: "images/tamil-nadu.jpg", co2: [0.036,0.038,0.040,0.042,0.044,0.046,0.048,0.05,0.052,0.054,0.056,0.056] },

    "Telangana": { image: "images/telangana.jpg", co2: [0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.030,0.031,0.031] },

    "Tripura": { image: "images/tripura.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },

    "Uttar Pradesh": { image: "images/uttar-pradesh.jpg", co2: [0.045,0.048,0.051,0.054,0.057,0.06,0.063,0.066,0.069,0.072,0.075,0.075] },

    "Uttrakhand": { image: "images/uttrakhand.jpg", co2: [0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002] },

    "West Bengal": { image: "images/west-bengal.jpg", co2: [0.026,0.028,0.030,0.032,0.034,0.036,0.038,0.04,0.042,0.044,0.046,0.046] },

    "Andaman and Nicobar Islands": { image: "images/andaman.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },

    "Chandigarh": { image: "images/chandigarh.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },

    "Dadra and Nagar Haveli and Daman and Diu": { image: "images/daman-and-diu.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },

    "Jammu and Kashmir": { image: "images/jammu-and-kashmir.jpg", co2: [,0.003,0.003,0.003,0.003,0.003,0.003,0.004,0.004,0.004,0.004,0.005,0.005] },

    "Ladakh": { image: "images/ladakh.jpg", co2: [0.0003,0.0003,0.0004,0.0004,0.0005,0.0005,0.0006,0.0006,0.0007,0.0007,0.0008,0.0008] },

    "Lakshadweep": { image: "images/lakshadweep.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },

    "Puducherry": { image: "images/puducherry.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] } 

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

        if (isNaN(selectedYear) || selectedYear < 2014 || selectedYear > 2024) {

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

        const emissions = stateData.co2[selectedYear - 2014];



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

            const emission = stateData.co2[selectedYear - 2014];

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



    // Event listener for the Prediction button

    document.getElementById("prediction-button").addEventListener("click", () => {

        const selectedState = stateDropdown.value;

        const selectedYear = parseInt(document.getElementById("year-input").value);



        if (!selectedState || isNaN(selectedYear)) {

            alert("Please select a state and a valid year to predict.");

            return;

        }



        // Predict CO2 emissions for the next year based on a simple model (average increase)

        const stateData = statesData[selectedState];

        if (!stateData) {

            alert("State data not available for prediction.");

            return;

        }



        // Calculate the average yearly increase in CO₂ emissions

        const emissions = stateData.co2;

        const increasePerYear = (emissions[emissions.length - 1] - emissions[0]) / (emissions.length - 1);



        // Predict the emission for the next year (linear model)

        const predictedEmission = emissions[emissions.length - 1] + increasePerYear;



        // Display the predicted CO2 emissions

        alert(`Predicted CO₂ emissions for ${selectedState} in ${selectedYear + 1}: ${predictedEmission.toFixed(2)} Mt`);

    });

});

      
