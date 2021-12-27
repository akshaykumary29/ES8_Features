// Async And Await

const student = new Promise((resolve, reject) => {

    setTimeout( () => {
        let roll_no = [1,2,3,4,5];
        resolve(roll_no);
    }, 2000);
});

// student.then((rollno) => {
//     console.log(rollno);
// } ).catch((error) => {
//     console.log(error);
// } 

async function getData() {
    const rollNoData= await student;
    console.log(rollNoData); 
}

getData();
