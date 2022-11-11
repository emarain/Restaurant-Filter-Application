# Restaurant-Filter-Application

lnik to assignment details - https://docs.google.com/document/d/1onO0w4iKlLG9L_VTM2H0JfhoSkatQFH3sljuf67Apgk/edit?usp=sharing

1. I need to simplify my if statement to make it represent something like this:
    - I am guessing I have to add a for loop as well.

     for(let currentStudentIndex = 0; currentStudentIndex < allStudents.length; currentStudentIndex++)
     {
         //Use this condition and the filters to only display select students
         if((allStudents[currentStudentIndex].currentSemester === num || num === 0)
          && (allStudents[currentStudentIndex].program === studentProgram || studentProgram === 'Any'))
         {
           
            console.log(allStudents[currentStudentIndex]["firstName"] + " " + allStudents[currentStudentIndex]["lastName"] + " " + allStudents[currentStudentIndex]["program"] + " " + allStudents[currentStudentIndex]["currentSemester"]);
             let currentStudentElement = allStudents[currentStudentIndex].createElement();

             resultElement.appendChild(currentStudentElement);
         }
     }
     
     
     
2. On initial loading of the page I need to have all resturants avalable NOT just when the checkbox is clicked and submitted.
