
let countrySelect=document.querySelector('.countrySelect')
let citySelect=document.querySelector('.citySelect')
let cityObject={
    Iran: ['tehran','tabriz','shiraz'],
    Turkey: ['ankara','izmir','adana'],
    US: ['shikago','newyork','menfis']
}
countrySelect.addEventListener('change',function () {
    if(countrySelect.value==='Please Select'){
        citySelect.innerHTML=''
        citySelect.innerHTML+='<option>Select City</option>'
    }else{
        let countryInputValue=countrySelect.value;
        let cityOfCountry=cityObject[countryInputValue]
        citySelect.innerHTML=''
        cityOfCountry.forEach(function (city) {
            citySelect.innerHTML+='<option>'+city+'</option>'
        })
    }
})





