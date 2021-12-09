//var inputsValidate, inputError, gender, genderParent, sportParent, btnSubmit;

var form, username, email, password, genders, gendersParent, sports, sportsParent, country, countryParent;

form     = document.getElementById("form");

username = document.getElementsByName("username")[0];

email    = document.getElementsByName("email")[0]

password = document.getElementsByName("password")[0];

gendersParent = document.querySelector('.gender');

///^[A-Za-z0-9]+(?:[-).=_(^&*#$%]+[A-Za-z0-9]+)*@\w+(?:[-\.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/
genders  = Array.from( document.getElementsByName("gender"));

sportsParent = document.querySelector(".sport");

sports   = document.querySelectorAll("input[type='checkbox']");

country  = document.getElementById("country");

countryParent = document.querySelector(".country");


//Username validate
username.addEventListener("blur",function(){

    if( this.value == '' ) {
        
        this.nextElementSibling.classList.add('display');

    } else {

        this.nextElementSibling.classList.remove('display');
    }
});

// Email validate
email.addEventListener("blur", function(){

    var pattern = /^[A-Za-z0-9]+(?:[-).=_(^&*#$%]+[A-Za-z0-9]+)*@\w+(?:[-\.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    
    if( !pattern.test( email.value )) {

            email.nextElementSibling.classList.add('display');
    } else {
        
        email.nextElementSibling.classList.remove('display');
    }

})

// Password Validate
password.addEventListener("blur",function(){

    if( this.value.length < 8 ) {
     
        this.nextElementSibling.classList.add("display");

    } else {

        this.nextElementSibling.classList.remove('display');
        
    }
});

//Gender validate

form.addEventListener("submit",function(e){

    var genderCount = false, sportsLength = 0;

    if( username.value == '' ) {
        
        username.nextElementSibling.classList.add('display');
        e.preventDefault()

    } 

    var pattern = /^[A-Za-z0-9]+(?:[-).=_(^&*#$%]+[A-Za-z0-9]+)*@\w+(?:[-\.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;
    
    if( !pattern.test( email.value )) {

        email.nextElementSibling.classList.add('display');
        e.preventDefault();

    } 
    if( password.value.length < 8 ) {
     
        password.nextElementSibling.classList.add("display");

        e.preventDefault();

    }   

    //Check gender
    if( genders[0].checked || genders[1].checked ) {

        genderCount = true;

    }
        if( genderCount == false ) {

            gendersParent.querySelector(".input-error").classList.add("display");
            e.preventDefault();
           

        } else {

            gendersParent.querySelector(".input-error").classList.remove("display");

        }
    

    // Check sports
    sports.forEach( sport => {
        
        if( sport.checked == true ) {

            sportsLength++;
            
        }

    })

    if( sportsLength  < 2 ) {
        
        sportsParent.querySelector(".input-error").classList.add("display");
        e.preventDefault();

        

    } else {

        sportsParent.querySelector(".input-error").classList.remove("display");

    }

    // Check country

    if( country[0].selected ) {

       countryParent.querySelector(".input-error").classList.add("display");
       e.preventDefault();



    } else {

        countryParent.querySelector(".input-error").classList.remove("display");

       
    }

    

})





    













































/*
// Get inputs need to validate
inputsValidate = Array.from( document.getElementsByClassName("validate") );

//Get submit button
btnSubmit = document.getElementById("submit");

//Get gender parent to select label error
genderParent = document.querySelector( ".form-group.gender .input-error"); 

// Get gender radio button
genders = Array.from( document.getElementsByClassName("validate-gender") );



//Get sport parent to select label error
sportParent = document.querySelector( ".form-group.sport .input-error");

//Get sport checkbox
sports = Array.from( document.getElementsByClassName("validate-sport") );




// Validate input on blur
inputsValidate.forEach( input => input.addEventListener("blur",checkValidate) )




//Submit
btnSubmit.onclick = function( e )
{
    var genderLength = 0, sportLength = 0;
    
    // Check validation of inputs
    inputsValidate.forEach( input =>{

        input.focus();
        /*
        if( input.name == 'username' ) {
            
            ( checkValidate( input ) == false ) ? e.preventDefault() : true ;


        } else if( input.name == 'password' ) {

            ( checkValidate( input ) == false) ? e.preventDefault() : true;

        }
        
    })


    // Check gender 
     genders.forEach( gender => {
  
        if( gender.checked == true ) {
            
            genderLength = 1;

        }
    
    });
    
    if (genderLength == false )  {

      
        controlDisplayerror( genderParent, true );

        e.preventDefault();

    } else {

        controlHideerror( genderParent,  true );

    }
    


    // Check sports
    sports.forEach( sport => {
        
        if( sport.checked == true ) {

            sportLength++;
        } 

    })

    // Check sport length
    if( sportLength <= 1  ) {

        controlDisplayerror( sportParent, true );

        e.preventDefault();

    } else {

        controlHideerror( sportParent,  true );

    }
  
    

}



// Functions
function checkValidate( e )
{
    
    var flag = true;
   // Check if username is valid
   if(  e.name == 'username' ) {

        flag = checkUsername( e )
   }
   

   // Check if email is valid


   // Check if password is valid
   if( e.name == 'password' ) 
   {
       flag = checkPassword( e )
   }
  
 
   return flag;
   
}



function checkUsername( element )
{

    if( element.value == '' ) {

        controlDisplayerror( element );
     
        return false;

    } else {

        controlHideerror( element );

        return true;
    }
   

}

function checkPassword( element ) 
{
    
    if( element.value.length < 8 ) {
     
        controlDisplayerror( element ) ;
        
        return false;

    } else {

        controlHideerror( element );
        
        return true;
    }
    
}




function controlDisplayerror( element , checkElement = false)
{

    ( checkElement == false ) ?  element.nextElementSibling.classList.add('display') : element.classList.add('display');
    
    
}

function controlHideerror( element, checkElement = false )
{
    
    (checkElement == false) ? element.nextElementSibling.classList.remove( 'display' ): element.classList.remove('display') ;

}

*/