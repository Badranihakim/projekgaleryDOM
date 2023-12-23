// const arrayBuah = ['🥝','🍇','🍉','🍊','🍓']

// // copy array agar array utama tidak berubah (SPREAD OPERTAOR)
// const arrayBuahCopy =[...arrayBuah]

// arrayBuahCopy[0] = 'ayam'

// console.log ({arrayBuah})
// console.log ({arrayBuahCopy})
// //

// const semangka = arrayBuah.includes('🍉')
// if (semangka) {
//     const posisiSemangka = arrayBuah.indexOf('🍉')
//     // mengetahui array apa yg ada di before/after N
//     const indexBefore = posisiSemangka - 1
//     const indexAfter = posisiSemangka + 1
//     const before = arrayBuah [indexBefore]
//     const after = arrayBuah [indexAfter]
//     console.log ('sblm semangka ' + before)
//     console.log ('stlh semangka' + after)
//     // mengetahui array awal dan akhir 
//     const buahAwal = arrayBuah.shift()
//     console.log ('awal' + buahAwal)
//     const buahAkhir = arrayBuah.pop()
//     console.log ('akhir' + buahAkhir )
// }else {
//     console.log('nothing')
// }

// cara pemanggilan array yg mengandung berbeda-beda tipe data

// const arraySaya = ['🍇',7,{anggur: function ()
//     {console.log ('ini anggur, kalo kmu ngangur') },
// },['gem','food']]

// console.log (arraySaya[3][1])
// arraySaya[2].anggur()
//

// penggabungan/merge array 

// const siji = ['ayam','kambing','kuda']
// const loro = ['semur','sop','sate']

// const mergeArray = siji.concat(loro)

// console.log (mergeArray)

// memecah atau mapping list of array 

// for (list of mergeArray) console.log(list)
// mergeArray.map((value,index) => console.log(index,value))


// const datas = [
// {
// name: 'dea afrizal',
// stack: 'js',
// age: 30,
// },
// {
// name: 'budi',
// stack: 'py',
// age: 40,
// },
// {
// name: 'retno',
// stack: 'php',
// age: 23,
// },
// {
// name: 'satyo',
// stack: 'C++', 
// age: 33,
// },
// ]

// memunculkan hanya 1 tipe data contoh (nama) aja

// datas.map((values,index) => {
//     console.log(values.name)
// })

// munculin sesuai urutan usianya

// datas.sort((a,b) => a.age - b.age) .map((values) => console.log(values))

// memfilter usia 30+

// datas
//     .sort((a,b) => a.age - b.age)
//     .filter((x) => x.age >= 30) 
//     .map((values) => console.log(values))

// bantuan js kalau di dunia industri ga boleh pake itu, harus pakai algoritma sendiri

// FUNCTION 

// cara 1 keyword new function
// const sum1 = new Function('x','y','console.log(x+y)')

// cara 2 standar function
// function sum2 (x, y){
//     console.log(x + y)
// }

// cara 3 arrow function
// const sum3 = (x,y) => {
//     console.log(x + y)
// }

// sum1(1,1)
// sum2(2,2)
// sum3(3,3)

// HOISTING
// console.log(data)
// const data = 1
// kalau function diluar variabel itu tidak menggunakan hoisting

// async await njs
