// var name = Umar;
// let name = localStorage.getItem('name')

// // console.log('Umar Hasnain')

// localStorage.setItem('name' , umar)


// let impArray = ["adarak","Ppyaz","bhindi"];
// name = JSON.parse(localStorage.getItem("sabzii"));
// console.log(name)




// var getName;
// function lacaladd() {
//     event.preventDefault();
//     console.log(name1);
//     var arr = [];
//    arr = name1.push()
//     localStorage.setItem("fathername", JSON.stringify(arr))
//     // if(newName){
//     //     arr = JSON.parse(newName)
//     // }
//     getName = localStorage.getItem('fathername')
//     console.log(getName)
// }
// console.log(name1.value)

// function saveData(){
//     event.preventDefault();
//     var fullname = document.getElementById("fullname");
//     var fathername = document.getElementById("fathername");

//     var student = {
//         fullname: fullname.value,
//         fathername: fathername.value
//     }
//     student = localStorage.getItem("saveData()")
// }



// NewCOde
var fullname = document.getElementById("name");
var fathername = document.getElementById("fathername");
var city = document.getElementById("slct_city")
var course = document.getElementById("slct_course")
var email = document.getElementById("email")
var phoneno = document.getElementById("num")
var cnic = document.getElementById("cnic")
var fathercnic = document.getElementById("fathercnic")
var birth = document.getElementById("birth")
var gender = document.getElementById("gender")
var address = document.getElementById("adress")
var qulifictaion = document.getElementById("qualification")

var getName;

function lacaladd() {
    event.preventDefault();
    console.log(fullname);

    var arr = [
        {
            city: "",
            course: "",
            name: "",
            fathername: "",
            email: "",
            number: "",
            cnic: "",
            gender: "",
        }
    ];
    var deta = arr[0].name = fullname.value;
    var deta = arr[0].city = city.value;
    var deta = arr[0].fathername = fathername.value;
    var deta = arr[0].course = course.value;
    var deta = arr[0].email = email.value;
    var deta = arr[0].number = num.value;
    var deta = arr[0].cnic = cnic.value;
    var deta = arr[0].gender = gender.value;
    // var deta = arr.name = fullname.value;
    console.log(deta)

    localStorage.setItem("name", JSON.stringify(arr))
    // if(newName){
    //     arr = JSON.parse(newName)
    // }
    // getName = localStorage.getItem('fullname')
    // console.log(getName)
}
// console.log(fullname.value.push('arr')) formData.innerHTML += 


