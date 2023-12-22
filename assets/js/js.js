let i1 = document.getElementById('i1')
    let i2 = document.getElementById('i2')
    let i3 = document.getElementById('i3')
    let i4 = document.getElementById('i4')
    let t1 = document.getElementById('t1')
    let t2 = document.getElementById('t2')
    let t3 = document.getElementById('t3')
    let t4 = document.getElementById('t4')
    let cart=document.getElementById('cart')
    i1.focus()
    i1.addEventListener('keyup', (e) => {
        let val = e.target.value
        t1.innerHTML = val

        if(
            (val.search(/[a-z]/))>=0||
            (val.search(/[ا-ی]/))>=0
        ){
            val1=val.slice(0,val.length-1)
            e.target.value=val1          
        }

        if (e.keyCode != 8) {
            if (
                i1.value.length < 25
            ) {
                if (
                    (i1.value).length == 4 ||
                    (i1.value).length == 11 ||
                    (i1.value).length == 18
                ) {
                    i1.value += ' - '
                }
            } else {
                i2.focus()
            }
        }
    })

    i2.addEventListener('keyup', (e) => {
        let val = e.target.value
        t2.innerHTML = val
        if(
            (val.search(/[0-9]/))>=0
        ){
            val1=val.slice(0,val.length-1)
            e.target.value=val1    
        } 
        if (e.keyCode == 13) {
        i3.focus()
    }      
    })
    i3.addEventListener('keyup', (e) => {
        let val = e.target.value
        t3.innerHTML = val
        console.log(val)

        if(
            (val.search(/[a-z]/))>=0||
            (val.search(/[ا-ی]/))>=0
        ){
            val1=val.slice(0,val.length-1)
            e.target.value=val1          
        }

        if (e.keyCode != 8) {
            if (
                i3.value.length < 7
            ) {
                if (
                    (i3.value).length == 2
                ) {
                    i3.value += ' / '
                }
            } else {
                cart.style.transform='perspective(800px) rotateY(180deg)'
                i4.focus()
            }
        }
    })
    i4.addEventListener('keyup', (e) => {
        let val = e.target.value
        t4.innerHTML = val
        if(
            (val.search(/[a-z]/))>=0||
            (val.search(/[ا-ی]/))>=0
        ){
            val1=val.slice(0,val.length-1)
            e.target.value=val1          
        }
    })