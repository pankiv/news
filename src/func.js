/**
 * Created by Vasul on 06.10.2017.
 */


export default {
    filter: (arr) => {
        let tmp = {};

        return arr.filter((e)=> {
            return e in tmp ? 0 : tmp[e] = 1;
        });
        return arr;

    },
    more10: (arr) => {
        return arr.filter((e)=> {
            return e > 6;
        });
        return arr;

    },

    fizzBuzz: (num) => {
        for( let i = 1; i <= num; i++) {
            if( i % 2 === 0) {
                console.log('%2' , i);
            }
        }

        return num
    },
    // some: (noteText, magazineText) => {
    //     const noteArr = noteText.split(' ');
    //     // console.log(noteArr);
    //     const magazineArr = magazineText.split(' ');
    //     // console.log(magazineArr);
    //     const magazineObj = {};
    //
    //     magazineArr.forEach(word => {
    //         if( !magazineObj[word]) {
    //             magazineObj[word] = 0
    //         }
    //         magazineObj[word]++
    //     });
    //
    //     let noteIsPossible = true;
    //     noteArr.forEach(word => {
    //         if( magazineObj[word]) {
    //             magazineObj[word]--;
    //             if( magazineObj[word] < 0) {
    //                 noteIsPossible = false;
    //             }
    //         } else {
    //             noteIsPossible = true;
    //         }
    //
    //     });
    //     console.log(noteIsPossible);
    //     return noteIsPossible;
    //
    //     // console.log(magazineObj);
    // }


    isPalindrome: (string) => {
        // debugger
        string = string.toLowerCase();
        let stringArr = string.split('');

        let validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

        const letterArr = [];

        stringArr.forEach(char => {
           if( validChars.indexOf(char) > 1) {
               letterArr.push(char)
           }
        });

        if( letterArr.join('') === letterArr.reverse().join('')) {
            return true;
        } else {
            return false;
        }


        // console.log(stringArr);
        // return string
    }
}