const allbtn = document.getElementsByClassName("clsbtn");
let count = 0;
let seat = 8;
let totalPrice = 0;



for (const btnt of allbtn) {
    btnt.addEventListener("click", function (e) {
        count = count + 1;
        e.target
        if (seat > 0) {
            seat--;
        }
        
        if (count <= '4' ) {
            btnt.style.background = "green";
            const seates = btnt.innerText;
            const clasess = document.getElementById('clases').innerText;
            const prices = parseFloat(document.getElementById('price').innerText.split(' '));
            const contents = document.getElementById('content');
            const tr1 = document.createElement('tr');
            tr1.innerText = contents;
            const p1 = document.createElement('td');
            p1.innerText = seates;
            const p2 = document.createElement('td');
            p2.innerText = clasess;
            const p3 = document.createElement('td');
            p3.innerText = prices;
            tr1.appendChild(p1);
            tr1.appendChild(p2);
            tr1.appendChild(p3);
            contents.appendChild(tr1);
            console.log(contents);

            totalPrice += prices;
            document.getElementById("totalprice").innerText = totalPrice;

            
            document.getElementById('supid').innerText = count;
            document.getElementById('seatid').innerText = seat;

        }
        else{
            alert(' Max only four seat select')
        }

    })
}



// next botton work//
function play() {
    const next = document.getElementById('next_screen');
    next.classList.add('hidden');

    const next_now = document.getElementById('success_screen');
    next_now.classList.remove('hidden');
}