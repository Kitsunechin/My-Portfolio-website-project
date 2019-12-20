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
        `<div class= "project"><a class="repo-live" href="${project[index].live}" target="_blank"><img class="project-content" src="${project[index].img}" alt="project screenshot"/></a>
        <div class ="project-content"><p><span class="style-text">Title: </span>${project[index].project}</p>
        <p><span class="style-text">Description: </span>${project[index].description}</p>
        <p><span class="style-text">Technologies used: </span>${project[index].technologies}
        <p><a class="repo-live" href="${project[index].live}" target="_blank">Check out the live version here</a>
        <a class="repo-live repo" href="${project[index].repo}" target="_blank">For the repository go here</a><p>
        </div></div><hr class="break-clear">`
    }
    $(".projects-box").html(getAll);
};

// start the DOM
function startPortfolio() {
    displayMenu();
    addProject();    
};

$(startPortfolio);