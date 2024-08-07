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
            // const user = findUser('name');
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
//     try {
//         setTimeout(() => {
//         console.log("Task 3 completed");
//         callback();
//     }, 3000);
//     } catch (error) {
//         console.error(error);
//         throw error
//     }    
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


// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const users = fetch('http://localhost:4000/api/users')
// return users;
//         }, 1000);
//     });
// }

// fetchData()
//     .then(users => {
//         console.log(data); // "Data fetched!"
//         return data
//     })
//     .then(
//         data2 => {
//             console.log(data2); // "Data fetched!"
//         }
//     )
//     .catch(error => {
//         console.error(error);
//     })
//     .finally();

console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 2000);

// Chaning of Promises
fetch('http://localhost:4000/api/users')
  .then(response => response.json())
  .then(data => console.log('Fetched data', data))
  .catch(error =>{
    console.error(error)
  });

console.log('End');

// Promise.all
const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'one'));
const promise2 = new Promise(resolve => setTimeout(resolve, 2000, 'two'));

Promise.all([promise1, promise2]).then(values => {
    console.log(values); // ["one", "two"]
});

// Promise.race
const promise1 = new Promise(resolve => setTimeout(resolve, 1000, 'one'));
const promise2 = new Promise(resolve => setTimeout(resolve, 2000, 'two'));

Promise.race([promise1, promise2]).then(value => {
    console.log(value); // "one"
});

// Async/Await

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
}

async function asyncFunction() {
    try {
        let data = await fetchData();
        console.log(data); // "Data fetched!"
    } catch (error) {
        console.error(error);
    }
}

asyncFunction();

