const leagueList = document.querySelector('table')

fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
.then(function(response){
    return response.text();
})
.then(function(json){
    // console.log(json);
    let leagueDataArray = JSON.parse(json);
    console.log(leagueDataArray.leagues);
    // Call function
    displayList(leagueDataArray.leagues);

})
.catch(function(error){
    console.log(error);
});

function displayList(leaguesArray){
    for(i = 0; i <leaguesArray.length; i++) {
        let tableRow = document.createElement('tr');
        let leagueID = document.createElement('td');
        let leagueDivision = document.createElement('td');
        let leagueSport = document.createElement('td');
        

        leagueID.innerText = leaguesArray[i].idLeague;
        leagueDivision.innerText = leaguesArray[i].strLeague;
        leagueSport.innerText = leaguesArray[i].strSport;

        tableRow.appendChild(leagueID);
        tableRow.appendChild(leagueDivision);
        tableRow.appendChild(leagueSport);
        
        
        leagueList.appendChild(tableRow);
    }
}
