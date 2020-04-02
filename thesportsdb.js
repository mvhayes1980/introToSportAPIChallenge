const sportsList = document.querySelector('table');


fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
.then(function(response){
    return response.json();
})
.then(function(json){
    let sportsArray = json.sports;
    displayList(sportsArray);
    
    // console.log(json.sports); CHECK
})
.catch(function(error){
    console.log(error);
});

function displayList(sportsArray){
    let sports = sportsArray.forEach(sport =>{
        let tableRow = document.createElement('tr');
        let sportName = document.createElement('td');
        let sportDesc = document.createElement('td');
        let sportThumb = document.createElement('td');
        let img = document.createElement('img');
        
        sportName.innerText = sport.strSport;
        sportDesc.innerText = sport.strSportDescription;

        img.src = sport.strSportThumb;
        //img.height = 100;
        //img.width = 100;
        
        sportThumb.appendChild(img);
        tableRow.appendChild(sportName);
        tableRow.appendChild(sportDesc);
        tableRow.appendChild(sportThumb);
        
        
        sportsList.appendChild(tableRow);
    });
}


