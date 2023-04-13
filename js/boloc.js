var sp =[
    {
        hinh:'imgProduct/casio1.jpg',
        gia: 200,
        thanhtien: '200',
        hang:'Casio',
        ten: 'Casio 525',
        loai: 'Sma',
        mota:'Bản lĩnh đàn ông',
        // trang: 1,
        // hoatdong: 'active1'
        idsanpham:1
    },
    {
        hinh:'imgProduct/casio2.jpg',
        gia: 290,
        thanhtien: '290',
        hang:'Casio',
        ten: 'Casio 371',
        loai: 'Sma',
        mota:'Thiết kế bền bỉ',
        // trang: 1,
        // hoatdong: 'active1'
        idsanpham:2
    },
    {
        hinh:'imgProduct/casio3.jpg',
        gia: 250,
        thanhtien: '250',
        hang:'Casio',
        ten: 'Casio 420',
        loai: 'Sma',
        mota:'Bản lĩnh đàn ông',
        // trang:
        idsanpham:3
    },
    {
        hinh:'imgProduct/casio4.jpg',
        gia: 250,
        thanhtien: '250',
        hang:'Casio',
        ten: 'Casio 203',
        loai: 'Sma',
        mota:'Bản lĩnh đàn ông',
        // trang: 1,
        // hoatdong: 'active1'
        idsanpham:4
    },
    {
        hinh:'imgProduct/casiobe1.jpg',
        gia: 150,
        thanhtien: '150',
        hang:'Casio',
        ten: 'Casio Kid 11',
        loai: 'Kid',
        mota:'Bản lĩnh đàn ông',
        // trang: 1,
        // hoatdong: 'active1'
        idsanpham:5
    },
    {
        hinh:'imgProduct/casiobe2.jpg',
        gia: 140,
        thanhtien: '140',
        hang:'Casio',
        ten: 'Casio Kid 21',
        loai: 'Kid',
        mota:'Bản lĩnh đàn ông',
        // trang: 1,
        // hoatdong: 'active1'
        idsanpham:6
    },
    {
        hinh:'imgProduct/ori1.jpg',
        gia: 700,
        thanhtien: '700',
        hang:'Orient',
        ten: 'Orient E',
        loai: 'Vin',
        mota:'Bản lĩnh đàn ông',
        // trang: 1,
        // hoatdong: 'active1'
        idsanpham:7
    },
    {
        hinh:'imgProduct/ori2.jpg',
        gia: 800,
        thanhtien: '800',
        hang:'Orient',
        ten: 'Orient C-200',
        loai: 'Vin',
        mota:'Bản lĩnh đàn ông',
        // trang: 1,
        // hoatdong: 'active1'
        idsanpham:8
    },
    {
        hinh:'imgProduct/ori3.jpg',
        gia: 6500,
        thanhtien: '6.500',
        hang:'Orient',
        ten: 'Orient GLS-650',
        loai: 'Vin',
        mota:'Bản lĩnh đàn ông',
        // trang: 1,
        // hoatdong: 'active1'
        idsanpham:9
    },
    {
        hinh:'imgProduct/sei1.jpg',
        gia: 2500,
        thanhtien: '2.500',
        hang:'Seiko',
        ten: 'Seiko Min',
        loai: 'Vin',
        mota:'Bản lĩnh đàn ông',
        // trang: 2,
        // hoatdong: ''
        idsanpham:10
    },
    {
        hinh:'imgProduct/sei2.jpg',
        gia: 3000,
        thanhtien: '3.000',
        hang:'Seiko',
        ten: 'Seiko Bao',
        loai: 'Vin',
        mota:'Bản lĩnh đàn ông',
        // trang: 2,
        // hoatdong: ''
    },
    {
        hinh:'imgProduct/sei3.jpg',
        gia: 4950,
        thanhtien: '4.950',
        hang:'Seiko',
        ten: 'Seiko H-200',
        loai: 'Lux',
        mota:'Bản lĩnh đàn ông',
        // trang: 2,
        // hoatdong: ''
    },
    {
        hinh:'imgProduct/hublot1.jpg',
        gia: 24500,
        thanhtien: '24.500',
        hang:'Hublot',
        ten: 'Hublot 601.OM',
        loai: 'Lux',
        mota:'Bản lĩnh đàn ông',
        // trang: 2,
        // hoatdong: ''
    },
    {
        hinh:'imgProduct/hublot2.jpg',
        gia: 7650,
        thanhtien: '7.650',
        hang:'Hublot',
        ten: 'Hublot 415.NX',
        loai: 'Lux',
        mota:'Bản lĩnh đàn ông',
        // trang: 2,
        // hoatdong: ''
    },
    {
        hinh:'imgProduct/hublot3.jpg',
        gia: 8660,
        thanhtien: '8.660',
        hang:'Hublot',
        ten: 'Hublot 550.OS',
        loai: 'Lux',
        mota:'Bản lĩnh đàn ông',
        // trang: 2,
        // hoatdong: ''
    },
    {
        hinh:'imgProduct/hublot4_2.jpg',
        gia: 39800,
        thanhtien: '39.800',
        hang:'Hublot',
        ten: 'Hublot x Ferrari',
        loai: 'Lux',
        mota:'Bản lĩnh đàn ông',
        // trang: 2,
        // hoatdong: ''
    },
]

function item(hdac=[],ctgg=[],typ=[]) {
    dsdh=document.getElementById('dsdongho'),
        dsdh.innerHTML='';
    for(var i=0;i<sp.length;i++){
        hinhdt=sp[i].hinh;
        giaban=sp[i].gia;
        giain=sp[i].thanhtien;
        hangdt=sp[i].hang;
        loaidh=sp[i].loai;
        ten=sp[i].ten;
        motasp=sp[i].mota;
        // trangsp=sp[i].trangsp;
        // hdTrang=sp[i].hoatdong;
        idsp=sp[i].idsanpham

        if (hdac.length>0){
            if(hdac.includes(hangdt)==false) continue;
        }

        if (typ.length>0){
            if(typ.includes(loaidh)==false) continue;
        }

        if (ctgg.length>0){
            if(giaban<300 && ctgg.includes('1')==false) continue;
            if(giaban>500 && giaban<1000 && ctgg.includes('2')==false) continue;
            if(giaban>2000 && giaban<5000 && ctgg.includes('3')==false) continue;
            if(giaban>5000 && ctgg.includes('4')==false) continue;
        }

        dsdh.innerHTML+=`
            <div id="${idsp}"  class="tabcontent col-lg-4 col-md-12 col-12">
            <a class="clickPro">
            <div class="dh">
                <img src="${hinhdt}" alt="">
                <div>
                    <h4>${ten}</h4>
                    <p>${motasp}</p>
                    <span class="tbol"></span>
                    <span>${giain}$</span>
                </div>
                <div> 
                </div>
            </div>
            </a>
</div>
            `
    }

}

item();

function chondh() {
    var ch=document.getElementsByClassName('thuonghieu');
    var hdac=[];
    for (var i=0;i<ch.length;i++){
        if(ch[i].checked)
            hdac.push(ch[i].value);
    }

    var chg=document.getElementsByClassName('giaban');
    var ctgg=[];
    for (var j=0;j<chg.length;j++){
        if(chg[j].checked)
          ctgg.push(chg[j].value) ;
        console.log(ctgg)
    }
    var chf=document.getElementsByClassName('loaidongho');
    var typ=[];
    for (var k=0;k<chf.length;k++){
        if(chf[k].checked)
            typ.push(chf[k].value);
    }

item(hdac,ctgg,typ);
    lap();
    lap2();
    lap3();
    lap4();
    lap5();
    lap6();
    lap7();
}

function lap() {
    var itnb=document.getElementById('1')
    var imt=document.querySelectorAll('.model')[0]
    itnb.onclick=function () {
        imt.style.display='flex'
    }

    var imb=document.querySelectorAll('.mtt')[0]
    imb.onclick=function () {
        imt.style.display='none'
    }
}


lap()

function zoom(img) {
    var src = img.src

    var ma=document.getElementsByClassName('model2')[0]
    ma.style.backgroundImage="url("+src+")"

}
function lap2() {
    var itnb=document.getElementById('2')
    var imt=document.querySelectorAll('.md11')[0]
    itnb.onclick=function () {
        imt.style.display='flex'
    }

    var imb=document.querySelectorAll('.mta')[0]
    imb.onclick=function () {
        imt.style.display='none'
    }
}


lap2()

function zoom1(img) {
    var src = img.src

    var ma=document.getElementsByClassName('model22')[0]
    ma.style.backgroundImage="url("+src+")"

}

function lap3() {
    var itnb=document.getElementById('3')
    var imt=document.querySelectorAll('.md13')[0]
    itnb.onclick=function () {
        imt.style.display='flex'
    }

    var imb=document.querySelectorAll('.mta1')[0]
    imb.onclick=function () {
        imt.style.display='none'
    }
}


lap3()

function zoom2(img) {
    var src = img.src

    var ma=document.getElementsByClassName('model23')[0]
    ma.style.backgroundImage="url("+src+")"

}

function lap4() {
    var itnb=document.getElementById('4')
    var imt=document.querySelectorAll('.md14')[0]
    itnb.onclick=function () {
        imt.style.display='flex'
    }

    var imb=document.querySelectorAll('.mta2')[0]
    imb.onclick=function () {
        imt.style.display='none'
    }
}


lap4()

function zoom3(img) {
    var src = img.src

    var ma=document.getElementsByClassName('model24')[0]
    ma.style.backgroundImage="url("+src+")"

}


function lap5() {
    var itnb=document.getElementById('5')
    var imt=document.querySelectorAll('.md15')[0]
    itnb.onclick=function () {
        imt.style.display='flex'
    }

    var imb=document.querySelectorAll('.mta3')[0]
    imb.onclick=function () {
        imt.style.display='none'
    }
}


lap5()

function zoom4(img) {
    var src = img.src

    var ma=document.getElementsByClassName('model25')[0]
    ma.style.backgroundImage="url("+src+")"

}

function lap6() {
    var itnb=document.getElementById('6')
    var imt=document.querySelectorAll('.md16')[0]
    itnb.onclick=function () {
        imt.style.display='flex'
    }

    var imb=document.querySelectorAll('.mta4')[0]
    imb.onclick=function () {
        imt.style.display='none'
    }
}


lap6()

function zoom5(img) {
    var src = img.src

    var ma=document.getElementsByClassName('model26')[0]
    ma.style.backgroundImage="url("+src+")"

}

function lap7() {
    var itnb=document.getElementById('7')
    var imt=document.querySelectorAll('.md17')[0]
    itnb.onclick=function () {
        imt.style.display='flex'
    }

    var imb=document.querySelectorAll('.mta5')[0]
    imb.onclick=function () {
        imt.style.display='none'
    }
}


lap7()

function zoom6(img) {
    var src = img.src

    var ma=document.getElementsByClassName('model27')[0]
    ma.style.backgroundImage="url("+src+")"

}









// searchBar
function itemSearch(results=[]) {
    dsdh=document.getElementById('dsdongho'),
        dsdh.innerHTML='';
    for(var i=0;i<results.length;i++){

        hinhdt=results[i].hinh;
        giaban=results[i].gia;
        hangdt=results[i].hang;
        ten=results[i].ten;



        dsdh.innerHTML+=`<div id="${idsp}"  class="tabcontent col-lg-4 col-md-12 col-12">
            <a class="clickPro">
            <div class="dh">
                <img src="${hinhdt}" alt="">
                <div>
                    <h4>${ten}</h4>
                    <p>${motasp}</p>
                    <span class="tbol"></span>
                    <span>${giain}$</span>
                </div>
                <div> 
                </div>
            </div>
            </a>
</div>`
    }


}
function srcdongho() {
    var srcitem=document.querySelector('#src').value;
    var srcfilter=sp.filter(function (item){
        return item.ten.toUpperCase().includes(srcitem.toUpperCase());
    })

    itemSearch(srcfilter);
    console.log(srcfilter)
}





// // phantrang
// // phantrang
// var tabLinks = document.querySelectorAll(".tablinks");
// var tabContent =document.querySelectorAll(".tabcontent");
//
// tabLinks.forEach(function(el) {
//     el.addEventListener("click", openTabs);
// });


// function openTabs(el) {
//     var btn = el.currentTarget; // lắng nghe sự kiện và hiển thị các element
//     var electronic = btn.dataset.electronic; // lấy giá trị trong data-electronic
//
//     tabContent.forEach(function(el) {
//         el.classList.remove("active1");
//     }); //lặp qua các tab content để remove class active
//
//     tabLinks.forEach(function(el) {
//         el.classList.remove("active1");
//     }); //lặp qua các tab links để remove class active
//
//     document.querySelector("#" + electronic).classList.add("active1");
//     // trả về phần tử đầu tiên có id="" được add class active
//
//     btn.classList.add("active1");
//     // các button mà chúng ta click vào sẽ được add class active
// }