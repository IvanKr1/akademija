// let data = {
// 	"role": 2,
// 	"level": 1000,
// 	"userId": 1
// }

// let dataID = 1;

// let buildString = ''
// 		const actions = ['role', 'level', 'userId']
// 		for (const item of Object.keys(data)) {
// 			if (actions.includes(item)) {
// 				buildString =`${buildString}${item}= "${data[item]}",`
// 			}
			
// 		}
// 		let setValues = buildString.slice(0, buildString.length - 1)
		
// 		console.log(fetchedResult.data[0].role)
// const bik = `UPDATE blog.role SET ${setValues} WHERE roleId=${dataID}`;


// console.log(bik)

let data = {
    	"role": "Owner",
    	"level": 9999,
    	"userId": 1
    }


let patrik = ''
const item = ['roleId', 'role', 'level', 'userId']
		
for (const klokan of item) {
		patrik += klokan + ', '
		}
let setValues = patrik.slice(0, patrik.length - 2)


console.log(setValues)

let klokan = `INSERT INTO blog.role (${setValues}) VALUES (1, "OMod", 93845, 4)`;
console.log(klokan)