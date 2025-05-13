let timeStorage = localStorage
let time

if (timeStorage.getItem("time") != null) {
	time = parseInt(timeStorage.getItem("time"))
} else {
	time = 300
	timeStorage.setItem("time", time)
}


let answer = [
	["гаррі поттер", "harry potter"],
	["губка боб", "sponge bob"],
	["пірати", "пірати карибського моря"],
	["сімсони", "the simpsons"],
	["зоряні війни", "star wars"],
	["lion king", "король лев"],
	["frozen", "холодне серце"],
	["shrek", "шрек"],
	["shrek", "шрек"],
	["rocky", "роккі"],
	["індіана джонс", "indiand jones"],
	["один вдома", "home alone"],
	["термінатор", "terminator"],
	["назад у майбутнє", "back to the future"],
	["мисливці за привидами", "ghost busters"]
]
 let was = []
 let progress = 0
 let num = Math.floor(1 + Math.random() * 10)


 $(document).ready(function(){

 	$(".progress").knob({
 		"min": 0,
 		"max": 10,
 		"angleOffset": -60,
 		"angleArc": 120,
 		"readOnly": true
 	})

 	$(".time").knob({
 		min: 0,
 		max: 300,
 		"angleOffset": -60,
 		"angleArc": 120,
 		"readOnly": true
 	})

 	$(".start").click(function() {
 		$(".start").css('display', 'none')
 		$(".taskProgres, .timeProgres, .sound, .answer").css('display', 'block')
 		startRebus(num)
 		startTime()
 	})

	$("#btnTask1").click(function(){
		if(answer[num - 1].indexOf($("#inputTask1").val().toLowerCase()) != -1 ) {
		console.log(`${answer[num - 1]}`)
			alertify.success("Right answer")
			$("#inputTask1").val("")
			progress++
			$(".progress").val(progress).trigger('change')
			was.push(num)
			if (progress < 10) {
				do {
					num = Math.floor(1 + Math.random() * 10)
				} while (was.includes(num))
				console.log(num)
				startRebus(num)
			} else {
				$(".img, .answer, .taskProgres").css({
					'display': 'none'
				})

				$("#nextTask").css({
					'display': 'flex'
				})
			}	
		}   else {
		alertify.error("Wrong answer. Tr again") }
		
	})
 })
	



 function startRebus(arg) {
 	$("#picture").attr("src", `img/${arg}.png`)
 }

 function startTime() {
 	setInterval(function() {
	 		time = parseInt(localStorage.getItem("time")) - 1
	 		$(".time").val(time).trigger('change')
	 		if (time == 0) {
	 			alertify.error("time is out")
	 			setTimeout(()=>window.open("../Task 1/index.html", "_self", false), 2000)
	 			localStorage.removeItem("time")
	 		} else if (time > 0) {
	 			localStorage.setItem("time", time)
	 		}
 		localStorage.setItem("time", time)
 	}, 1000)
 }

