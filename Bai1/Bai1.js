/// Element Số 1
let userNameTextNode = document.createTextNode("Số 1:");
const divUserName = document.createElement("div");
divUserName.appendChild(userNameTextNode);
const userNameTextBox= document.createElement("INPUT");
userNameTextBox.id= "so1";
userNameTextBox.setAttribute("type","text");
divUserName.appendChild(userNameTextBox);
document.body.appendChild(divUserName);
/// Element Số 2
let passWordTextNode= document.createTextNode("Số 2:");
const divPassWord= document.createElement("div");
divPassWord.appendChild(passWordTextNode);
const passWordTextBox= document.createElement("INPUT");
passWordTextBox.id="so2";
passWordTextBox.setAttribute("type","text");
divPassWord.appendChild(passWordTextBox);
document.body.appendChild(divPassWord);
/// Element Submit
let submitButtonNode= document.createElement("button");
submitButtonNode.setAttribute("type","button");
let submitButtonTextNode= document.createTextNode("Tổng");
submitButtonNode.appendChild(submitButtonTextNode);
const divSubmit= document.createElement("div");
divSubmit.appendChild(submitButtonNode);
document.body.appendChild(divSubmit);

/// Custom magrin in div element
divUserName.style.margin="10px";
divPassWord.style.margin="10px";
divSubmit.style.margin="10px 180px"; 
/// Custom margin in node element
userNameTextBox.style.margin="0px 0px 0px 10px";
passWordTextBox.style.margin="0px 0px 0px 10px";
//Get element by listener
submitButtonNode.onclick= function(){
    var a = parseInt(userNameTextBox.value);
    var b = parseInt(passWordTextBox.value);
    
    const tong= a+b;
    /// Element show total
    const totalTextNode= document.createTextNode("Tổng:"+tong);
    document.body.appendChild(totalTextNode);   
    
}
