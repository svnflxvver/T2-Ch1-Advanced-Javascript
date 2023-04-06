let myRole =
{
    marketing: [
      {
        name: "Budi",
        salary: 5000000,
  }, {
        name: "Agus",
        salary: 4500000,
      },
    ],
    engineer: {
  frontend: [ {
          name: "Suci",
          salary: 8500000,
        },
        {
          name: "Lukito",
          salary: 7000000,
  }, ],
  backend: [ {
          name: "Bustomi",
          salary: 9500000,
        },
  ], devops: [
        {
          name: "Paul",
          salary: 9000000,
  }, ],
  }, };


function getTotalSalary(myRole) {
    let total = 0;
    for (const key in myRole) {
      if (typeof myRole[key] === "object") {
        total += getTotalSalary(myRole[key]);
      } else if (key === "salary") {
        total += myRole[key];
      }
    }
    return total;
  }

getTotalSalary(myRole)