// 1)Kalkulyator obyekti yaradın.
// Əsas riyazi hesablamaları yerinə yetirən və nəticəni yaddaşda saxlaya bilən kalkulyator obyekti yaradın.
//   1.Obyekt yaradın və toplama, çıxma, vurma, bölmə üçün metodlar əlavə edin.
//   Metodlar parametr kimi 2 ədəd götürür və bu ədədlər üzərində müvafiq əməliyyatın nəticəsini qaytarır.
  
// var calculator = {
//     result: 0,
//     plus (x,y) {
//         this.result = x + y
//         return this.result
//     },
//     substract (x,y) {
//         this.result = x - y
//         return this.result
//     },
//     multiply (x,y) {
//         this.result = x * y
//         return this.result
//     },
//     devide (x,y) {
//         this.result = x / y
//         return this.result
//     }
// }


// 2)Müştəri Kredit kartı ilə işləmək üçün obyekt yaradın.
  
//   1.client obyekti yaradın.
//   Kredit kartı müştərisi üçün aşağıdakı xüsusiyyətlərə malik obyekt yaradın:
// - Tam adı müştərinin (fullName).
// - Kredit limiti (creditLimit).
// - Cari balans (balans).
// - Minimum ödənişin faizi (precentOfMinPayment).


//   2.Cari balans əldə etmək üçün getBalance metodu əlavə edin.
//   getBalance metodu, balans mənfi olarsa, müştərinin balansı və ya onun borcu haqqında bir mesaj qaytarır.

//   Metodun çağırılma nümunəsi:
//   console.log(client.getBalance()).
//   Mesaj nümunələri:
//   «Balansınız 3000»,
//   «Borcunuz 2000».
  
//   3.Minimum ödəniş məbləği üçün getMinPaymant metodunu əlavə edin.
//   getMinPaymant metodu borc məbləği və minimum ödəniş faizinə əsasən formalaşan minimum ödəniş məbləği haqqında mesaj qaytarır.
//   Əgər borc yoxdursa, metod müvafiq mesajı qaytarır.

//   Metodun çağırılma nümunəsi:
//   console.log(client.getMinPaymant()).
//   Mesaj nümunələri:
//   «Minimum ödənişiniz 240»,
//   «Sizin borcunuz yoxdur».

//   4.Hesabdan pul silmək üçün withdraw metodu əlavə edin.
//   withdraw metodu cari balansı parametr kimi ötürülən pul məbləği qədər azaldır.
//   Mövcud vəsait kifayət deyilsə (cari balans və kredit limitinin cəmi), metod konsola müvafiq mesajı çıxarır.

//   5.Hesaba pul əlavə etmək üçün refill metodu əlavə edin.
//   refill metodu parametr kimi qəbul edilən məbləğ qədər balansı artırır.

// const client = {
//     fullName: '',
//     creditLimit: 0,
//     balans: -100,
//     percentOfMinPayment: 5,
//     get getBalance () {
//         return this.balans < 0 ? `Borcunuz ${this.balans}` : `Balansiniz ${this.balans}`
//     },
//     get getMinPayment () {
//         if (this.balans < 0) {
//             return `Minimum ödənişiniz ${(Math.abs(this.balans) * this.percentOfMinPayment) / 100}`
//         } else {
//             return `Sizin borcunuz yoxdu`
//         }
//     },
//     set withdraw(x) {
//         this.balans = this.balans - x
//         return this.balans > 0 ? `Sizin balansivizdan ${x} geder mebleg cixarilib, balansiniz ${this.balans}` : `Siniz balansinizda muayan geder mebleg olmagigina gore, sizin borcunuz ${this.balans}`
//     },
//     set refill(x) {
//         this.balans = this.balans + x
//         return `Balansiniz ${this.balans}`
//     }
// }

// 3)İstifadəçi tərəfindən daxil edilmiş tarixin təsvirini çıxarın.
//   İstifadəçidən tarixi «YYYY.MM.DD» formatında daxil etməyi xahiş edin. Tarixin təsvirini «12 may 2019-cu il» formatında çıxarın.
//   İstifadəçi səhv formatda dəyər daxil edərsə, «Yanlış dəyər daxil edilib» bildirişi göstərin.
// function showDate () {
//     const text = prompt('Please enter your date in suggested format "YYYY.MM.DD"')
//     const data = text.split('.')
//     const months = ['yanvar','fevral','mart','aprel','may','iyun','iyul','avgust','sentyabr','oktyabr','noyabr','dekabr']
//     let year, month, day
//     [year, month, day] = [...data]
//     if (data.length < 3 || new Date(parseInt(day),parseInt(month) - 1,parseInt(year)) === 'Invalid Date') {
//         alert('Yanlış dəyər daxil edilib bildirişi göstərin.')
//         return
//     }
//     alert(`${day} ${months[parseInt(month - 1)]} ${year}-cu il`)
// }

// showDate()

// 4)Sıfırlar və birlər massivini qəbul edən və massivdəki ikilik say sistemindəki ədədin onluq say sistemindəki halını qaytaran funksiya yazın.
// Meselen:[0, 1, 0, 0, 1, 1, 0, 1]-77 qaytarmalidi

// function fromBinary (arr) {
//     return parseInt(arr.join(''),2)
// }


// 5)Verilen massivdə ən böyük ikinci rəqəmi qaytaran funksiya yazın
// Meselen:[2,42,134,21,454,123,21]-134 qaytarmalidi

// function secondBigNum (arr) {
//     let largestValIndex = arr.indexOf(Math.max(...arr))
//     arr.splice(largestValIndex, 1)
//     let secondLargestVal = Math.max(...arr)
//     return secondLargestVal
// }


