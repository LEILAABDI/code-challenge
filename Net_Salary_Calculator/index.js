function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const TAX_RATE = 0.15; // 15% tax rate
    const NHIF_RATE = 0.025; // 2.5% NHIF rate
    const NSSF_RATE = 0.06; // 6% NSSF rate

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate payee (tax)
    const payee = grossSalary * TAX_RATE;

    // Calculate NHIF deductions
    const nhifDeductions = grossSalary * NHIF_RATE;

    // Calculate NSSF deductions
    const nssfDeductions = grossSalary * NSSF_RATE;

    // Calculate net salary
    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    // Output the results
    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`Benefits: ${benefits}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Payee (Tax): ${payee}`);
    console.log(`NHIF Deductions: ${nhifDeductions}`);
    console.log(`NSSF Deductions: ${nssfDeductions}`);
    console.log(`Net Salary: ${netSalary}`);
}

// Example usage
const basicSalary = 50000;
const benefits = 10000;
calculateNetSalary(basicSalary, benefits);
