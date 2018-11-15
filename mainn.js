alert('Fill each input box as specified and your name with First Letter capital as (Bhavesh Gupta)');
 function run() {
	
	event.preventDefault();
	/* Act on the event */
	name= $('#name').val();
	phone= $('#phone').val();
	email= $('#email').val();
	cgpa= $('#cgpa').val();
	twelveth= $('#twelveth').val();
	percentone= $('#percentone').val();
	tenth= $('#tenth').val();
	percenttwo= $('#percenttwo').val();
	skillsinter= $('#skillsinter').val();
	skillsadv= $('#skillsadv').val();
	wone= $('#wone').val();
	wtwo= $('#wtwo').val();
	

		$('body').html('<div style="margin:0px auto;" class="main"><div><h1>'+name+'</h1></div><div><h3>Contact info</h3>Phone: '+phone+'<br>Email: <a href="mailto:'+email+'">'+email+'</a><br></div><div><table class="table-borders"><tr class="table-borders"><th class="table-borders">Degree Name</th><th class="table-borders">From</th><th class="table-borders">Marks</th></tr><tr class="table-borders"><td class="table-borders">BTECH CSE</td><td class="table-borders">GJUS&T, Hisar</td><td class="table-borders">'+cgpa+'</td></tr><tr class="table-borders"><td class="table-borders">12th</td><td class="table-borders">'+twelveth+'</td><td class="table-borders">'+percentone+'</td><tr class="table-borders"><td class="table-borders">10th</td><td class="table-borders">'+tenth+'</td><td class="table-borders">'+percenttwo+'</td></tr></table><br></div><div><h3>Skills</h3><ul><li>Intermidiate</li><p>'+skillsinter+'</p><li>Advanced</li><p>'+skillsadv+'</p></ul></div><div><h3>Work Experience</h3><ul><li>'+wone+'</li><li>'+wtwo+'</li></ul></div></div>'
);
	alert('Save the next Page as PDF and for HTML Code inspect it in Inspect-Element and only copy paste without those script tags in head');
	$('title').html(name);
	$('#generate').remove();
	

	

};
