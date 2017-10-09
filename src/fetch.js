/**
 * Created by Vasul on 21.09.2017.
 */

import axios from 'axios';

import $ from 'jquery';




// window.onload = function () {



    // console.log(fetch);
    //
    //
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((res) => res.json())
    //     .then((data)=> {
    //         // console.log(data);
    //         let output = '<h2>users</h2>';
    //         data.forEach(function (e) {
    //             // console.log(e.address);
    //             output +=
    //                 `
    //                     <ul class="list-group mb-3">
    //                         <li class="list-group-item">${e.name}</li>
    //                         <li class="list-group-item"><a href="${e.email}">${e.username}</a></li>
    //                     </ul>
    //                 `
    //         });
    //
    //         document.querySelector('.output').innerHTML = output;
    //     });



    // axios

    // axios.get('https://jsonplaceholder.typicode.com/users')
    //     .then((data)=> {
    //         console.log(data.data);
    //         let output = '<h2>users</h2>';
    //         data.data.forEach(function (e) {
    //             // console.log(e.address);
    //             output +=
    //                 `
    //                     <ul class="list-group mb-3">
    //                         <li class="list-group-item">${e.name}</li>
    //                         <li class="list-group-item"><a href="${e.email}">${e.username}</a></li>
    //                     </ul>
    //                 `
    //         });
    //
    //         document.querySelector('.output').innerHTML = output;
    //     });




    // ajax jquery




    // $.ajax({
    //     url: 'https://jsonplaceholder.typicode.com/users',
    //     method: 'GET'
    // }).then(function(data) {
    //     console.log(data);
    //     let output = '<h2>users</h2>';
    //     data.forEach(function (e) {
    //         // console.log(e.address);
    //         output +=
    //             `
    //                     <ul class="list-group mb-3">
    //                         <li class="list-group-item">${e.name}</li>
    //                         <li class="list-group-item"><a href="${e.email}">${e.username}</a></li>
    //                     </ul>
    //                 `
    //     });
    //
    //     document.querySelector('.output').innerHTML = output;
    // });

//
//     function load() {
//         let xhr = new XMLHttpRequest();
//
//         xhr.open('GET', 'https://jsonplaceholder.typesicode.com/users', true);
//         console.log(xhr.readyState);
//
//         // xhr.onload = function () {
//         //     if(this.status == 200) {
//         //         console.log(JSON.parse(this.responseText));
//         //     }
//         // };
//
//         xhr.onerror = function () {
//             throw new Error('error');
//         };
//
//         xhr.onreadystatechange = function () {
//             console.log(xhr.readyState);
//             if(this.readyState == 4 && this.status == 200) {
//
//                 let test =  JSON.parse(this.responseText);
//
//                 let output = '<h2>users</h2>';
//
//                 test.forEach(function (e) {
//                     output += `
//                                 <ul class="list-group mb-3">
//                                     <li class="list-group-item">${e.name}</li>
//                                     <li class="list-group-item"><a href="${e.email}">${e.username}</a></li>
//                                 </ul>
//                     `
//                 });
//
//                 document.querySelector('.output').innerHTML = output;
//
//
//             }
//         };
//
//
//         xhr.send();
//     }
//
//
//     document.querySelector('.load').addEventListener('click', ()=> {
//         load();
//     });
//
//
//
//
//
// }
//
//





























