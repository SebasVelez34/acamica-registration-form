(function(){
    fetch('https://restcountries.eu/rest/v2/all',{
        "method": "GET"
    })
    .then(response => {
        return response.json();
    })
    .then((data) => {
        countires(data);
    })
    .catch(err => {
        console.log(err);
    });

    
})();

function countires(data) {
    const $select = document.getElementById('country');
    data.forEach(country => {
        $select.add(new Option(country.name,country.alpha3Code));
    });
}