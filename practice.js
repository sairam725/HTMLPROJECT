let inputelemet=document.createElement("input");
inputelemet.type="checkbox";
inputelemet.id="mycheckbox";
document.body.appendChild(inputelemet);

let labelelemt=document.createElement("label");
//labelelemt.htmlFor="mycheckbox";
labelelemt.setAttribute("for","mycheckbox");
labelelemt.textContent="graduated";
document.body.appendChild(labelelemt)


