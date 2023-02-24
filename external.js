function perfect(n) {
    var temp = 0;
    for (var i = 0; i < n; i++) {
        if (n % i == 0) {
            temp = temp + i;
        }
    }
    if (temp == n || temp !== 0) {
        document.write("it is a perfect number");
    }
    else {
        document.write("it is not a perfect number");
    }
}

function fibo(num) {


    let num1 = 0, num2 = 1, nextTerm;
    let i = 1;

    document.write("Fibonacci Series:" + num);

    while (i <= num) {
        document.write(n1);
        nextterm = num1 + num2;
        num1 = num2;
        num2 = nextterm;
        i++

    }
}
function fact(num) {

    let fact = 1;
    let i = 1;

    do {
        document.write("The factorial is:" + fact);

        fact *= i;
        i++;
    } while (i <= num);



    document.write()
}

function maleorfemale() {

    var gender;
    gender = prompt("enter the gender:");

    if (gender == 'M' || gender == 'm') {

        document.write("the person is male ");
    }

    else if (gender == 'F' || gender == 'f') {
        document.write("the person is female");
    }
    else
        document.write("Valid person name ");
}
function mf() {
    
    var gender = prompt("enter the gender:");
    switch (gender) {

        case 'FEMALE':
            
            document.write("the person is:  "+gender);
            break;
        case 'female':
            
            document.write("the person is:  " +gender);
            break;

        case 'MALE':
            
            document.write("the person is:  " +gender);
            break;
        case 'male':
           
            document.write("the person is:  " +gender);
            break;
        default:
            document.write("invalid input");



    }
}

