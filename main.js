var imageArray = ["Broothar.png", "Buttnidhi.png", "Dad.png", "Mommy.png"];
var nameArray = ["Mama", "Papa", "Harish, The one and only", "Buttnidhi, the one and stupdity"];
// var image = document.getElementById("FamilybookImage");

function change()
{
    nextslide()
}
var i = 0;
function nextslide()
{
    document.getElementById("Name").src = nameArray[i]; 
    document.getElementById("FamilybookImage").src = imageArray[i];
    i++;
}