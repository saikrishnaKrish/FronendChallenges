let cap = {
    name: "Steve",
    team:"cap",
    petersTeam: function(mem1, mem2, ...otherMan){
        console.log(`Hey ${this.name} am your neighborhood spiderman and I belong to ${this.team}'s team`);
        console.log(`I am working with ${mem1} & ${mem2} with ${otherMan}`);
    }
}
let ironMan = {
    name: "Tony", 
    team: "iron man"
}

// apply
cap.petersTeam.apply(ironMan, ["natasha", "war machine", "doctor strange", "loki"])