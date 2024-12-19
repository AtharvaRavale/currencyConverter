from=document.querySelector('#from')
to=document.querySelector('#to')
amount=document.querySelector('amount')


clear=(e)=>{
    e.target.value=''
}


from.addEventListener('click',clear)
to.addEventListener('click',clear)


async function convert(){
   from_val=from.value;
   to_val=to.value;
   console.log(`https://v6.exchangerate-api.com/v6/3eec63895f296894597acb86/latest/${from_val}`)
   amount_val=document.querySelector('#amount').value;
   await fetch(`https://v6.exchangerate-api.com/v6/3eec63895f296894597acb86/latest/${from_val}`)
        .then(response=>response.json())
       // .then(data=console.log(data))
        .then(data=>{
            currencies =data['conversion_rates']
            rate=currencies[`${to_val}`];
            document.write(rate*amount_val)
        })
        .catch(error=>console.log(error))
    
}

