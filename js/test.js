// function nonBlockingTask() {
//     console.log("Non - blocking started");
//     setTimeout(() => {
//         console.log("Non-blocking task done");
//         // database logic

//     }, 3000);
// }

// console.log("Start");
// nonBlockingTask();
// console.log("End");

// function blockingTask() {
//     let start = Date.now();
//     while (Date.now() - start < 3000) {
//         // Blocking the code for 3 seconds
//         console.log('Blocking.....')
//     }
//     console.log("Blocking task done");
// }

// console.log("Start");
// blockingTask();
// console.log("End");


const users = [
    {
        name:"Abc",
        age: 20,
        mobile: "+913232323323"
    },
    {
        name:"Abc",
        age: 20,
        mobile: "+913232323323"
    },
    {
        name:"Abc",
        age: 20,
        mobile: "+913232323323"
    },
    {
        name:"Abc",
        age: 20,
        mobile: "+913232323323"
    },
    {
        name:"Abc",
        age: 20,
        mobile: "+913232323323"
    },
];

// async  getUsers(){
//     const userdata = [];
//     return users;
// }

// function fetchData() {
//     try {
//         let response = await getUsers();//fetch('https://api.example.com/data'); //1
            const user = findUser('name');
//         // let data = await response.json(); //2
//         console.log(response);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// fetchData();

// CPU intensive tasks


// function task1(callback) {
//     setTimeout(() => {
//         console.log("Task 1 completed");
//         callback();
//     }, 1000);
// }
// function task2(callback) {
//     setTimeout(() => {
//         console.log("Task 2 completed");
//         callback();
//     }, 6000);
// }
// function task3(callback) {
//     setTimeout(() => {
//         console.log("Task 3 completed");
//         callback();
//     }, 3000);
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//         console.log(" All tasks completed");
//         });   
//     });
// });

// function getUsers() {
//     setTimeout(() => {
//         users
//     }, 1000);
//     return users;
//   }
  
//   function findUser(username) {
//     const users = getUsers(); // A
//     const user = users.find((user) => user.name === username); // B
//     return user;
//   }
  
//   console.log(findUser('Abc'));


function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
}

fetchData()
    .then(data => {
        console.log(data); // "Data fetched!"
    })
    .catch(error => {
        console.error(error);
    });

