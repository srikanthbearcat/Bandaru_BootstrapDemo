/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function feedBack(){
//document.getElementById("feedback").innerHTML = "Feedback received";
alert("Feedback received");
}
window.onload = function() {
    document.getElementById("feed").onclick = feedBack;
    
};

