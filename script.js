document.querySelector("button").addEventListener("click", () => {
    const username = document.querySelector("input").value.trim();

    fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            if (!response.ok) {

            }
            return response.json();
        })
        .then(user => {

            document.querySelector(".router img").src = user.avatar_url;
            document.querySelector(".router h1").textContent = user.name;
            document.querySelector(".router p").textContent = user.bio;

            const articles = document.querySelectorAll(".read article p");
            articles[0].textContent = user.public_repos;


            articles[1].textContent = user.followers;

            articles[2].textContent = user.following;
        })
        
});
