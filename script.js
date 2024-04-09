
/** 
 * @name: Assignment 2 Q2: Make BVC Sport Club Event Registration website
 * @Course Code: SODV1201
 * @class: Software Development Diploma program. 
 * @author: Max Dyson
 * 
*/

// URL for the fee

const feeURL =  'http://localhost:6954/fee';

$(document).ready(function(){
  
// Using a GET HTTP request to get the JSON data of the feeURL 

$.getJSON(feeURL,(getfeeURL)=> {


    $("button").click(function(){

        let ID =  $("#number").val();
    
        let Fullname  =  $("#fullname").val();

        let Address =  $("#address").val();

        $("#Registerdata").show();

        $("#content").hide();
    

        $("#Registerdata").append(` ID: <p> ${ID} </p>  FullName: <p> ${Fullname} </p> Address: <p> ${Address} </p>  `);


    })

  $("#statusOptions").click(function(){
  
      // Gets the current value of each status 
   
   let statusOptions =   $(this).val();

   
    // If the value equals status 


   if(statusOptions === "status"){
   
    // Should not get the feeURL 

    return false;

   }

   else{

    // If the value equals student

    if (statusOptions === "student"){
  


        $("#Registerdata").append(` <h1> Confirm Notices </h1>  Student fee: <p> $${getfeeURL.student}  </p>   `);
            

    }

    
        // If the value equals staff

    if(statusOptions === "staff"){


        $("#Registerdata").hide();
   
        $("#Registerdata").append(` <h1> Confirm Notices </h1>  Staff fee: <p> $${getfeeURL.staff}  </p>   `);


    }

    
        // If the value equals volunteer 


    if(statusOptions === "volunteer")
    {
      
        
        $("#Registerdata").hide();
   
        $("#Registerdata").append(` <h1> Confirm Notices </h1>  Volunteer fee: <p> $${getfeeURL.volunteer}  </p>   `);




    }


   }


  })



})
    
})