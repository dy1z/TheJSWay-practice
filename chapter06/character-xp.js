// TODO: create the character object here
const aurora = {
    health: 150,
    strength: 25,
    xp: 0,


describe() {
    return `Aurora has ${this.health} points, ${this.strength} as strength and ${this.xp} XP points`;
}
};
// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp = aurora.xp + 15;

console.log(aurora.describe());