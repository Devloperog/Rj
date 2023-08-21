document.addEventListener("DOMContentLoaded", function() {
    var apiKey = '5b3ce3597851110001cf624870a257357b3645ef99ccbe3215ef4ce3';
    var apiUrl = 'https://api.openrouteservice.org/v2/directions/driving-car';

    document.getElementById("calculateButton").addEventListener("click", function() {
        var location1 = document.getElementById("location1").value;
        var location2 = document.getElementById("location2").value;

        if (location1 && location2) {
            var fullUrl = `${apiUrl}?api_key=${apiKey}&start=${location1},Rajasthan,India&end=${location2},Rajasthan,India`;

            fetch(fullUrl)
                .then(response => response.json())
                .then(data => {
                    var distance = data.features[0].properties.segments[0].distance;
                    displayResult(distance);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            displayResult("Please select both locations.");
        }
    });

    function displayResult(distance) {
        var resultDiv = document.getElementById("result");
        resultDiv.textContent = `Distance between the locations: ${distance.toFixed(2)} meters`;
    }
});
