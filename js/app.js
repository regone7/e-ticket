const allbtn = document.getElementsByClassName("clsbtn");
let count = 0;
let seat = 8;
let totalPrice = 0;
let i=1;



for (const btnt of allbtn) {
    btnt.addEventListener("click", function (e) {
        count = count + 1;
        if (seat > 0) {
            seat--;
        }
        btnt.setAttribute('disabled',true)

        if (count <= '4') {
            btnt.style.background = "green";
            const seates = btnt.innerText;
            const clasess = document.getElementById('clases').innerText;
            const prices = parseFloat(document.getElementById('price').innerText.split(' '));
            const contents = document.getElementById('content');
            const tr1 = document.createElement('tr');
            tr1.innerText=i;
            i++;
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
            document.getElementById('grandtotalid').innerText=totalPrice;


            document.getElementById('supid').innerText = count;
            document.getElementById('seatid').innerText = seat;     


        }
        else {
            alert(' Max only four seat select')
        }

    })
}


//discount//

const disk= document.getElementById('discountid');
disk.addEventListener('click', function(){
    const couElement=document.getElementById('diskinput').value;
    const couponcode=couElement.split(' ').join('')
    const couponcode2=couElement.split(' ').join(' ')

    if(couponcode==='NEW15'){   
        const discountamount=totalPrice*0.15;
        document.getElementById('discountedprice').innerText=discountamount;
        const grandTotal=document.getElementById('grandtotalid');
        grandTotal.innerText=totalPrice-discountamount;
        document.getElementById('diskinput').value='';
        const couponeHidden=document.getElementById('couphidden');
        couponeHidden.classList.add('hidden');
    }
    else if(couponcode2==='Couple 20'){
        const discountamount=totalPrice*0.2;
        document.getElementById('discountedprice').innerText=discountamount;
        const grandTotal=document.getElementById('grandtotalid');
        grandTotal.innerText=totalPrice-discountamount;
        document.getElementById('diskinput').value='';
        const couponeHidden=document.getElementById('couphidden');
        couponeHidden.classList.add('hidden');
    }
    else{
        alert('Invalid coupne')
    }
    // const couponeHidden=document.getElementById('couphidden');
    // couponeHidden.classList.add('hidden');

})




// next botton work//
function play() {
    const next = document.getElementById('next_screen');
    next.classList.add('hidden');

    const next_now = document.getElementById('success_screen');
    next_now.classList.remove('hidden');
}