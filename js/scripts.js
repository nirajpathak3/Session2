
            // var content = document.getElementsByTagName("main");
            // // alert(content);

            // document.getElementsByTagName("header")[0].children[1].style.display = 'none';

            try {

                var str1;
                let str2;
                const str3 = 'abcde';
                const arr = ['a','b','c','d','e'];

                console.log(str3[2]);
                console.log(arr[3])

                const page = 10;

                const obj = {};

                let a = 20;

                arr.push(2);
                // console.log(b);
                return ""
                
            } catch (error) {
                console.error('Error on ---', error);
                return [];
            }



            const users = [
                {
                    name:"Abc",
                    age: 20,
                    mobile: "+913232323323",
                    address: {
                        hno: "111",
                        city: "abcs",
                        state: "sdsad"
                    }
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


            {
                taskId:"",
                userId:"",
                title:"",
                description:"",
                assignee:"",
                assignTo:"",
                status:""
            }

            let result = "<table>";
            var i = 1 ;
            users.forEach(user => {
                result += user.name + " \n";

                result += '<tr>'+
                '<td>'+( i++ )+'</td>'+
                '<td>'+user.name+'</td>'+
                '</tr>';
            });

            console.log(result);


            // for( i in users){
            //     result += users[i].name + " \n";

            //     result += '<tr>'+
            //     '<td>'+i+'</td>'+
            //     '<td>'+users[i].name+'</td>'+
            // '</tr>';
            // }

            
            // function template()
            

            // function example(){
            //     a = 1;
            //     console.log(a)
            //     function example2(a){
            //         a = 2;
            //         console.log(a)
            //     }
            //     console.log(a)
            // }

            // example();

            // console.log((123).toString(), typeof (123).toString())

            // console.log(a > 10);

            if(!users.length){
                console.log('False')
            }else{
                console.log('True')
            }

          