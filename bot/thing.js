const depth = 23;

let distance = 0;
let i = 0;

while (distance < depth) {
	distance += 7;
	i++;
	if (distance > depth) {
		console.log(i);
		break;
	}
	distance -= 2;
}