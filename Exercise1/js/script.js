//2.Write the code in the JS file to move the item 3 to the second container 
const container1 = document.getElementById("container1");
const item3 = container1.children[2];
const container2 = document.getElementById("container2");
container2.appendChild(item3);
//3. Write the code in the JS file to remove item 4 from the container 2
const item4 = container2.children[0];
item4.remove();
//4.
const item10 = document.createElement("div");
item10.className = "item";
item10.textContent = "10";
let container3 = document.getElementById("container3");
container3.appendChild(item10);
//5.

const containerBlue = document.getElementsByClassName("containerBlue");
for (let i = 0; i < containerBlue.length; i++) {
    containerBlue[i].style.color = "red";
}




