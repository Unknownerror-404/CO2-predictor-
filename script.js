// Define data for states and CO2 percentages
const data = {
    "Andhra Pradesh": { image: "images/andhra-pradesh.jpg", co2: [0.034,0.035,0036,0.037,0.038,0.039,0.040,0.041,0.042,0.043] },
    "Arunachal Pradesh": { image: "images/arunachal-pradesh.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
    "Assam": { image: "images/assam.jpg", co2: [0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007,0.007] },
    "Bihar": { image: "images/bihar.jpg", co2: [0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.020] },
    "Chhattishgarh": { image: "images/chhattisgarh.jpg", co2: [0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.03] },
    "Delhi": { image: "images/delhi.jpg", co2: [0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019] },
    "Goa": { image: "images/goa.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
    "Gujarat": { image: "images/gujarat.jpg", co2: [0.044,0.046,0.048,0.05,0.052,0.054,0.056,0.058,0.06,0.062] },
    "Haryana": { image: "images/haryana.jpg", co2: [0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.02,0.021,0.022] },
    "Himachal Pradesh": { image: "images/himachal-pradesh.jpg", co2: [0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002] },
    "Jharkhand": { image: "images/jharkhand.jpg", co2: [0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019,0.020,0.021] },
    "Karnataka": { image: "images/karnataka.jpg", co2: [0.031,0.033,0.035,0.037,0.039,0.041,0.043,0.045,0.047,0.049] },
    "Kerala": { image: "images/kerala.jpg", co2: [0.01,0.011,0.012,0.013,0.014,0.015,0.016,0.017,0.018,0.019] },
    "Madhya Pradesh": { image: "images/madhya-pradesh.jpg", co2: [0.027,0.029,0.031,0.033,0.035,0.037,0.039,0.041,0.043,0.045] },
    "Maharashtra": { image: "images/maharashtra.jpg", co2: [0.071,0.075,0.079,0.083,0.087,0.091,0.095,0.099,0.103,0.107] },
    "Manipur": { image: "images/manipur.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
    "Meghalaya": { image: "images/meghalaya.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
    "Mizoram": { image: "images/mizoram.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
    "Nagaland": { image: "images/nagaland.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
    "Odisha": { image: "images/odisha.jpg", co2: [0.017,0.018,0.019,0.020,0.21,0.022,0.023,0.024,0.025,0.026] },
    "Punjab": { image: "images/punjab.jpg", co2: [0.014,0.015,0.016,0.017,0.018,0.019,0.020,0.021,0.022,0.023] },
    "Rajasthan": { image: "images/rajasthan.jpg", co2: [0.026,0.028,0.030,0.032,0.034,0.036,0.038,0.040,0.042,0.044] },
    "Sikkim": { image: "images/sikkim.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
    "Tamil Nadu": { image: "images/tamil-nadu.jpg", co2: [0.036,0.038,0.040,0.042,0.044,0.046,0.048,0.05,0.052,0.054] },
    "Telangana": { image: "images/telangana.jpg", co2: [0.021,0.022,0.023,0.024,0.025,0.026,0.027,0.028,0.029,0.030] },
    "Tripura": { image: "images/tripura.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
    "Uttar Pradesh": { image: "images/uttar-pradesh.jpg", co2: [0.045,0.048,0.051,0.054,0.057,0.06,0.063,0.066,0.069,0.072] },
    "Uttrakhand": { image: "images/uttrakhand.jpg", co2: [0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002,0.002] },
    "West Bengal": { image: "images/west-bengal.jpg", co2: [0.026,0.028,0.030,0.032,0.034,0.036,0.038,0.04,0.042,0.044] },
    "Andaman and Nicobar Islands": { image: "images/andaman.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
    "Chandigarh": { image: "images/chandigarh.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
    "Dadra and Nagar Haveli and Daman and Diu": { image: "images/daman-and-diu.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
    "Jammu and Kashmir": { image: "images/jammu-and-kashmir.jpg", co2: [,0.003,0.003,0.003,0.003,0.003,0.003,0.004,0.004,0.004,0.004] },
    "Ladakh": { image: "images/ladakh.jpg", co2: [0.0003,0.0003,0.0004,0.0004,0.0005,0.0005,0.0006,0.0006,0.0007,0.0007] },
    "Lakshadweep": { image: "images/lakshadweep.jpg", co2: [0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001,0.0001] },
    "Puducherry": { image: "images/puducherry.jpg", co2: [0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001,0.001] },
};

// Populate dropdown dynamically
const stateDropdown = document.getElementById("state-dropdown");
Object.keys(data).forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateDropdown.appendChild(option);
});

// Display selected state data based on user input
document.getElementById("submit-button").addEventListener("click", function () {
    const year = document.getElementById("year-input").value;
    const state = document.getElementById("state-dropdown").value;

    if (year && state) {
        displayStateData(state, year);
    } else if (year) {
        startCarousel(year);
    } else {
        alert("Please select a year.");
    }
});

// Calculate future CO2 emissions
document.getElementById("future-button").addEventListener("click", function () {
    const year = document.getElementById("year-input").value;
    const state = document.getElementById("state-dropdown").value;

    if (year && state) {
        calculateFutureCO2(state, year);
    } else {
        alert("Please select both a state and a year.");
    }
});

// Display state data for a selected year
function displayStateData(state, year) {
    const stateData = data[state];
    const co2Index = year - 2014;
    const pollution=[2243461160,2260482790,2303736300,2434123800,2573606310,2541365980,1320678660,2528133480,2693034100,2903090750];  //Value holder for all yearly pollution values.      
    const CO2=pollution[year - 2014]*stateData.co2[co2Index];
    if (stateData && co2Index >= 0 && co2Index < stateData.co2.length) {
        document.getElementById("state-image").src = stateData.image;
        document.getElementById("state-name").textContent = state;
        document.getElementById("state-co2").textContent = `CO2:${CO2} metric tons`;
        document.getElementById("state-output-container").style.display = "block";
        document.getElementById("carousel-container").style.display = "none";
    } else {
        alert("Data unavailable.");
    }
}

// Start carousel for displaying states with CO2 emissions
function startCarousel(year) {
    const carouselContainer = document.getElementById("carousel");
    carouselContainer.innerHTML = ""; // Clear existing items

    for (const [state, info] of Object.entries(data)) {
        const co2Index = year - 2014;

        if (co2Index >= 0 && co2Index < info.co2.length) {
            const carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");

            const img = document.createElement("img");
            img.src = info.image;

            const name = document.createElement("div");
            name.classList.add("carousel-text");
            name.textContent = state;

            const co2 = document.createElement("div");
            co2.classList.add("co2-text");
            co2.textContent = `CO2: ${info.co2[co2Index]}%`;

            // Add elements to the carousel item
            carouselItem.appendChild(img);
            carouselItem.appendChild(name);
            carouselItem.appendChild(co2);

            // Add carousel item to the container
            carouselContainer.appendChild(carouselItem);
        }
    }

    // Show the carousel
    document.getElementById("carousel-container").style.display = "block";
    document.getElementById("state-output-container").style.display = "none";
}

// Calculate future CO2 based on some logic (for example, linear growth)
function calculateFutureCO2(state, year) {
    const stateData = data[state];
    const futureCO2 = stateData.co2[0] * Math.pow(1.02, year - 2025); // Example future calculation

    if (stateData) {
        alert(`Future CO2 for ${state} in ${year}: ${futureCO2.toFixed(2)}%`);
    }
}
