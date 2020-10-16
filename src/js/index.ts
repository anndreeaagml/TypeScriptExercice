let id=1;
let button= document.getElementById("button");

button.addEventListener("click", JustDoIt);
function JustDoIt()
{
    let result;
    
    var input= (<HTMLInputElement>document.getElementById("fromUser")).value;
    var selection =parseInt((<HTMLSelectElement>document.getElementById("selection")).value);
    switch(selection)
    {
        case 1: {result= input.toUpperCase(); break;}
        case 2: {result=input.toLowerCase(); break;}
        default: break;
    }

    let ColumElement=document.createElement("tr");
    let rowElement=document.createElement("td");
    let idElement=document.createElement("td");
    ColumElement.setAttribute("id", id.toString());
    rowElement.textContent=result;
    idElement.textContent=id.toString();
    id++;
    let Table=document.getElementById("ResultTable");
    ColumElement.appendChild(idElement);
    ColumElement.appendChild(rowElement);
    Table.appendChild(ColumElement);
}