// dropdown for the menu
function displayMenu() {
    $("#js-button-menu").on("click", () => {
        $(".nav-item").toggle("slow");
        $(".button-menu").show();
        $(window).on('resize', function () {
            if (!$(".toggle").is(":visible")) {
                $('.nav-item').show();
            }
        });
    });
};

// add project from the projects.js file to DOM
function addProject() {
    const projectArr = project.length;
    let getAll = "";
    for (let index = 0; index < projectArr; index++) {
        getAll += `
        <div class= "project-image-wrapper">
            <a class="repo-live" href="${project[index].live}" target="_blank">
                <img class="project-image" src="${project[index].img}" alt="project screenshot"/>
            </a>
        </div>
        <div class ="project-content">
            <p class="title">${project[index].project}</p>
            <p>${project[index].description}</p>
            <br>
            <p class="technologies">${project[index].technologies}</p>
            <br>
            <div class="show-web-only">
            <a class="repo-live live" href="${project[index].live}" target="_blank">
                <i class="fa fa-desktop"></i>demo
            </a>
            <a class="repo-live repo" href="${project[index].repo}" target="_blank">
                <i class="fa fa-code"></i>code
            </a>
            </div>
            <ul class="print-links show-print-only">
                        <li>
                            <i class="fas fa-desktop"></i> ${project[index].live}
                        </li>
                        <li>
                            <i class="fab fa-github"></i> ${project[index].repo}
                        </li>
                    </ul>
        </div>
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
