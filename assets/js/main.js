// fetch('https://jsonplaceholder.typicode.com/todos/')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)

//     })

//Promise JS
//Asynchronous function Js

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(elt => {
//             console.log(elt)
//             document.getElementById("content").innerHTML += `
//             <div>
//             <h3>${elt.name}</h3>
//             <h3>${elt.email}</h3>
//             <h3>${elt.phone}</h3>
//             <h4>${elt.address.street}, ${elt.address.city}</h4>
//             <a href=${elt.website}> visit my website</a>
//         </div>
//         `
//         });
//     })

//Übung 100 Posts mit Titel / Inhalt - hat geklappt
//-------------------------------------------------------

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(elt => {
//             console.log(elt)
//             document.getElementById("content").innerHTML += `
//              <div>
//              <h3>${elt.id}</h3>
//              <h3>${elt.title}</h3>
//              <h5>${elt.body}</h5>
//              </div>
//              `
//         });
//     })

//Version Soroush
//---------------------
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(post => {
//         for (let elt of post) {
//             document.getElementById("content").innerHTML += `
//         <div>
//         <h3>${elt.id}</h3>
//         <h2>${elt.title}</h2>
//         <p>${elt.body}</p>
//         </div>
//         `
//         }
//     })

//NEWS API
//-------------------------------------------------------

// fetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-25&sortBy=publishedAt&apiKey=a27ef11a0123442898d081f77740ec6c")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.articles)
//     })

//Übung mit News API
//------------------------
// fetch("http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-25&sortBy=publishedAt&apiKey=a27ef11a0123442898d081f77740ec6c")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.articles)
//         for (let elt of data.articles) {
//             document.getElementById("data").innerHTML += `
//                 <div>
//                 <Img src=${elt.urlToImage} alt="">
//                 <h3>${elt.title}</h3>
//                 <h4>${elt.author}</h4>
//                 <p>${elt.description}</p>
//                 <p>${elt.publishedAt}</p>
//                 <a href=${elt.url}>Read More</a>
//                 </div>

//                 `
//         }
//     })

//News API EVERTHING ändern 
//------------------------
fetch("http://newsapi.org/v2/everthing?q=corona&language=de&pageSize=10&apiKey=a27ef11a0123442898d081f77740ec6c")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })