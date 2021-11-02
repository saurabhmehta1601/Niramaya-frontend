const contributors = document.querySelector("#contributors")
const url = "https://api.github.com/repos/saurabhmehta1601/Niramaya-frontend/stats/contributors"
fetch(url)
    .then(res => res.json())
    .then(data =>{
        const users = data.map(d => {
            return {
                name:d.author.login,
                img_url : d.author.avatar_url                
            }
        })
        users.forEach(user =>{
            const contributor = document.createElement('div')
            contributor.classList.add("contributor")  
            contributor.innerHTML = `
                <a href=https://www.github.com/${user.name}>
                    <img src=${user.img_url} alt=${user.name}/> 
                </a>
               <h3>${user.name}</h3>
            `
            contributors.appendChild(contributor)
        })
    })
    .catch(err => {
        console.log(err)
    })
