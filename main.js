// dropdown for the menu
function displayMenu() {
    $("#js-button-menu").on("click", () => {
        $(".nav-item").toggle("slow");
        $(".button-menu").show();
        $(window).on('resize', function() {
            if(!$(".toggle").is(":visible"))
            {
                $('.nav-item').show();   
            }
        });
    }); 
};

// add project from the projects.js file to DOM
function addProject() {
    const projectArr = project.length;
    let getAll = "";
    for (let index = 0; index<projectArr; index++) {
      getAll+=
        `<div class= "project">
        <a class="repo-live" href="${project[index].live}" target="_blank"><img class="project-content" src="${project[index].img}" alt="project screenshot"/></a>
        </div>
        <div class ="project-content">
        <p class="title">${project[index].project}</p>
        <p><span class="style-text">Description: </span>${project[index].description}</p>
        <br>
        <p class="technologies">${project[index].technologies}</p>
        <br>
        <a class="repo-live live" href="${project[index].live}" target="_blank">demo</a>
        <a class="repo-live repo" href="${project[index].repo}" target="_blank">code</a>
        </div>
        <hr class="break-clear">
        <br>`
    }
    $(".projects-box").html(getAll);
};

// start the DOM
function startPortfolio() {
    displayMenu();
    addProject();    
};

$(startPortfolio);