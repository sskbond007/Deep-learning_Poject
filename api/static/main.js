console.log("HELLO WORLD")

function PreviewImage() {
    var oFReader = new FileReader();
    const scrollingElement = (document.scrollingElement || document.body);

    oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);
    oFReader.onload = function (oFREvent) {
        document.getElementById("uploadPreview").src = oFREvent.target.result;
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
    };
};

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
};
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
};



// function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
// };
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
// };

// function PreviewImage() {
//     var oFReader = new FileReader();
//     oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);

//     oFReader.onload = function (oFREvent) {
//         document.getElementById("uploadPreview").src = oFREvent.target.result;
//     };
// }; 