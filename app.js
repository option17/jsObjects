let company ={
    name :`chev`,
    yearlyRevenue : 500000,
    ceo : `ollie`,
    numberOfEmployees : 47,

};

if (company[`yearlyRevenue`] >= 1000000){
    console.log (`Way to go ${company[`name`]},${company[`ceo`]}, ${company[`numberOfEmployees`]}, employees! `);
} else {
    console.log("Do better!")
}