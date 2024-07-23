class GravityPoint {
	constructor(x, y) {
		this.pos = createVector(x, y)
	}

	calculateForce(p) {
		let dir = p5.Vector.sub(this.pos, p) // direction vector
		let distSq = dir.magSq() // distance squared
		dir.normalize() // normalize direction vector
		let force = dir.mult((5000 / distSq) * 5) // gravitational force
		let perpForce = force.copy().rotate(HALF_PI).mult(4) // perpendicular force
		return force.add(perpForce) // return the total force
	}
}

let particles = []
const num = 1000
const noiseScale = 0.001
let gravityPoints = []

function setup() {
	createCanvas(screen.width, screen.height)
	for (let i = 0; i < num; i++) {
		particles.push(createVector(random(width), random(height)))
	}
	stroke(255)
	/* gravityPoints.push(new GravityPoint((1.89 * width) / 5, (1.89 * height) / 3.7)) // first gravity point
	gravityPoints.push(new GravityPoint((1.5 * width) / 2, height / 2)) */
	//add more if neededß
}

function draw() {
	/* strokeWeight(Math.floor(Math.random() * 2) */
	background(10, 20, 90, 10)
	for (let i = 0; i < num; i++) {
		let p = particles[i]
		let totalForce = createVector(0, 0)
		for (let gp of gravityPoints) {
			/* let x = Math.floor(Math.random() * 12) - 1 */
			totalForce.add(gp.calculateForce(p))
		}
		p.add(totalForce) // add total force to velocity
		point(p.x, p.y)
		let n = noise(p.x * noiseScale, p.y * noiseScale)
		let a = TAU * n
		p.x += cos(a)
		p.y += sin(a)
		if (!onScreen(p)) {
			p.x = random(width)
			p.y = random(height)
		}
	}
}
function mouseClicked() {
	console.log("mouseClicked")
}
function mouseReleased() {
	console.log("mouseReleased")
	randomSeed(millis())
	noiseSeed(millis())
}
function randomBackground() {
	background(random(255), random(255), random(255), 10)
}
function onScreen(v) {
	return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height
}

