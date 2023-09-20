// 1)Mətndə "." hərfinin ilk dəfə hansı indeksdə yerləşdiyini tapan proqram tərtib edin.

// function a (str) {
//     return str.indexOf('.')
// }

// 2)İstifadəçidən mətn daxil etməsini tələb edən və mətn elementlərini əks qaydada düzən proqram tərtib edin.

// function b (str) {
//     var str = prompt('Please enter your text')
//     str = str.split('').reverse().join('')
//     alert('Reversed text: ' + str)
//     return false
// }

// 3)Qrup yoldaşları massivi yaradın və onun üzərində əməliyyatlar aparın.
// Üç qrup yoldaşının adlarından ibarət massiv yaradın;
// Başqa bir qrup yoldaşının adını massivin sonuna əlavə edin;
// İlk adı silin;
// Massivi konsola çıxarın.

// var groupMates = ['Mirai','Jason','Michael']
// groupMates.push('Jack')
// groupMates.shift()
// console.log(groupMates)

// 4)Verilən mətn tip dəyərdəki vergülləri nöqtəli vergüllə əvəz edin.
// '32, 31, 34, 36, 31' mətni verilmişdir;
// İçindəki vergülləri nöqtəli vergüllə əvəz edin.

// var modifiedStr = '32, 31, 34, 36, 31'.replaceAll(',',';')

// 5)Anbardakı məhsul haqqında məlumatı saxlayan obyektə əsasən mağazada məhsul haqqında məlumat olan obyekt yaradın.
// Anbarda olan elementi təsvir edən stockItem obyekti təyin edin. Bunun əsasında mağazada məhsulu təsvir edən və qiymət haqqında məlumatı olan shopItem obyekti yaradın. stockItem={
//     id:17,
//     ad:'lorem',
//     miqdar:'35'
// }

// var stockItem={
//   id:17,
//   ad:'lorem',
//   miqdar:'35'
// }
// var shopItem = {}
// for(prop in stockItem) {
//   shopItem[prop] = stockItem[prop]
// }
// shopItem.price = 10

// 6)Massiv üzərində əməliyyatlar aparın.
// 10 ədəddən ibarət massiv yaradın.
// İlk 2 ədədi dəyişənlərə yazın və qalanlardan yeni massiv yaradın.
// var arr = [1,2,3,4,5,6,7,8,9,10]

// var first = arr[0]
// var second = arr[1]

// var arr2 = []
// for (let i = 2; i < arr.length; i++) {
//     arr2.push(arr[i])
// }
// console.log(arr2)

// 7)Massivin maksimal dəyərini tapın.
// 10 rəqəmdən ibarət massiv yaradın.
// Massiv deyil, arqumentlər qəbul edən Math.max funksiyasından istifadə etmeyerek onların arasında maksimumu tapın.
// spread-operatorundan istifadə edərək massiv arqumentlərini funksiyaya ötürün.

// var arr = [1,2,3,4,5,6,7,8,9,10]
// function a (q,w,e,r,t,y,u,i,o,p) {
//     let arr2 = [q,w,e,r,t,y,u,i,o,p]
//     let maxVal = 0
//     for (i = 0; i < arr2.length; i++) {
//         if (arr2[i - 1]) {
//             if (arr2[i] > arr2[i - 1]) maxVal = arr2[i]
//         }
//     }
//     return maxVal
// }

// 8)Massivin bütün elementlərinin dəyərin ikiqat artırın.
// 5 rəqəmdən ibarət massiv yaradın.
// Orijinal massivin surətini çıxarın və yeni massivin bütün elementlərini ikiqat artırın.
// Orijinal massivin dəyişmədiyini yoxlayın.

// var arr = [1,2,3,4,5]
// var arr2 = arr.slice(0)

// arr2.forEach(el => {
//     el = el*2
// })

// 9)Proqramlaşma şöbəsinin işçilərini saxlayan massiv yaradın.
// Şirkətin 10 işçisi haqqında məlumat olan massiv verilib. development massivi yaradın, hansıki proqramlaşma şöbəsinin işçilərini, və s. texniki işçiləri özündə saxlayacaq, yəni department özəlliyinin dəyəri «development» olan işçiləri.
//   [ 'Jaylee Macy', 'marketing' ],
//   [ 'John Smith', 'management' ],
//   [ 'Blossom Hartley', 'design' ],
//   [ 'Austin Carpenter', 'marketing' ],
//   [ 'Joan Knowles', 'development' ],
//   [ 'Sally Nunez', 'management' ],
//   [ 'Laurel Ward', 'development' ],
//   [ 'Lark Simon', 'marketing' ],
//   [ 'Jane Stone', 'management' ],
//   [ 'Courtney Olson', 'development' ],
// REDUCE METHODU ILE YAZIN!

// var employes = [[ 'Jaylee Macy', 'marketing' ],[ 'John Smith', 'management' ],[ 'Blossom Hartley', 'design' ],[ 'Austin Carpenter', 'marketing' ],[ 'Joan Knowles', 'development' ],[ 'Sally Nunez', 'management' ],[ 'Laurel Ward', 'development' ],[ 'Lark Simon', 'marketing' ],[ 'Jane Stone', 'management' ],[ 'Courtney Olson', 'development' ]]
// var developers = []
// employes.reduce((acc, current) => {
//   if (current[1] === 'development')  developers.push(current)
// })

// 10)Tam ədədlər massivini artan sırada düzən funksiya yazın.
// Tam ədədlər massivini qəbul edən, onu artan ardıcıllıqla sıralayan və sıralanmış massivi geri qaytaran sortArray funksiyasını yazın.
// [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];

// function sortArray (arr) { 
//   return arr.sort((a,b) => a - b)
// }

// 11)Rəqəmlər massivini parametr kimi qəbul edən və həmin massivdən konsola bütün mənfi ədədləri çıxaran funksiya yazın.

// function showNegative (arr) {
//   arr.forEach(element => {
//     if (element < 0) console.log(element)
//   });
//   return false
// }

// 12)Kebab-case -də formatında olan mətni UPPER_CASE formatına çevirmək üçün funksiya yazın.
// Kebab-case formatında mətni parametr kimi qəbul edən və onu UPPER_CASE mətninə çevirən kebabToUpper funksiyasını yazın.

// function kebabToUpper (str) {
//   return str.toUpperCase()
// }

// 13)Massivin ilk üç simvoldan ibarət elementini qaytaran funksiya yazın
// Mətnlər massivini parametr kimi qəbul edən və massivin ilk üç simvoldan ibarət elementini qaytaran funksiya yazın.

// function lengthThree (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length === 3) return arr[i]
//   }
// }

//14) Obyekt verilib. Ona növbəti metodları əlavə edin:
//   setAge — istifadəçi yaşını dəyişdirən metoddur.
//   getYearsBeforeRetirement — pensiyaya qədər istifadəçinin qalan illərinin sayını qaytaran metoddur.
// Bu metodları çağırın.

// var user = {
//   age: 40,
//   yearsBeforeRetire: 24,
//   set setAge (age) {
//     this.age = age
//   },
//   get getYearsBeforeRetire () {
//     return this.yearsBeforeRetire
//   }
// }

// user.setAge= 45
// user.getYearsBeforeRetire

// 15)Verilmiş massivin elementlərindən əlifbanın azalan sıra ilə sıralanan yeni bir massivin yaradın.
// Rəqəmlər massivi verilmişdir. Verilmiş massivin elementlərindən əlifbanın azalan sıra ilə sıralanan yeni bir massivin yaradın.
// var arr2 = []
// function descendingOrder (arr) {
//   arr2 = arr.sort()
//   return arr2
// }
