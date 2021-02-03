fetch("https://api.github.com/users/desaidhruv/repos")
    .then((result) => result.json())
    .then((data) => {
        console.log(data)
        document.getElementById("title").innerHTML = `<svg  aria-hidden="true" className="octicon" height="20" role="img" viewBox="0 0 12 16" width="14" className="repo-svg">
        <path
          fill-rule="evenodd"
          d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
        ></path>
      </svg>   ${data[2].name}`
        document.getElementById("card-text").innerHTML = `${data[2].description}`
        var element = document.getElementById("card-link")
        element.classList.add("card-link");
        document.getElementById("card-link").innerHTML = `
            <a href="${data[2].html_url}" class="btn" style="border-radius: 0px;">View</a><br>
            <div class="container" style="display: flex;padding-top:10px;margin-left:-20px;
            ">
              <div class="circlearancione" style="background-color: #3572A5;
              border-color: white;
              border-radius: 50%;
              border-width: 5px;
              height: 25px;
              width: 25px;"></div>
              <p style="margin:0;padding-left:10px;">${data[2].language}</p>
            </div>
        `

        document.getElementById("title1").innerHTML = `<svg  aria-hidden="true" className="octicon" height="20" role="img" viewBox="0 0 12 16" width="14" className="repo-svg">
        <path
          fill-rule="evenodd"
          d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
        ></path>
      </svg>   ${data[0].name}`
        document.getElementById("card-text1").innerHTML = `${data[0].description}`
        var element = document.getElementById("card-link1")
        element.classList.add("card-link1");
        document.getElementById("card-link1").innerHTML = `
            <a href="${data[0].html_url}" class="btn" style="border-radius: 0px;">View</a><br>
            <div class="container" style="display: flex;padding-top:10px;margin-left:-20px;
            ">
              <div class="circlearancione" style="background-color: #6a40fd;
              border-color: white;
              border-radius: 50%;
              border-width: 5px;
              height: 25px;
              width: 25px;"></div>
              <p style="margin:0;padding-left:10px;">${data[0].language}</p>
            </div>
        `
        document.getElementById("title2").innerHTML = `<svg  aria-hidden="true" className="octicon" height="20" role="img" viewBox="0 0 12 16" width="14" className="repo-svg">
        <path
          fill-rule="evenodd"
          d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
        ></path>
      </svg>   ${data[3].name}`
        document.getElementById("card-text2").innerHTML = `${data[3].description}`
        var element = document.getElementById("card-link2")
        element.classList.add("card-link2");
        document.getElementById("card-link2").innerHTML = `
            <a href="${data[3].html_url}" class="btn" style="border-radius: 0px;">View</a>
            <br>
            <div class="container" style="display: flex;padding-top:10px;margin-left:-20px;
            ">
              <div class="circlearancione" style="background-color: #3572A5;
              border-color: white;
              border-radius: 50%;
              border-width: 5px;
              height: 25px;
              width: 25px;"></div>
              <p style="margin:0;padding-left:10px;">${data[3].language}</p>
            </div>
        `
        document.getElementById("title3").innerHTML = `<svg  aria-hidden="true" className="octicon" height="20" role="img" viewBox="0 0 12 16" width="14" className="repo-svg">
        <path
          fill-rule="evenodd"
          d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
        ></path>
      </svg>   ${data[12].name}`
        document.getElementById("card-text3").innerHTML = `${data[12].description}`
        var element = document.getElementById("card-link3")
        element.classList.add("card-link3");
        document.getElementById("card-link3").innerHTML = `
            <a href="${data[12].html_url}" class="btn" style="border-radius: 0px;">View</a><br>
            <div class="container" style="display: flex;padding-top:10px;margin-left:-20px;
            ">
              <div class="circlearancione" style="background-color: #3572A5;
              border-color: white;
              border-radius: 50%;
              border-width: 5px;
              height: 25px;
              width: 25px;"></div>
              <p style="margin:0;padding-left:10px;">${data[12].language}</p>
            </div>
        `
        document.getElementById("title4").innerHTML = `<svg  aria-hidden="true" className="octicon" height="20" role="img" viewBox="0 0 12 16" width="14" className="repo-svg">
        <path
          fill-rule="evenodd"
          d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
        ></path>
      </svg>   ${data[14].name}`
        document.getElementById("card-text4").innerHTML = `${data[14].description}`
        var element = document.getElementById("card-link4")
        element.classList.add("card-link4");
        document.getElementById("card-link4").innerHTML = `
            <a href="https://fervent-tesla-815a46.netlify.app/" class="btn" style="border-radius: 0px;">View</a><br>
            <div class="container" style="display: flex;padding-top:10px;margin-left:-20px;
            ">
              <div class="circlearancione" style="background-color: #e34c26;
              border-color: white;
              border-radius: 50%;
              border-width: 5px;
              height: 25px;
              width: 25px;"></div>
              <p style="margin:0;padding-left:10px;">${data[14].language}</p>
            </div>
        `
        document.getElementById("title5").innerHTML = `<svg  aria-hidden="true" className="octicon" height="20" role="img" viewBox="0 0 12 16" width="14" className="repo-svg">
        <path
          fill-rule="evenodd"
          d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
        ></path>
      </svg>   ${data[10].name}`
        document.getElementById("card-text5").innerHTML = `${data[10].description}`
        var element = document.getElementById("card-link5")
        element.classList.add("card-link5");
        document.getElementById("card-link5").innerHTML = `
            <a href="http://bit.ly/organic-website" class="btn" style="border-radius: 0px;">View</a><br>
            <div class="container" style="display: flex;padding-top:10px;margin-left:-20px;
            ">
              <div class="circlearancione" style="background-color: #f1e05a;
              border-color: white;
              border-radius: 50%;
              border-width: 5px;
              height: 25px;
              width: 25px;"></div>
              <p style="margin:0;padding-left:10px;">${data[10].language}</p>
            </div>
        `

    })