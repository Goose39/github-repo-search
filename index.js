function formListen() {
  $("form").submit(event => {
    event.preventDefault();
    const user = $("#user").val();
    const url = `https://api.github.com/users/${user}/repos`
    const options = {
      headers: new Headers({
        "Accept": "application/vnd.github.v3+json"
      })
    };

    fetch(url, options)
    .then(response => response.json())
    .then(responseJson => displayRepos(responseJson))
    .catch(error => console.log(`There was an error: ${error}`))


  })
}

function displayRepos(obj) {
$(".results-sec").removeClass("hidden");
$(".repo-list").empty();

for (let i = 0; i < obj.length; i++) {
  $(".repo-list").append(`<li><a class="repo-item" href="${obj[i].html_url}">${obj[i].name}</a></li>`);
  }
}

$(formListen);