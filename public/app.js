var profile = document.querySelector("#profile");
var profile_path = document.querySelector("#profile-path")


function pathExt(inp,pathField){

    inp.addEventListener('change', () => {

        var path = inp.value.split('\\')[2];
        //console.log(path);
        pathField.innerHTML=path;
    
    });

}


pathExt(profile,profile_path);
pathExt(document.querySelector("#resume"),document.querySelector("#resume-path"));

