
//==================== NAME : GHULAM MURTAZA====== THURSDAY CLASS 9AM==========//
/*let people={
    friends:[] as{firstName:string;lastName:string;id:string;}[]
};
let friend1 ={
    firstName:"saleem",
    lastName:"khan",
    id:"11"
};
let friend2={
    firstName:"Rizwan",
    lastName:"Malik",
    id:"12"
};
let friend3={
    firstName:"Raffat",
    lastName:"Mehmood",
    id:"13"
};
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
console.log(people)
*/
//=================Manipulating an Array: Rearranging Words==============//
/*const scrambledArray:(string|number|boolean)[]= ["student", "of",true, 123, "am", "a", "GIAIC", "I"]; 

let temp:(string|number|boolean)[]=[];
temp.push(scrambledArray[7]);
temp.push(scrambledArray[4]);
temp.push(scrambledArray[5]);
temp.push(scrambledArray[0]);
temp.push(scrambledArray[1]);
temp.push(scrambledArray[6]);
let finalResult = temp.join(' ')

console.log(finalResult)
*/
//================= Company Product Catalog=============//
/*const inventory:{name:string;model:number;cost:number;quantity:number}[]=[];
let product1={
    name:"Honda civic",
    model:2022,
    cost: 2000000,
    quantity:20
};
let product2={
    name:"Mercedez Benz",
    model:2023,
    cost: 3000000,
    quantity:30
};
let product3={
    name:"Hyundai",
    model:2024,
    cost: 1000000,
    quantity:10
};
inventory.push(product1)
inventory.push(product2)
inventory.push(product3)
console.log(inventory)
console.log(inventory[2].quantity)
inventory.push({name:"suzuki",model:2021,cost:150000,quantity:35})
console.log(inventory)
console.log(inventory[3].cost)
inventory.splice(0,1)
console.log(inventory)
*/
//================= Company Product Catalog=============//
interface Student{
    name:string,
    seniorStauts:boolean,
    assigmentCompleted:boolean

}
let students:Student[]=[
    {name:"salman",seniorStauts:true, assigmentCompleted:true},
    {name:"saad",seniorStauts:false, assigmentCompleted:false},
    {name:"saleem",seniorStauts:true, assigmentCompleted:true},
    {name:"Haider",seniorStauts:false, assigmentCompleted:false},
]


    students.forEach(function (findSeniorStudent){

 
    if(findSeniorStudent.seniorStauts=== true)
      console.log("This student is completed all his assignment,Hence given Senior Status")
    else if (findSeniorStudent.seniorStauts===false)
        
        console.log("This student is not completed all his assignment")

   console.log(findSeniorStudent)
 
    
  
});
