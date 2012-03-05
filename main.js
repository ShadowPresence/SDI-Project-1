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
	members,
	rides,
	member=["Dad", "Mom", "Kids"],
	ride=["Tornado", "Kiddie Pool"];

console.log ("The following variables are not yet defined: eat, fun, act, members & rides.");
console.log("money: " + money + ", sonic: " + sonic + ", room: " + room + ", members: " + member.join() + ", rides: " + ride.join());

act = prompt("Do we want to go eat before having fun?");
if (act === "yes") {
	console.log("OK. Everyone wants to eat first.");
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
	if (fun === "yes") {
		members = member[0] + ", " + member[1] + " & the " + member[2] + " are off to the wavepool.";
		console.log(members);
	} else {
		rides = member[0] + " chose to go to the " + ride[0] + " waterslide, " + member[1] + " decided to take the " + member[2] + " to the " + ride[1] + ".";
		console.log(rides);
	};
};
console.log("Everyone had a fun day. Now it's time for bed.");