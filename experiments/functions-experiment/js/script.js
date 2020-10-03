/**************************************************
Functions Experiment
Steve Berthiaume

Here is a description of this template p5 project.
**************************************************/

function setup() {
  createCanvas(500,500);

  let hotCelsius = toCelsius(100);
  console.log(`100 degrees Fahrenheit is ${hotCelsius} degrees Celsius.`)

  let coldCelsius = toCelsius(10);
  console.log(`10 degrees Fahrenheit is ${coldCelsius} degrees Celsius.`)
}

function draw() {
  background(0);

}

function toCelsius(f) {
  let c = (f-32) * 5/9;
  return c;
}
