validNum();


function validNum() {
    var phoneNum = prompt("Please enter your 10 digit phone number with dashes", "Phone #");
    if (
        phoneNum.charAt(3) === "-" && phoneNum.charAt(7) === "-" && phoneNum.length === 12 
        && phoneNum.charAt(0) >= 0 && phoneNum.charAt(0) <= 9
        && phoneNum.charAt(1) >= 0 && phoneNum.charAt(1) <= 9 
        && phoneNum.charAt(2) >= 0 && phoneNum.charAt(2) <= 9 
        && phoneNum.charAt(4) >= 0 && phoneNum.charAt(4) <= 9
        && phoneNum.charAt(5) >= 0 && phoneNum.charAt(5) <= 9 
        && phoneNum.charAt(6) >= 0 && phoneNum.charAt(6) <= 9 
        && phoneNum.charAt(8) >= 0 && phoneNum.charAt(8) <= 9
        && phoneNum.charAt(9) >= 0 && phoneNum.charAt(9) <= 9 
        && phoneNum.charAt(10) >= 0 && phoneNum.charAt(10) <= 9 
        && phoneNum.charAt(11) >= 0 && phoneNum.charAt(11) <= 9){
        /*(phoneNumber.match(/^\d{3}-\d{3}-\d{4}$/)*/ //<<< This is called a regular expression. They are awesome. 
            alert ("Accepted phone number");
            validDate();
    }else {
        alert("Enter a valid phone number");
        validNum();
    }
} 

function validDate () {
    var birthDate = prompt ("Please enter your birthday using two digit format for month/day/year: xx/xx/xx", "Date of Birth");
    if (
        birthDate.charAt(2) === "/" && birthDate.charAt(5) && birthDate.length === 8
        && birthDate.charAt(0) >= 0 && birthDate.charAt(0) <= 9
        && birthDate.charAt(1) >= 0 && birthDate.charAt(1) <= 9
        && birthDate.charAt(3) >= 0 && birthDate.charAt(3) <= 3
        && birthDate.charAt(4) >= 0 && birthDate.charAt(4) <= 9
        && birthDate.charAt(6) >= 0 && birthDate.charAt(6) <= 9
        && birthDate.charAt(7) >= 0 && birthDate.charAt(7) <= 9) {
            alert("Valid Date");
            validZipCode();
        }else {
            alert("Invalid date/format please re-enter date.")
            birthDate ();
        }
}

function validZipCode () {
    var zipCode = prompt ("Please enter your 7 digit postal (zip) code");
    if (
        zipCode.length = 5
        && zipCode.charAt(0) >= 0 && zipCode.charAt(0) <= 9
        && zipCode.charAt(1) >= 0 && zipCode.charAt(1) <= 9
        && zipCode.charAt(2) >= 0 && zipCode.charAt(2) <= 9
        && zipCode.charAt(3) >= 0 && zipCode.charAt(3) <= 9
        && zipCode.charAt(4) >= 0 && zipCode.charAt(4) <= 9
        ) {
        alert("Acceptable Zip");
        stateAbrev ();
    }
       else if (
        zipCode.length = 10 && zipCode.charAt(5) === "-"
        && zipCode.charAt(0) >= 0 && zipCode.charAt(0) <= 9
        && zipCode.charAt(1) >= 0 && zipCode.charAt(1) <= 9
        && zipCode.charAt(2) >= 0 && zipCode.charAt(2) <= 9
        && zipCode.charAt(3) >= 0 && zipCode.charAt(3) <= 9
        && zipCode.charAt(4) >= 0 && zipCode.charAt(4) <= 9
        && zipCode.charAt(6) >= 0 && zipCode.charAt(6) <= 9
        && zipCode.charAt(7) >= 0 && zipCode.charAt(7) <= 9
        && zipCode.charAt(8) >= 0 && zipCode.charAt(8) <= 9
        && zipCode.charAt(9) >= 0 && zipCode.charAt(9) <= 9
        ) {
        alert("Acceptable Zip");
        stateAbrev ();
    } else {
        alert("")
    }
    
}

function stateAbrev () {
    var state = prompt("What is your state of residence? Capitalize state abreviation").toUpperCase;
    if(state.charAt(0) >= "A" && state.charAt(0) <= "Z"
        && state.charAt(1) >="A" && state.charAt(1) <="Z"
        && state.length === 2){
            alert ("valid state");
            wedUnwed();
        }else{
            alert ("not a valid state");
            stateAbrev();
        }
}
function wedUnwed(){
    var maritalStatus = prompt("Are you married?").toLowerCase;
    if(maritalStatus == "yes" || maritalStatus == "Yes" || maritalStatus == "YES"){
        alert("Congrats!");
    }else if(maritalStatus == "no" || maritalStatus == "No" || maritalStatus == "NO"){
        alert("It's not all it's cracked up to be.");
    }else{
        alert("invalid response");
        wedUnwed();
    }
}
