function NetSalaryCalculator(){
    const basicSalary = parseFloat(prompt("Enter your basic salary: "));
    const benefits = parseFloat(prompt("Enter your benefits: "));

    let PAYE = 0
    let nhifDeductions = 0
    let nssfDeductions = 0
    let grossSalary = 0

    nhifDeductions = 0.0275 * basicSalary

    if(basicSalary<=72000){
        nssfDeductions = 0.06 * basicSalary
    }else{
        nssfDeductions = 4280
    }

    let taxableIncome = basicSalary + benefits

    if(taxableIncome<=24000){
        PAYE = 0.1 * taxableIncome
    }else if(taxableIncome>=24000 && taxableIncome<=32333){
        PAYE = (0.1 * 24000) + ((taxableIncome - 24000)*0.25)
    }
    else if(taxableIncome>=24000 && taxableIncome<=32333){
        PAYE = (0.1 * 24000) + ((taxableIncome - 24000)*0.25)
    }
    else if(taxableIncome>=32334 && taxableIncome<=500000){
        PAYE = (0.1 * 24000) + ((32333 - 24000)*0.25) + ((grossSalary - 32334)*0.30)
    }
    else if(taxableIncome>=500001 && taxableIncome<=800000){
        PAYE = (0.1 * 24000) + ((32333 - 24000)*0.25) + ((500000 - 32333)*0.30) + ((taxableIncome - 500000)*0.325)
    }else if(taxableIncome>=800000){
        PAYE = (0.1 * 24000) + ((32333 - 24000)*0.25) + ((500000 - 32333)*0.30) + ((800000 - 500000)*0.325) + ((grossSalary - 800000)*0.35)
    }

    grossSalary = basicSalary + benefits
    const netSalary = grossSalary - (PAYE + nhifDeductions + nssfDeductions)

    console.log(`payee: ${PAYE}`)
    console.log(`NHIF Deductions: ${nhifDeductions}`)
    console.log(`NSSF Deductions: ${nssfDeductions}`)
    console.log(`Gross Salary: ${grossSalary}`)
    console.log(`Net Salary: ${netSalary}`)
}

NetSalaryCalculator()