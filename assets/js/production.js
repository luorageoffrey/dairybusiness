
const daysOfWeek = 7;
const leapYearDays = 366;

class Month {
    constructor(name, days){
        this.name = name;
        this.days = days;
    }

}

const year = [
    new Month("January", 31), 
    new Month("February", 29), 
    new Month("March", 31), 
    new Month("April", 30), 
    new Month("May", 31), 
    new Month("June", 30), 
    new Month("July", 31), 
    new Month("August", 31), 
    new Month("September", 30), 
    new Month("October", 31), 
    new Month("November", 30), 
    new Month("December", 31), 

]



// get document variables
const milkAmount = document.getElementById('milk-amount')


const shedInputs = document.getElementById('form-inputs');


const dailyReport = document.getElementById('daily-report')

const shedA = document.getElementById('shed-a')
const shedB = document.getElementById('shed-b')
const shedC = document.getElementById('shed-c')
const shedD = document.getElementById('shed-d')


// event listener for form button
shedInputs.addEventListener('submit', (e) => {
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
    
        
        // // output sales
        // weeklySales.innerHTML = dailyTotal.innerHTML * 45 *7
        // yearlySales.innerHTML = dailyTotal.innerHTML * 45 * 365
        // leapYearSales.innerHTML = dailyTotal.innerHTML * 45 * 366
        
        
    } else {
        confirm("fill form correctly")
        console.log("fill form appropriately")
    }

    shedA.value = '';
    shedB.value = '';
    shedC.value = '';
    shedD.value = '';
}


//income over time section
const incomeInputs = document.getElementById('income-inputs');
var reportSection = document.getElementById('report-section')

incomeInputs.addEventListener('submit', (event)=>{
    event.preventDefault();

    //fetch data

    let duration = document.getElementById("duration");

    let selling_price = document.getElementById("selling-price-input");

    if(selling_price.value == ''){

        alert("enter selling price value");
        return;
    }

    //alert(duration.value)

    calcIncomeReport(selling_price.value, duration.value);
}

)

function calcIncomeReport(selling_price, time){

    console.log(time)


    if(time == "week"){

        let weeklyIncome = daysOfWeek * selling_price;

        let yearlyIncome = leapYearDays * selling_price;

        document.getElementById("weekly-income").innerHTML = weeklyIncome;

        document.getElementById("yearly-income").innerHTML = yearlyIncome;

    }else if(time == "month"){

        reportSection.innerHTML = "month"

    }else if(time == "year"){

        let template = "";
        let annualTotal = 0;

        year.forEach(element => {

            let monthName = element.name;
            let monthlyTotal = element.days * selling_price;

            template =  template +  `<p> Your income for ${monthName} is ${monthlyTotal}</p>`

            annualTotal = annualTotal + monthlyTotal;           


            
        });

        template = template + `<p> Your yearly income will be Ksh ${annualTotal} </p>`



        reportSection.innerHTML = template

    }

}