// Title: Deliverable 1
// Author: Phil Ainsworth
// Created: 3/4/12 17:50
// Description: Trip to Virginia

var eat,
	fun,
	act,
	money=40,
	sonic=30,
	room=0,
	members=["Dad", "Mom", "Kids"],
	rides=["Tornado", "Kiddie Pool", "Kiddie Pool"];

console.log (eat, fun, act, money, sonic, room, "members: " + members.join(), " rides: " + rides.join());

act = prompt("Do we want to go eat before having fun?");
if (act === "yes") {
	console.log(act + " was the answer.");
	eat = prompt("Do we have money to go out to eat?");
	if (eat === "yes") {
		money -= sonic;
		console.log("We went to Sonic and have: $" + money + " left.");
	} else {
		money -= room;
		console.log("We saved money by eating in the room! We still have $" + money + " left!");
	};
} else {
	console.log("We are off to have fun at the waterpark!");
	fun = prompt("Does everyone want to go to the wavepool?");
	if (fun === yes) {
		
	};
};