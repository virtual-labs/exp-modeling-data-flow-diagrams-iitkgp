/*Redeveloped
Lab: Software Engineering
Exp: Modeling Data Flow Diagrams
File Name: main.js
Author: Prakriti Dhang*/

/* Exercise number choice */
var ex= document.getElementById("selectex");
function subex(){

  if(ex.options[ex.selectedIndex].value==0){
    document.getElementById("exercise1").style.display="none";
    document.getElementById("ex1").style.display="none";
    document.getElementById("para1").style.display="none";
    document.getElementById("dispres").style.display="none";
    document.getElementById("show_result1").style.display="none";
    document.getElementById("show_result2").style.display="none";
    document.getElementById("dispuml1").style.display="none";
    document.getElementById("dispuml2").style.display="none";
    document.getElementById("dispviewbtn").disabled=true;
    document.getElementById("viewsol").disabled=true;
    
}
    if(ex.options[ex.selectedIndex].value==1){
        document.getElementById("exercise1").style.display="block";
        document.getElementById("ex1").style.display="block";
        document.getElementById("exercise2").style.display="none";
       document.getElementById("ex2").style.display="none";
        document.getElementById("para1").style.display="block";
        document.getElementById("dispres").style.display="none";
        document.getElementById("show_result1").style.display="none";
        document.getElementById("show_result2").style.display="none";
        document.getElementById("dispuml1").style.display="none";
        document.getElementById("dispuml2").style.display="none";
        document.getElementById("dispviewbtn").disabled=false; // submit button 
        //document.getElementById("retrybtn").style.display="block"; //try again button
        document.getElementById("viewsol").disabled=true;
       
    }
    if(ex.options[ex.selectedIndex].value==2){
      document.getElementById("exercise2").style.display="block";
      document.getElementById("ex2").style.display="block";
      document.getElementById("exercise1").style.display="none";
      document.getElementById("ex1").style.display="none";
      document.getElementById("para1").style.display="block";
      document.getElementById("dispres").style.display="none";
      document.getElementById("show_result1").style.display="none";
      document.getElementById("show_result2").style.display="none";
      document.getElementById("dispuml1").style.display="none";
      document.getElementById("dispuml2").style.display="none";
      document.getElementById("dispviewbtn").disabled=false; // submit button 
     // document.getElementById("retrybtn").style.display="block"; //try again button
      document.getElementById("viewsol").disabled=true;
      //clearTable();
} 
    
}
/* Submit button to directly view the solution*/

function viewsolutionb(){ //submit button
  document.getElementById("dispres").style.display="block";
  document.getElementById("show_result1").style.display="none";
  document.getElementById("show_result2").style.display="none";
    document.getElementById("viewsol").disabled=false;
    document.getElementById("dispviewbtn").disabled=true;
    if(ex.options[ex.selectedIndex].value==1){
    window.scrollBy(0, 2000);
    }
    if(ex.options[ex.selectedIndex].value==2){
      window.scrollBy(0, 3000);
    }

}

function solview(){  //view solution button
  if(ex.options[ex.selectedIndex].value==1){
  document.getElementById("show_result1").style.display="block";
  document.getElementById("show_result2").style.display="none";
    document.getElementById("viewsol").disabled=true;
    window.scrollBy(0, 500);
    
  }
  if(ex.options[ex.selectedIndex].value==2){
    document.getElementById("show_result2").style.display="block";
    document.getElementById("show_result1").style.display="none";
      document.getElementById("viewsol").disabled=true;
      window.scrollBy(0, 500);
      
    }

}
 
 /* function clearTable() {
  // Get a reference to the table
  const table = document.getElementById("tbl5");

  // Clear all rows except the header row (first row)
  while (table.rows.length > 2) {
    table.deleteRow(1);
  }
}  */

