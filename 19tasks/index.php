<?php
// 1) Bir stringdəki bütün böyük hərfləri kiçik hərflərə çevirin.
// verilmiş bir string, məsələn, "Hello WORLD", bütün böyük hərfləri kiçik hərflərə çevirən bir PHP kodu yazın. 
// Bu kod, stringdəki böyük hərfləri kiçik hərflərlə əvəz edəcək və nəticə olaraq "hello world" çap edəcək. 

// $str = "Hello WORLD";

// $str = strtolower($str);

// echo $str;

// 2) Bir stringdəki boşluqları çıxarın.

// Verilmiş bir string, məsələn, "Hello World", boşluqları çıxaran bir PHP kodu yazın. 
// Bu kod, stringdəki boşluqları siləcək və nəticə olaraq "HelloWorld" çap edəcək.

// $str = "Hello World";

// $str = str_replace(" ","",$str);

// echo $str;

// 3) Bir stringdəki sözlərin yerlərini dəyişin.

// Verilmiş bir string, məsələn, "Salam Dünya", stringdəki sözləri dəyişən bir PHP kodu yazın. 
// Bu kod, stringdəki sözləri dəyişəcək və nəticə olaraq "Salam Dünya" çap edəcək.

// $str = "Salam Dünya";

// $arr = explode(" ",$str);

// $arr = array_reverse($arr);

// $str = implode(" ",$arr);

// echo $str;

// 4) Verilmiş bir array-ə, məsələn, ["apple", "banana"], "cherry" elementini əlavə edin. 
// Daha sonra  array-dən son elementi silin. Nəticəni çap edin.

// $arr = ["apple", "banana"];

// array_push($arr,"cherry");

// array_splice($arr,count($arr) - 1,1);

// print_r($arr);

// 5) Düzbucaqlının sahəsini hesablamaq.

// Düzbucaqlının uzunluqlarını verilən bir PHP kodu ilə hesablamaq üçün funskiya yazın. 
// Düzbucaqlının sahəsinin formulu A = a * h / 2-dir, burada "a" uzunluq və "h" hündürlükdür.

// function calculateRectangleLength ($a, $h) {
//     return $a * $h / 2;
// }

// $result = calculateRectangleLength(6,2);

// echo $result;

// 6) Pillələri cəmləmək.

// Verilmiş bir ədədin pillələrini cəmləmək üçün bir PHP kodu yazın. Məsələn, ədəd 1234 verilsə, 1 + 2 + 3 + 4 = 10 olacaq. Funskiya yazın

// function sum ($carry, $item) {
//     $carry += $item;
//     return $carry;
// }

// function powerOf ($num) {
//     $str = strval($num);

//     $arr = str_split($str);
//     return $arr;
// }

// $result = array_reduce(powerOf(1234), "sum");
// echo $result;

// 7) Sadə ədədləri tapmaq.

// Verilmiş bir aralıqdakı bütün sadə ədədləri tapmaq üçün bir PHP kodu yazın. Sadə ədəd, yalnız 1 və özünə bölünən ədədlərdir. 
// Verilmiş aralıqda bütün sadə ədədləri tapmaq üçün algoritma istifadə edə bilərsiniz.


// function isPrime($num) {
//     if ($num <= 1) {
//         return 0;
//     }
//     for ($i = 2; $i < $num / 2; $i++) {
//         if ($num % $i === 0) {
//             return 0;
//         }
//     }
//     return 1;
// }

// $result = isPrime(10) === 1 ? 'Sadə ədəd' : 'Kompleks ədəd';

// echo $result;

// 8) Faktorialı tapan bir funskiya yazın( for və ya rekursiv funksiya ilə)

// function findFactorial ($x) {
//     $factorial = 1;
//     for ($i = 1; $i < $x; $i++) { 
//         $factorial = $factorial * ($i + 1);
//     }
//     return $factorial;
// }

// $result = findFactorial(7);

// echo $result;

// 9) 10 nəfər tələbənin adını ehtiva edən massiv yaradın. Məsələn:

// $students = [
// 	['name' => 'Murad', 'surname' => 'Agamedov']
// 	['name' => 'Elxan', 'surname' => 'Əliyev']]
// ]
// daha 8 tələbə daxil edin

// bu 8 tələbənin adı table html elementində sıralansın.

// name     surname
// Murad	 Agamedov


// yuxarıdakı tipdə


// $students = array(
//     array('name' => 'Murad','surname' => 'Agamedov'),
//     array('name' => 'Elxan', 'surname' => 'Əliyev'),
//     array('name' => 'Akif', 'surname' => 'Agabekov'),
//     array('name' => 'Timur', 'surname' => 'Ismaylov'),
//     array('name' => 'Mehemmed', 'surname' => 'Hajiyev'),
//     array('name' => 'Ali', 'surname' => 'Ismaylov'),
//     array('name' => 'Jessy', 'surname' => 'McWillow'),
//     array('name' => 'Babek', 'surname' => 'Ibragimov'),
//     array('name' => 'Donald', 'surname' => 'Trump'),
//     array('name' => 'Joe', 'surname' => 'Biden')
// );
?>
<!-- <table>
    <tr>
        <th>Name</th>
        <th>Surname</th>
    </tr>
    <?// foreach($students as $student) { ?>
    <tr>
        <td><?php  //echo $student['name'] ?></td>
        <td><?php // echo $student['surname'] ?></td>
    </tr>
    <?php// } ?>
</table> -->

<?php 

// 10) Verilmiş bir array-də, məsələn, [1, 2, 3, 4, 2, 5, 1, 6, 3], təkrarlanan elementləri tapmaq üçün bir PHP kodu yazın

// function findRepeatedNums ($arr) {
//     $compareArr = array();
//     $repeatedNums = array();
//     for ($i = 0; $i < count($arr); $i++) { 
//         if (!in_array($arr[$i],$compareArr)) {
//             array_push($compareArr, $arr[$i]);
//         } else {
//             array_push($repeatedNums, $arr[$i]);
//         }
//     }
//     return $repeatedNums;
// }

// $result = findRepeatedNums([1, 2, 3, 4, 2, 5, 1, 6, 3]);

// print_r($result);

// 11) İki verilmiş array, məsələn, [1, 2, 3, 4, 5, 7] və [3, 4, 5, 6, 7] arasında kəsişmə elementlərini tapmaq üçün bir PHP kodu yazın. 
// Bu kod, iki array-in kəsişmə elementlərini ayrı bir array-də cəmləyəcək və nəticə olaraq kəsişmə elementlərini çap edəcək. 
// Yəni hər ikisində olan 

// function sum ($carry, $item) {
//     $carry += $item;
//     return $carry;
// }

// function sameNumsSum ($arr1,$arr2) {
//     $sameNums = array();
//     if (count($arr1) > count($arr2)) {
//         for ($i = 0; $i < count($arr1);$i++) {
//             if (in_array($arr1[$i],$arr2)) {
//                 array_push($sameNums, $arr1[$i]); 
//             }
//         }
//     } else {
//         for ($i = 0; $i < count($arr2);$i++) {
//             if (in_array($arr2[$i],$arr1)) {
//                 array_push($sameNums, $arr2[$i]); 
//             }
//         }
//     } 
//     $sum = array_reduce($sameNums, "sum");
//     return $sum;
// }

// $result = sameNumsSum([1, 2, 3, 4, 5, 7], [3, 4, 5, 6, 7]);

// print_r($result);

// 12) Verilmiş bir array, məsələn, ["Hello", " ", "World"], bütün elementləri bir araya gətirən bir PHP kodu yazın. 
// Bu kod, array-dəki elementləri birləşdirəcək və nəticə olaraq "Hello World" çap edəcək.

// $arr = ["Hello", " ", "World"];

// $result = join("",$arr);

// echo $result;


// 13) funksiya yazın. O funskiyaya tələbənin yığdığı bal daxil ediləcək və onun balının hərf qarşılığı qaytarılacaq
// Məsələn funskiya adı-studentsAssessment
// o funksiyaya 86 qiyməti daxil ediləcək
// studentsAssessment(86)
// echo studentsAssessment(86) - BA qaytarmalıdır
// şərtlər:

// 0-54 = FF
// 55-59 = FD
// 60-69 = DD
// 70-74 = CC
// 75-79 = CB
// 80-84 = BB
// 85-89 = BA
// 90-100 = AA

// function studentsAssessment($points) {
//     if ($points >= 0 && $points <= 54) {
//         return 'FF';
//     } elseif ($points >= 55 && $points <= 59) {
//         return 'FD';
//     }  elseif ($points >= 60 && $points <= 69) {
//         return 'DD';
//     } elseif ($points >= 70 && $points <= 74) {
//         return 'CC';
//     } elseif ($points >= 75 && $points <= 79) {
//         return 'CB';
//     } elseif ($points >= 80 && $points <= 84) {
//         return 'BB';
//     } elseif ($points >= 85 && $points <= 89) {
//         return 'BA';
//     } elseif ($points >= 90 && $points <= 100) {
//         return 'AA';
//     }
// }

// $result = studentsAssessment(86);

// echo $result;

// 14) istifadəçidən çəki və boyunu istəyən inputlar hazırlayın. Yenə də server.php-ə sorğu getsin. 
// (Bədən kütlə indeksinin(BKI) hesablanma qaydası: çəki/boy kvadratı)
// BKI şərtlərinə görə aşağıdakılar yazılsın:
// BKI < 18.5 - az çəkili
// BKI 18.5-24.9 arasındadırsa - normal kilolu
// BKI 25-29.9 arasındadırsa - artıq çəkili
// BKI 30-39.9 arasındadırsa - şişman
// BKI > 40 - həddən artıq çəkili

?>
<form action="server.php">
    <input type="text" name="weight">
    <input type="text" name="height">
    <input type="submit">
</form>
