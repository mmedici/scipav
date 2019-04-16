// Change navbar appearance
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.navbar').addClass('navbar-shrink');
    }
    else {
        $('.navbar').removeClass('navbar-shrink');
    }
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
//         return false;
//       }
//     }
//   });
// });

// hide #back-top first
$("#back-top").hide();

// fade in #back-top
$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
		$('#back-top').fadeIn();
	} else {
		$('#back-top').fadeOut();
	}
});

// scroll body to 0px on click
$('#back-top a').on("click", function(){
	$('body,html').animate({
		scrollTop: 0
	}, 800);
	return false;
});

// Adding Modals 
// var request = new XMLHttpRequest();
// request.overrideMimeType("application/json");
// request.open("GET", "http://localhost:8000/js/schedule_info.json");
// request.onreadystatechange = function () {
//     if (request.readyState == 4 && request.status == "200") {
//     callback(request.responseText);
//     }
//   };
// // request.responseType = 'json';
// request.send(null);
// request.onload = function() {
//     var sch_info = request.response;
//     // populateHeader(superHeroes);
//     // showHeroes(superHeroes);
// }




// JSON array with information, to be loaded as a separate document later
var json = {"items": [
 {
    "title": "Cloud Chamber",
    "subtitle": "Workshop",
    "type": "Workshop",
    "day": "Everyday",
    "time": "14:00",
    "modalname" : "Modal_CloudChamber",
    "modaltags" : ["Workshop","Physics","Learn","See"],
    "modaldesc" : "By studying the smallest building blocks of matter we can learn everything about the universe and ourselves. In this workshop we build a cloud chamber that allows us to see and study the elementary particles that fly through us all the time (mainly from outer space), without us knowing.",
    "imageadress" : "images/cloudylabs102.jpg",
    "imgcredit" : "<a href='http://www.cloudylabs.fr/wp/experiences/'>Cloudylabs</a>"
 },
 {
    "title": "Make a solar charger",
    "subtitle": "Workshop",
    "type": "Workshop",
    "day": "Everyday",
    "time": "12:00",
    "modalname" : "Modal_Solar",
    "modaltags" : ["Workshop","Physics","Energy","Gift"],
    "modaldesc" : "We all need electricity in our daily life, but where should it come from. One place we can harvest energy is the power of the suns electromagnetic rays, and it is something we harvest on large scales. This is your change to try to build your own charger driven by solar power. How difficult can it be....",
    "imageadress" : "images/vedvarendesolar.jpg",
    "imgcredit" : "Vedvarende Energi"
 },
{
    "title": "Play the Theremin",
    "subtitle": "Workshop",
    "type": "Workshop",
    "day": "Everyday",
    "time": "16:00",
    "modalname" : "Modal_ThereminWorkshop",
    "modaltags" : ["Workshop","Music","Engineering","#TryItOut"],
    "modaldesc" : "Dorit Chrystler invites you in for a unique experience and opportunity: You get to wield a theremin, and wrestle with the power that is only limited by your imagination and feel for the music. It is futuristic, difficult and fun. See you soon!",
    "imageadress" : "images/KCTSkids.gif",
    "imgcredit" : "<a href='https://gaite-lyrique.net/festival/lecole-de-theremine'>Gaîté Lyrique</a>"
 },
  {
    "title": "How I Rob banks!",
    "subtitle": "Talk at FLOKKR",
    "type": "Show",
    "day": "Monday",
    "time": "11:00",
    "modalname" : "Modal_CyberSec",
    "modaltags" : ["Performance","Cyber Security","#CrazyStories"],
    "modaldesc" : "FreakyClown is an ethical hacker, and spends most of his time breaking into banks and various large coorporations, both phyhsically and digitally. He does it so that criminals won't be the ones to exploit a possible weakness in the security. When he presents his stories, you are no longer as certain that your money is safely guarded neither in a vault og online!",
    "imageadress" : "images/programmer.jpg",
    "imgcredit" : "<a href='https://unsplash.com/photos/4m7gmLNr3M0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>David Rangel</a>"
 },
  {
    "title": "Energy: Nuclear or Wind?",
    "subtitle": "Debate at FLOKKR",
    "type": "Show",
    "day": "Tuesday (TBC)",
    "time": " ",
    "modalname" : "Modal_EnergyDebate",
    "modaltags" : ["Debate","Energy","Climate","#WindPower","#NewNuclear"],
    "modaldesc" : "Moderated by [moderator], proponents from wind energy, biomass and modern nuclear power by throium, are discussing the future of energy production. The climate is changing due to human emssion of CO2, how do we lower our carbon footprint while still keeping the standards of living that we are enjoying today. Join us when we open the debate with modern visions right here at Roskilde Festival 2019!",
    "imageadress" : "images/windnuclear.jpg",
    "imgcredit" : "Christopher Furlong/Getty Images"
 },
  {
    "title": "Theremin and Science",
    "subtitle": "Talk at FLOKKR",
    "type": "Show",
    "day": "Sunday (TBC)",
    "time": " ",
    "modalname" : "Modal_ThereminTalk",
    "modaltags" : ["Performance","Music","Science","#WOW"],
    "modaldesc" : "The theremin was invented 100 years ago, but musicians and performers still struggle to wield the magnificent instrument, that seems like something from the future. In this performance, the amazing artist and composer Dorit Chrystler will demonstrate the power of the instrument and let us all experience the power of music and understand the advancement of science that allows the creation of the theremin.",
    "imageadress" : "images/DoritCERN.gif",
    "imgcredit" : "CERN Music Club"
 },
   {
    "title": "Science on Wheels",
    "subtitle": "Driving around the Camping area",
    "type": "Other",
    "day": "Everyday",
    "time": "10-16",
    "modalname" : "Modal_ScienceWheels",
    "modaltags" : ["Show","Physics","Experiment","#Explosion"],
    "modaldesc" : "Miss a show? Miss science? Shed no more tears, Science on Wheels is heading to an Agora near you and your tents. We offer the finest in safe exploisions, curious demonstrations and illustrative tests. Come by for a show and be invited in to a world of fun, where you can test your understanding of everything around us! (don't worry - we will bring a blackboard!)",
    "imageadress" : "images/Temadag5cut.jpg",
    "imgcredit" : "Niels Bohr Institute"
 },
 {
    "title": "Beer Bongs and Bosons",
    "subtitle": "Lounge",
    "type": "Workshop",
    "day": "Everyday",
    "time": "17:30",
    "modalname" : "Modal_Lounge",
    "modaltags" : ["Lounge","Science","Stories","#MagicOfAlcohol"],
    "modaldesc" : "Join us in the afternoon in the Science Pavilion in the Beer Bongs and Bosons lounge where the first round is on us. We’ll be asking you questions like ‘why is the foam on a brown ale  white?’ ‘why is a Gin&Tonic luminescent under UV light?’. Right or wrong answer, we’ll tell you stories and reveal the magic of alcohol.",
    "imageadress" : "images/pbsbeerscience.jpg",
    "imgcredit" : "PBS"
 },
 {
    "title": "Accelerator in the Sky",
    "subtitle": "Art installation at FLOKKR",
    "type": "Other",
    "day": "Everyday",
    "time": "All day",
    "modalname" : "Modal_AITS",
    "modaltags" : ["Art","Science","#DidYouSee"],
    "modaldesc" : "Have you seen a particle physics accelerator? Do you understand quantum mechanics? Do not worry, the Accelerator in the Sky is build to inspire, and if you want to learn more we are right around the corner at the Science Pavilion ready to geek out over the details, the stories, and the fundamental questions!",
    "imageadress" : "images/aits_sketch.jpg",
    "imgcredit" : "Phil Fox"
 },
]};


// import json information file
var items = json.items;

// produce schedule
// make sorted sub list for talks and workshops
var items_talks = []
var items_workshops = []

for(var i = 0; i < items.length; i++) {
    if (items[i].type == 'Show') {
        items_talks.push(items[i]);
    }
    if (items[i].type == 'Workshop') {
        items_workshops.push(items[i]);
    }
}

// sort after weekday
var order = {"Sunday": 1, "Monday": 2, "Tuesday": 3, "Wednesday": 4, "Thursday": 5, "Friday": 6, "Saturday": 7, "[unknown day]": 8};

items_talks.sort(function(a, b){return order[a.day.split(" ")[0]] - order[b.day.split(" ")[0]]});
items_workshops.sort(function(a, b){return parseInt(a.time) - parseInt(b.time)});

var talkslist = "";
var workshopslist = "";

for(var i = 0; i < items_talks.length; i++) {
    talkslist += `<a href="#" data-toggle="modal" data-target="#` + items_talks[i].modalname + `">` + items_talks[i].day + ` ` + items_talks[i].time + ` - ` + items_talks[i].title + `</a><br/>`;
}
for(var i = 0; i < items_workshops.length; i++) {
    workshopslist += `<a href="#" data-toggle="modal" data-target="#` + items_workshops[i].modalname + `">` + items_workshops[i].day + ` ` + items_workshops[i].time + ` - ` + items_workshops[i].title + `</a><br/>`;
}

document.getElementById('schedule-list-talks').innerHTML = talkslist;
document.getElementById('schedule-list-workshops').innerHTML = workshopslist;


// produce activities list

// Shuffling function (Durstenfeld Shuffle)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(items) // To add some variation, or because I do not know which order I like better

var activitylist = "";
var modallist = "";
var modaltags = "";
// start for loop over activities
for(var i = 0; i < items.length; i++) {

    // set the right list of tags
    var modaltags = "";
    for(var j = 0; j < items[i].modaltags.length; j++) {
        modaltags += `<span>` + items[i].modaltags[j] + `</span>`
    }
    modallist += 
            `<div class="modal fade" id="` + items[i].modalname + `" tabindex="-1" role="dialog" aria-labelledby="Modal-label-1">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="Modal-label-1">` + items[i].day + ` ` + items[i].time + ` - ` + items[i].title + `</h4>
                        </div>
                        <div class="modal-body">
                            <figure>
                            <img src="`  + items[i].imageadress + `" alt="img01" class="img-responsive" />
                            </figure>
                            <div class="modal-works">` + modaltags + `</div>
                            <p>` + items[i].modaldesc + `</p>
                            <p class="img-credit">Image: ` + items[i].imgcredit + `</p>
                        </div>
                    </div>
                </div>
            </div>`
            ;

    activitylist += 
            `<div class="col-md-4">
                <div class="ot-portfolio-item">
                    <figure class="effect-bubba">
                        <img src="` + items[i].imageadress + `" alt="img02"/>
                                <figcaption>
                                    <h2>` +items[i].title + `</h2>
                                    <p>` +items[i].subtitle + `</p>
                                    <a href="#" data-toggle="modal" data-target="#` + items[i].modalname + `">More</a>
                                </figcaption>
                            </figure>
                        </div>
                    </div>`;
}
// end loop
document.getElementById('modals-here').innerHTML = modallist;
document.getElementById('activity-list').innerHTML = activitylist;



