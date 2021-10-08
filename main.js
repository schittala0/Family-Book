var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/5ymDKL83/bro.jpg"];
var names = ["Family Book", "Srinivas Chittala", "Naga V Nandikam", "Srimukhi Chittala", "Nayan K Chittala"];
var i = 0;
var numbers_of_family_member_in_array = 4;

function update() {
  i++;
  if (i > numbers_of_family_member_in_array) {
    i = 0;
  }

  //Debug the code to store list of images in updatedImage. Use images[i]
  var updatedImage = images[i];
  //Debug the code to store list of names in updatedName. Use names[i]
  var updatedName = names[i];

  document.getElementById("family_member_image").src = updatedImage;
  document.getElementById("family_member_name").innerHTML = updatedName;
}

function update1() {
  i = 0;
  var updatedImage1 = images[i];
  var updatedName1 = names[i];

  document.getElementById("family_member_image").src = updatedImage1;
  document.getElementById("family_member_name").innerHTML = updatedName1;
}

function update2() {
i--;
if(i< 0){
i=numbers_of_family_member_in_array;}


var updatedImage2=images[i];
var updatedName2=names[i];

document.getElementById("family_member_image").src=updatedImage2;
document.getElementById("family_member_name").innerHTML=updatedName2;
}
