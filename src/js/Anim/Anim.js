/**
 * Created by Vasul on 29.09.2017.
 */



import React from 'react';
import $ from 'jquery';



const Anim = () => {
    return (
        <main className='main'>
            <div className='w50'>
                <div className='program-img'>
                    <div className='glitch_wrap'>
                        <img src='./dist/assets/images/img1.png' alt='' className='glitch glitch-1'/>
                        <img src='./dist/assets/images/img1.png' alt='' className='glitch glitch-2'/>
                        <img src='./dist/assets/images/img1.png' alt='' className='glitch glitch-3'/>
                    </div>
                </div>
            </div>
            <div className='w50'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa eum facere iste nam quo repellat velit vero. Atque corporis deserunt iusto natus quibusdam quis sapiente soluta veniam voluptates voluptatibus!
            </div>
            <div className='w50'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias assumenda autem, beatae consequuntur delectus doloremque dolores doloribus ducimus et eum incidunt mollitia necessitatibus numquam omnis porro quasi quos recusandae similique?
            </div>
            <div className='w50'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab culpa eum facere iste nam quo repellat velit vero. Atque corporis deserunt iusto natus quibusdam quis sapiente soluta veniam voluptates voluptatibus!
            </div>
        </main>
    )
};



export default Anim;




setInterval(function () {
    $('.glitch_wrap').toggleClass('animated');
}, 2000);
