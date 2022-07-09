let company ={
    name :`chev`,
    yearlyRevenue : 500000,
    ceo : `ollie`,
    numberOfEmployees : 47,
    managers : [
        {
            name:`bob`,
            salary:200,
            is_senior: false

        },
        {
            name:`tanya`,
            salary:400,
            is_senior: false

        },
        {
            name:`dawn`,
            salary:600,
            is_senior: true

        }
    ],
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

