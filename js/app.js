const allbtn = document.getElementsByClassName("clsbtn");
let count = 0;
let seat = 8;
let clssss = 'business';


for (const btnt of allbtn) {
    btnt.addEventListener("click", function (e) {
        count = count + 1;
        seat--;
        // const seates =document.querySelectorAll('.clsbtn').innerText;
        // const clasess = document.getElementById('clases').innerText;
        // const prices =document.getElementById('price').innerText;
        // const contents =document.getElementById('content');
        // const p1 =document.createElement('p');
        // const p2 =document.createElement('p');
        // const p3 =document.createElement('p');
        // contents.appendChild(p1);
        document.getElementById('supid').innerText = count;
        document.getElementById('seatid').innerText = seat;

        //    if(count <= '4' ){
        //         btnt.style.background = "green";
        //         document.getElementById('supid').innerText=count;
        //         document.getElementById('seatid').innerText=seat;

        //     }

    })
}



// next botton work//
function play(){
    const next =document.getElementById('next_screen');
    next.classList.add('hidden');

    const next_now= document.getElementById('success_screen');
    next_now.classList.remove('hidden');
}