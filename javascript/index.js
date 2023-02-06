// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
// getInstruction("mashedPotatoes", 0, (step1) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 1, (step2) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 2, (step3) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 3, (step4) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
// }, (error) => console.log(error));

// getInstruction("mashedPotatoes", 4, (step5) => {
//   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
//   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
// }, (error) => console.log(error));


// Iteration 1 - using callbacks
// ...
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
    getInstruction("mashedPotatoes", 2, (step3) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;

      getInstruction("mashedPotatoes", 3, (step4) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
        getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;

          let li = document.createElement("li");
          document.querySelector("#mashedPotatoes").appendChild(li);
          li.innerHTML = `Mashed potatoes are ready!`;

          document.querySelector("#mashedPotatoesImg").removeAttribute("hidden")
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));



// Iteration 2 - using promises
obtainInstruction('steak', 0)

  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`

    return obtainInstruction('steak', 1)
    //  ... Your code here
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 2);
    //  ... Your code here
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction('steak', 3)
    //  ... Your code here
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 4)
    //  ... Your code here
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction('steak', 5)
    //  ... Your code here
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction('steak', 6)
    //  ... Your code here
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    return
    //  ... Your code here
  })
  .then((step8) => {
    document.querySelector("#steak").innerHTML += `<li> Steak is ready! </li>`

    document.querySelector("#steakImg").removeAttribute("hidden")

  })

//  ... Your code here

// ... Your code here

// Iteration 3 using async/await

async function makeBroccoli() {
  try {
    let dir1 = await obtainInstruction(`broccoli`, 0);
    document.querySelector("#broccoli").innerHTML += `<li>${dir1}</li>`

    let dir2 = await obtainInstruction(`broccoli`, 1);
    document.querySelector("#broccoli").innerHTML += `<li>${dir2}</li>`

    let dir3 = await obtainInstruction(`broccoli`, 2)
    document.querySelector("#broccoli").innerHTML += `<li>${dir3}</li>`

    let dir4 = await obtainInstruction(`broccoli`, 3)
    document.querySelector("#broccoli").innerHTML += `<li>${dir4}</li>`

    let dir5 = await obtainInstruction(`broccoli`, 4)
    document.querySelector("#broccoli").innerHTML += `<li>${dir5}</li>`

    let dir6 = await obtainInstruction(`broccoli`, 5)
    document.querySelector("#broccoli").innerHTML += `<li>${dir6}</li>`

    let dir7 = await obtainInstruction(`broccoli`, 6)
    document.querySelector("#broccoli").innerHTML += `<li>${dir7}</li>`

    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`


    document.querySelector("#broccoliImg").removeAttribute("hidden")

    // ... Your code here
  }
  catch (err) { };
}

makeBroccoli();
// ...

// Bonus 2 - Promise all

let p1 = obtainInstruction(`brusselsSprouts`, 0);
let p2 = obtainInstruction(`brusselsSprouts`, 1);
let p3 = obtainInstruction(`brusselsSprouts`, 2);
let p4 = obtainInstruction(`brusselsSprouts`, 3);
let p5 = obtainInstruction(`brusselsSprouts`, 4);
let p6 = obtainInstruction(`brusselsSprouts`, 5);
let p7 = obtainInstruction(`brusselsSprouts`, 6);
let p8 = obtainInstruction(`brusselsSprouts`, 7);

Promise.all([p1, p2, p3, p4, p5, p6, p7, p8])
  .then(res => {
    res.forEach(instruction => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li> ${instruction} </li>`;
    });
    document.querySelector("#brusselsSprouts").innerHTML += `<li> Brussels sprouts are ready! </li>`;

    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");


  })

// ...
