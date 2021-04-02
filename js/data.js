const expsData = [
    {
        timeline: "Sep, 2020 -Present",
        name: "Social Networking for Pet lovers",
        lang: "HTML, CSS, Javascript, NodeJS, MongoDB",
        description: "Using knowledge about web-development to build complete project.<br>Deploy into Micrsoft Azure.<br>Work with: Git, MongoDB Atlas, MongoDB Compass, Visual Studio Code"
    },
    {
        timeline: "Jan, 2020 -Sep, 2020",
        name: "Ladingpage, Design UI mockup",
        lang: "HTML, CSS, Jquery, Javascript",
        description: "Studied about HTML, CSS, Javascript to create layout and animation, effect.<br>Designed UI mockup, layout prototype with Figma.<br>Convert PSD to HTML.<br>Work with: Visual Studio Code, Figma, Git."
    },
    {
        timeline: "Sep, 2019 -Jan, 2020",
        name: "Music App for Android",
        lang: "Java, PHP",
        description: "Studied Java language to create Mobile App.<br>Used PHP for back-end, API.<br>Work with: Android Studio, Visual Studio Code, Git."
    }
];
const edusData = [
    {
        timeline: "Sep, 2017 -Present",
        major: "learning software engineering",
        city: "UIT, Ho Chi Minh City",
        description: "I am learing bachelor program in University of Information and Technology (UIT)<br>Duration: 4 years.<br>Expected graduation time: Sep, 2021.<br>Major: software engineering"
    }

];
const projectsData = [
    {
        name: "Social Networking",
        photo: "./img/portfolio/thumb/social-network.png",
        category: "web",
        lang: "NodeJS, Javascript, MongoDB",
        demo: "http://petpediavn.me/"
    },
    {
        name: "App Release Landing Page",
        photo: "./img/portfolio/thumb/app.png",
        category: "layout",
        lang: "HTML, CSS, Javascript, Jquery",
        demo: "https://duy99uit.github.io/App-Released/"
    },
    {
        name: "Vitual Banking Layout with Styled-conponents",
        photo: "./img/portfolio/thumb/banking.png",
        category: "layout",
        lang: "ReactJS, styled component",
        demo: "https://github.com/duy99uit/ReactJS-Vitual-Bank"
    },
    {
        name: "hot film",
        photo: "./img/portfolio/thumb/film.png",
        category: "orther",
        lang: "ReactJS",
        demo: "https://github.com/duy99uit/Movies-app"
    }
    , {
        name: "Product Release Website",
        photo: "./img/portfolio/thumb/watch.png",
        category: "layout",
        lang: "HTML, CSS, Javascript, Jquery",
        demo: "https://duy99uit.github.io/Smart-Watch-Lading-Page/"
    },
    {
        name: "Restaurant",
        photo: "./img/portfolio/thumb/restaurant.png",
        category: "layout",
        lang: "HTML, CSS, Javascript, Jquery",
        demo: "https://duy99uit.github.io/Restaurant-Website-Lading/"
    },
    {
        name: "Wedding Planing Website",
        photo: "./img/portfolio/thumb/wedding.png",
        category: "layout",
        lang: "HTML, CSS, Javascript, Jquery",
        demo: "https://duy99uit.github.io/Wedding-Wedding-Planner-Website/"
    },
    {
        name: "Programming Course Ladingpage",
        photo: "./img/portfolio/thumb/course.png",
        category: "layout",
        lang: "HTML, CSS, Javascript, Jquery",
        demo: "https://duy99uit.github.io/Programming-Training-Website/"
    },
    {
        name: "Music App for Android",
        photo: "./img/portfolio/thumb/music.jpg",
        category: "mobile",
        lang: "Java, PHP",
        demo: "https://github.com/duy99uit/TTD-Music"
    }
    , {
        name: "Clock",
        photo: "./img/portfolio/thumb/clock.png",
        category: "orther",
        lang: "HTML, CSS, Javascript",
        demo: "https://duy99uit.github.io/Javascript-Clock/"
    }
];
function projectTemplate(project) {
    return `  
    <div class="portfolio-item" data-category="${project.category}">
          <div class="portfolio-item-inner outer-shadow">
            <div class="portfolio-item-img">
              <img src="${project.photo}" alt="" >       
              <a href="${project.demo}" class="btn-1 outer-shadow hover-in-shadow" target="_blank">View Detail</a>
              <span class="technical">${project.lang}</span>
            </div>
            <p class="portfolio-item-title">${project.name}    
            </p>    
          </div>
        </div>
    `;
}
function expTemplate(exp) {
    return `  
    <div class="timeline-item">
        <div class="timeline-item-inner outer-shadow">
            <i class="fas fa-briefcase icon"></i>
            <span>${exp.timeline}</span>
            <h3>${exp.name}</h3>
            <h4>${exp.lang}</h4>
            <p>${exp.description}</p>
        </div>
    </div>
    `;
}
function eduTemplate(edu) {
    return `  
    <div class="timeline-item">
        <div class="timeline-item-inner outer-shadow">
            <i class="fas fa-graduation-cap icon"></i>
            <span>${edu.timeline}</span>
            <h3>${edu.major}</h3>
            <h4>${edu.city}</h4>
            <p>${edu.description}</p>
        </div>
    </div>
    `;
}
document.querySelector(".portfolio-items").innerHTML = ` 
      ${projectsData.map(projectTemplate).join("")}
      
    `;

document.getElementById("exp").innerHTML = ` 
      ${expsData.map(expTemplate).join("")}
      
    `;
document.getElementById("education").innerHTML = ` 
    ${edusData.map(eduTemplate).join("")}
    
  `;