// let timeStorage = localStorage
// let time

// if (timeStorage.getItem("time") != null) {
// 	time = parseInt(timeStorage.getItem("time"))
// } else {
// 	time = 300
// 	timeStorage.setItem("time", time)
// }

// let progress = 0

// let cards = [
// 	{
// 		name: "php",
// 		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/250px-Webysther_20160423_-_Elephpant.svg.png",
// 		id: 1
// 	},
// 	{
// 		name: "css3",
// 		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
// 		id: 2
// 	},
// 	{
// 		name: "html5",
// 		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
// 		id: 3
// 	},
// 	{
// 		name: "jquery",
// 		img: "https://miro.medium.com/v2/resize:fit:860/0*eFomJUFua8tuqe8g.png",
// 		id: 4
// 	},
// 	{
// 		name: "php",
// 		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/250px-Webysther_20160423_-_Elephpant.svg.png",
// 		id: 5
// 	},
// 	{
// 		name: "javascript",
// 		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png",
// 		id: 6
// 	},
// 	{
// 		name: "node",
// 		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
// 		id: 7
// 	},
// 	{
// 		name: "C#",
// 		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/1200px-C_Sharp_Logo_2023.svg.png",
// 		id: 8
// 	},
// 	{
// 		name: "c++",
// 		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
// 		id: 9
// 	},
// 	{
// 		name: "python",
// 		img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
// 		id: 10
// 	},
// 	{
// 		name: "F#",
// 		img: "https://upload.wikimedia.org/wikipedia/commons/6/66/F_Sharp_logo.svg",
// 		id: 11
// 	},
// 	{
// 		name: "mysql",
// 		img: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png",
// 		id: 12
// 	},
// ]

// $(document).ready(function() {
// 	$(".progress").knob({
// 		"min": 0,
// 		"max": 10,
// 		"angleOffset": -60,
// 		"angleArc": 120,
// 		"readOnly": true
// 	})

// 	$(".time").knob({
// 		"min": 0,
// 		"max": 300,
// 		"angleOffset": -60,
// 		"angleArc": 120,
// 		"readOnly": true
// 	})

// 	$(".start").click(function() {
// 		$(".start").css('display', 'none')
// 		$(".taskProgress, .timeProgress, .sound, .answer").css('display', 'block')
// 		startTime()
// 		fillBoard()
// 	})
// })

// function fillBoard() {
// 	let board = [...cards, ...cards]
// 	for (i = 0; i< board.length; i++) {
// 		let cardHTML = 
// 		`<div class="card" data-id="">
// 				<div class="front">ROBOCODE</div>
// 				<div class="back">
// 					<img src="${board[i].img}" alt="">
// 				</div>
// 		 </div>`
// 		 $('.gameBoard').append(cardHTML)
// 	}
// }

// function startTime() {
// 	setInterval(function() {
// 		time = parseInt(localStorage.getItem("time")) - 1
// 		$(".time").val(time).trigger('change')
// 		if (time == 0) {
// 			alertify.error("Time is out!")
// 			setTimeout(()=>window.open("../Task 1/index.html", "_self", false), 2000)
// 			localStorage.removeItem("time")
// 		} else if (time > 0) {
// 			localStorage.setItem("time", time)
// 		}
		
// 	}, 1000)
// }

let timeStorage = localStorage
let time = 0

if(timeStorage.getItem("time") != null) {
    time = parseInt(timeStorage.getItem("time"))
} else {
    time = 300
    timeStorage.setItem("time", time)
}

let progress = 0

let firstCard = null
let secondCard = null

let cards = [
    { 
        name: "html",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/330px-HTML5_logo_and_wordmark.svg.png",  
        id: 1
    },
    { 
        name: "css",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfj7-gq11u-a8ebYdxnDF-fIy6cBIJ-Mn2Lg&s",  
        id: 2
    },
    { 
        name: "python",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Python_logo_and_wordmark.svg/330px-Python_logo_and_wordmark.svg.png",  
        id: 3
    },
    { 
        name: "jquery",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLME0hpAJOqBGhaVjcgkk8hIKS3S4GAqrLg&s",  
        id: 4
    },
    { 
        name: "php",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/330px-PHP-logo.svg.png",  
        id: 5
    },
    { 
        name: "c#",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/C_Sharp_Logo_2023.svg/300px-C_Sharp_Logo_2023.svg.png",  
        id: 6
    },
    { 
        name: "c++",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/260px-ISO_C%2B%2B_Logo.svg.png",  
        id: 7
    },
    { 
        name: "java",
        img: "https://upload.wikimedia.org/wikipedia/uk/8/85/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Java.png",  
        id: 8
    },
    { 
        name: "javascript",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/250px-Unofficial_JavaScript_logo_2.svg.png",  
        id: 9
    },
    { 
        name: "pascal",
        img: "https://alefragnani.gallerycdn.vsassets.io/extensions/alefragnani/pascal/9.9.0/1738545183646/Microsoft.VisualStudio.Services.Icons.Default",  
        id: 10
    },
    { 
        name: "ada",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ada_horizon_green_logo_with_slogan.svg/280px-Ada_horizon_green_logo_with_slogan.svg.png",  
        id: 11
    },
    { 
        name: "visualbasic",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/VB.NET_Logo.svg/250px-VB.NET_Logo.svg.png",  
        id: 12
    }
]

$(document).ready(function() {
    $(".progress").knob({
        "min": 0,
        "max": 15,
        "angleOffset": -60,
        "angleArc": 120,
        "readOnly": true
    })

    $(".time").knob({
        "min": 0,
        "max": 300,
        "angleOffset": -60,
        "angleArc": 120,
        "readOnly": true
    })

    $(".start").click(function() {
        $(".start").css('display', 'none') 
        $(".taskProgress, .timeProgress, .sound, .answer").css('display', 'block')
        startTime()
        fillboard()
        $(".card").on("click", cardClicked)
    })
})

function fillboard() {
    let board = shuffle([...cards, ...cards])
    for (i = 0; i< board.length; ++i) {
        let cardHTML = 
        `<div class="card" data-id="${board[i].id}">
                <div class="front">ROBOCODE</div>
                <div class="back">
                    <img src="${board[i].img}" alt="">
                </div>
        </div>`
        $('.gameBoard').append(cardHTML)
    }
}

function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}


function cardClicked() {
    console.log(event)
    if (secondCard || $(this).hasClass('matched')) {
        return
    }

    if (!firstCard) {
        firstCard = $(this)
        firstCard.addClass("flip")
        return
    }

    if (firstCard) {
        secondCard = $(this)
        secondCard.addClass("flip")
        if (firstCard.attr("data-id") == secondCard.attr("data-id")) {
            firstCard.addClass("matched")
            secondCard.addClass("matched")
            firstCard = null
            secondCard = null
            progress++
            $(".progress").val(progress).trigger('change')
            if (progress == 12) {
                alertify.alert("Win")
            }
            return
        } else {
            setTimeout(function() {
                firstCard.removeClass("flip")
                secondCard.removeClass("flip")
                firstCard = null
                secondCard = null
            }, 600)
        }
    }
}


function startTime() {
    setInterval(function() {
        time = parseInt(localStorage.getItem("time")) - 1
        $(".time").val(time).trigger('change')
        if (time == 0) {
            alertify.error("Your time is out!")
            setTimeout(()=>window.open("../Task1/html.html", "_self", false), 2000)
            localStorage.removeItem("time")
        } else if (time > 0) {
            localStorage.setItem("time", time)
        }
    }, 1000)
}
