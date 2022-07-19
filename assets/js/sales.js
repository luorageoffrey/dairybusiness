
// get document variables
const milkAmount = document.getElementById('milk-amount')
const inputs = document.getElementById('form-inputs');
const dailyReport = document.getElementById('daily-report')
const shedA = document.getElementById('shed-a')
const shedB = document.getElementById('shed-b')
const shedC = document.getElementById('shed-c')
const shedD = document.getElementById('shed-d')


// event listener for form button
inputs.addEventListener('submit', (e) => {
    e.preventDefault()

    totalProduction();

    
})

let totalProduction = () => {
    if (shedA != '' && shedB != '' && shedC != '' && shedD != '') {
        //display input values in daily report
        document.getElementById('shedA-report').innerHTML = shedA.value
        document.getElementById('shedB-report').innerHTML = shedB.value
        document.getElementById('shedC-report').innerHTML = shedC.value
        document.getElementById('shedD-report').innerHTML = shedD.value


        // display daily total 
        
        let dailyTotal = document.getElementById('daily-total') 
        dailyTotal.innerHTML = Number(shedA.value) + Number(shedB.value) + Number(shedC.value) + Number(shedD.value)
    
        
        // output sales
        weeklySales.innerHTML = dailyTotal.innerHTML * 45 *7
        yearlySales.innerHTML = dailyTotal.innerHTML * 45 * 365
        leapYearSales.innerHTML = dailyTotal.innerHTML * 45 * 366
        
        
    } else {
        console.log('inputs cannot be empty!')
    }

    shedA.value = '';
    shedB.value = '';
    shedC.value = '';
    shedD.value = '';
}