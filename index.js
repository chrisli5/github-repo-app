function displayRepos(arr) {
    for(var i = 0; i < arr.length; i++) {
        const url = arr[i].url;
        const name = arr[i].full_name;

        $('#results').append(`<div class="repo"><h2>${name}</h2><a href=${url}>${url}</a></div>`)
    }
}


function getRepos(username) {
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(responseJson => {
            console.log(responseJson);
            displayRepos(responseJson);
        })
        .catch(e => {
            alert(`Error getting data, ${e}`);
        });
};

function mainApp() {
    $('form').submit(function(event) {
        event.preventDefault();
        const username = $('#text').val();
        $('#results').empty();
        getRepos(username);
    });
};

$(mainApp);
