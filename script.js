function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    console.log("yippee")
    // const fs = require('fs');
    // let fInput = "You are reading the content from Tutorials Point"
    // fs.writeFile('tp.txt', fInput, (err) => {
    //    if (err) throw err;
    //    else{
    //       console.log("The file is updated with the given data")
    //    }
    // })
    
  document.getElementById("myForm").style.display = "none";
    quiz = document.forms.accForm.elements;
  let fName = quiz.name.value;
  let fQ1 = quiz.Q1.value;
//   let fQ2 = quiz.Q2.value;
  let fQ3 = quiz.Q3.value;
  console.log(fName);
  console.log(fQ1);

  console.log(fQ3); 




  //var formData = new FormData(document.getElementById("myForm"));

  //add email details
//   var email = 'jakeclegg99@gmail.com';
// // results = [
// // player.GetVar('r1'), 
// // player.GetVar('r2'),
// // player.GetVar('r3'),
// // player.GetVar('r4'),
// // player.GetVar('r5')
// // ];

// alert("The value of results at this point is ")

// var subject = 'My quiz results of XYZ Quiz';
// var emailBody = 'My quiz results:';


}
