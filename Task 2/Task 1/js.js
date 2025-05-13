let answer = ["олівець", "яблуко", "зошит", "мова", "авто", "дошка", "відеокарта",
 "мишка", "вулиця","сорока"]
 let was = []
 let progress = 5
 let num = Math.floor(1 + Math.random() * 10)

 console.log(num)

 $(document).ready(function(){

 	$(".progress").knob({
 		min: 0,
 		max: 5,
 		"angleOffset": -60,
 		"angleArc": 120,
 		"readOnly": true
 	})
	startRebus(num)
		$("#btnTask1").click(function(){
			console.log(`${answer[num - 1]}`)
			if($("#inputTask1").val().toLowerCase() == `${answer[num - 1]}` ) {
				alertify.success("Right answer")
				$("#inputTask1").val("")
				progress++
				$(".progress").val(progress).trigger('change')
				was.push(num)
				console.log(was)
				if (progress < 5) {
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
			}	else {
			alertify.error("Wrong answer. Tr again")
		}
	})
 })
	



 function startRebus(arg) {
 	$("#picture").attr("src", `img/${arg}.png`)
 }

