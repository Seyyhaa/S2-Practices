
//1. How does the JS file is linked to the HTML file?
//The JS file is linked to the HTML file by using the <script> tag in the HTML file. The <script> tag is used to define a client-side script (JavaScript). The <script> element either contains scripting statements, or it points to an external script file through the src attribute. The type attribute is used to define the type of the script language. The <script> tag is placed in the <head> or <body> section of the HTML file. The <script> tag can be used to define JavaScript functions, add interactivity to the HTML page, and manipulate the HTML elements. The <script> tag can be used to link the JS file to the HTML file by using the src attribute to specify the path to the JS file. The src attribute contains the URL of the external script file. The <script> tag can be used to link the JS file to the HTML file by using the <script> tag to define the JavaScript code directly in the HTML file. The <script> tag can be used to link the JS file to the HTML file by using the <script> tag to define the JavaScript code directly in the HTML file. The <script> tag can be used to link the JS file to the HTML file by using the <script> tag to define the JavaScript code directly in the HTML file. The <script> tag can be used to link the JS file to the HTML file by using the <script> tag to define the JavaScript code directly in the HTML file. The <script> tag can be used to link the JS file to the HTML file by using the <script> tag to define the JavaScript code directly in the HTML file. The <script> tag can be used to link the JS file to the HTML file by using the <script> tag to define the JavaScript code directly in the HTML file. The <script> tag can be used to link the JS file to the HTML file by using the <script> tag to define the JavaScript code directly in the HTML file. The <script> tag can be used to link the JS file to the HTML file by using the <script> tag to define the JavaScript code directly in the HTML file. The <script> tag can be used to link the JS file to the HTML file by using the <script> tag to define the JavaScript code directly in the HTML file. The <script> tag can be used to link the JS file to the HTML file

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




