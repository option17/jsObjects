let company ={
    name :`chev`,
    yearlyRevenue : 500000,
    ceo : `ollie`,
    numberOfEmployees : 47,
    managers : [`shaq`, `bob`, `tanya`],
};


if (company[`yearlyRevenue`] >= 1000000){
    console.log (`Way to go ${company[`name`]},${company[`ceo`]}, ${company[`numberOfEmployees`]}, employees! `);
} else { console.log (`do better!`);
    
}
let counter = 0;
while(counter < company[`managers`].length) {
    console.log(company[`managers`][counter]);
    counter = counter + 1;
}

