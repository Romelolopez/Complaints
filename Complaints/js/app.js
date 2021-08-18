async function getData(borough) {
    let inputV = document.getElementById("input").value

    if (inputV.length == 0){
        inputV = 10
    }

    let response = await $.ajax({
        //ue this link to get data. borough get the value from whatever borough is clicked
        url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${borough}&agency=NYPD`,
        type: "GET",
        data: {
        //Set limit with whatever user inputs
        "$limit" : inputV,
        //Token to get data
        "$$app_token" : "0YWE9IQIaQRsvBdKTzPawHHf3"
        }
    }).done(function(data){
        let output = "";
        //For each statement to go through the data
        data.forEach(post => {
            //Add this to the output variable
            output += `
            <div class="menu">
            <h3>${post.descriptor}</h3>
            <div>
            <details>
                <summary class="dets">Description</summary>
                ${post.resolution_description}
            </details>
            </div>
            
            </div>
            `
        });
        //<button onclick="description()" id="b${data.indexOf(post)}">Response</button>
        //Whatever is in the output variable put the in the div
        document.getElementById("results").innerHTML = output
    })
    return response  
}


