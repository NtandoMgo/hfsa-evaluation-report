// HFSA Winter Programme Data Processing Module - 2025 Grade 12 Cohort
// This file contains all data parsing and processing functions for Grade 12 students (2025)

export const Grade12_2025_Eval = () => {
  // Raw data from the 2025 Grade 12 Winter Programme survey responses (July 2025)
  const rawDataString = `7/3/2025 15:02:35	4	4	Yes, a lot 	5	5	5	5	5	5	5	MBChB — this is because I also want to take part in life changing acts. Saving lives is my interest. I want to part of the people who actively bring about transformation I the Medical field. 	4	What i leanet is that one has to work cery hard in order to earn a position in any institution. It takes hard work and dedication to be what you want 💯 1	3	No	2	4	5	5	Self introspection is really important. Acknowledging where you are in order to know where you're going is imperative 	Nothing, really 	Most weeks	3	1	Stoichiometry, Euclidean Geometry, Rates of reactions and VPM 	Yes	4	Slightly more confident	Yes	6	No, not necessarily
7/3/2025 15:44:33	4	4	Well	4	5	3	5	3	3	4	Paramedics because it looked fun	4	The medicine industry has many fields that are all useful				4	5	5	The NBTs (all pressure for NBTs went away) 	Addition of activities 	Every week	2	4	Work energy power / equilibrium 	No	5	Much more confident	Yes	9	
7/3/2025 15:46:01	3	5	It really helped, because similar asked questions were in the exam. 	5	5	5	5	5	5	5	The medicine profession and Paramedic profession. 	5	The key takeaway was goal setting and the activity where we had to describe what went into a certain object. 	5	Yes 	5	5	5	5	Getting to see UCT everyday and learning and broadening my knowledge on my future	An added session on burseries.	Most weeks	3	3	For physics, I struggle with Chemistry and for math it is Trigonometry and trig graphs  and the graphs in Calculus 	Yes	5	Slightly more confident	Yes	8	I think there shouldn't be alternating topics(e.g. one week chem, one week phy) in the physics lessons.
7/3/2025 15:48:18	3	4	Yes, very much it was almost exact like the practice worksheets and it was immensely helpful	4	5	5	4	4	4	5	Occupational Therapy And Physiotherapy were the most informative,  and I am very interested in these careers because of how it helps people with everyday tasks	3	All the admission requirements				5	5	5	Spending time with friends and learning more about admissions and university requirements 	More activities that could be added 	Most weeks	3	2	Physics		4	Slightly more confident	Yes	9	
7/3/2025 15:51:49	3	4	yes	3	5	3	3	3	3	3	Im not interested in health science						5	5	4	The application session that helped me verify certain things that were not known to me.	they could improve the variety of the faculties they talk about.	Most weeks	3	3	chemistry , and trigs	Yes	4	Slightly more confident	Yes	7	thanks for all the help, much appreciated
7/3/2025 15:52:37	1	5	YES	5	5	4	3	3	2	2	audiology because i enjoy helping people	4	they can be fun and interesting	1	yes	5	5	5	5	engaging with the group and having fun	nothing 	Every week	2	2	maths	Yes	4	Much more confident	Yes	10	i love them so much
7/3/2025 15:54:28	3	5	yes	3	5	3	3	4	2	4	physiotherapy,because it seems intresting and fun to do 	4		4	yes	5	5	5	5		spicy food	Every week	3	3	chemical equilibrium	Yes	4	Slightly more confident	Yes	8	
7/3/2025 15:55:21	3	3	Yes	4	4	4	3	5	5	5	Paramedics because there isnt always a chance to speak to paramedics 	5		5	Yes	4	5	5	4	When the man from admissions came to explain 	If the breaks are longer or we get more shorter breaks in between	Every week	3	3	Trigonmentry and electricity 	Maybe	4	Slightly more confident	Yes	8	If we are aware of what topics will be taught or explained before the lesson so that we can prepare for it
7/3/2025 15:55:29	3	4	yes	4	5	4	5	5	5	4	audiology	5	there is always room to learn 	5	yes	5	5	5	4	understanding 	shorter session / longer break / spread across more days	Every week	3	2	physics	Maybe	5	Much more confident	Yes	7	enjoyable
7/3/2025 15:55:33	3	5	yes	5	5	5	5	5	5	5	occupational therapy	5	working hard is what you need to do	4	yes	5	5	5	5	shawco presentation 	the time spent	Most weeks	4	2	Euclidean geometry	Maybe	4	Slightly more confident	Yes	8	no
7/3/2025 15:55:51	4	5	yes	4	4	4	4	4	4	4	Paramedic, search and rescue feel's most important to me.	3	there is always space to learn and you can find where you need to be, you don't necesarrily start where you want to be but can get there through other means, that is why yoou shouldnt give up on anything.	4	yes	5	4	5	5	handling stress/ overthinking with SHAWCO as it is something everyone has to deal with.	the amount of interaction should be increased	Every week	3	3	physics	Maybe	4	Much more confident	Yes	6	It flows well and isn't straining but sometimes people feel pressured
7/3/2025 15:56:08	4	4	yes	5	4	4	4	4	5	5	nursing and paramedic to be able to help others.	5	it is not easy as it seems ,it requires a full mental health.	5	yes.	5	5	5	5	growth mindset and fixed mindset.	i dont think there is anything that needs improvement ,everything was good and straight foward.	Every week	4	2	work energy theorem and also financial mathematics.	Yes	5	Much more confident	Yes	8	Thank you to you all for such a wonderful support through out the year ,for your vibrant energy and also the effort that you put on our lives. What you guys are doing is inspiring ,motivational and also changing and sharpening our minds. Continue being inspirational as you are ,thank to you all.
7/3/2025 15:56:11	3	3	kinda	4	4	4	4	4	4	4	medicine 	4		5	yes	3	3	5	3	nbt	shorter sessions and loner lunch break 	Every week	5	3	physicis	Maybe	4	Slightly more confident	Yes	8	nothing , this program is perfect
7/3/2025 15:56:31	3	3	yes	5	5	3	3	3	4	5	paramedic ECP because I quallify for it and its an interesting career	4	In health science there are many careers that we can do just that we were not very exposed to them	5	yes	5	5	5	5	The capitec workshop	can study sessions	Every week	4	3	work and energy theorem,Analytical geometry and euclidean	Yes	3	Slightly more confident	Yes	9	no
7/3/2025 15:56:44	2	2	YES	5	5	5	5	5	5	5	PARAMEDIC	5	I learnt that in order for you to be in universities you need to work hard and get good marks and universities are interesting	4	yes	4	5	5	5	you need to work hard in order to get into universities	nothin , everything is good	Every week	3	3	chemila equilibirum	Yes	5	Slightly more confident	Yes	10	the sessions are good
7/3/2025 15:57:30	3	5	yes they actually helped	3	5	3	3	3	3	3	Paramedic still they help and assist people 	5	that entering university is actually hard	4	yes	4	3	5	4	the food was nice this week. I don't want to lie	get more people to speak on different careers 	Every week	1	2	work, energy and power	Yes	5	Less confident	Yes	9	"I may not see the difference right now, but it will pay off in the long run."
7/3/2025 15:57:54	4	5	Yes, very much 	5	5	5	5	5	5	5	The Emergency Medical Service presentation since it's the one that I'm interested in so much.	5	Is that whatever your instints are just go with them	5	Yes	5	5	5	4	The SHAWCO presentation 	Nothing should be improved since there outputs on us as learners is so much valuable	Every week	4	4	Calculus	Yes	5	Much more confident	Yes	9	No.
7/3/2025 15:59:05	3	5	yes	5	5	5	5	5	5	5	paramedic,after jamens  presentation  ifound it very interesting	5	t	5	yes	5	5	5	5	gaining more knowledge about univesity carrers 	more seesion the sessions duration was not enough we wanted more 	Most weeks	4	4	trigonometry and work and enery power calculations	Yes	5	Much more confident	Yes	7	your work HFSA WORKERS IS INCREDIDLY AMAZING THANKS FOR EVERYTHING
7/3/2025 15:59:56	4	5	yes	5	4	4	5	5	3	4	genetics	5	about aps	3		4	4	5	5	how important university is	warm classrooms	Every week	3	4	trigonometry and work energy and power	Yes	5	Slightly more confident	Yes	10	stay kind
7/3/2025 16:00:12	3	4	yes it helped 	5	5	5	5	5	5	5	Paramedic 	5	i learnt that in oerder for you to be accepted by universities you have to work very hard	5	Yes it helped	5	5	5	5	we have to work hard on our studies the next term	Food	Most weeks	4	2	Rate of reactions 	Yes	5	Much more confident	Yes	10	No
7/3/2025 16:01:06	3	3	yes i do	4	5	4	5	3	4	5	paramedic	4	gained knowledge	5	yes, save money helps the fututre	5	3	5	4	productive week	more time for application day 	Most weeks	3	3	rates of reactoin chemical equilibrium and trigonometry	Yes	4	Slightly more confident	Yes	8	thank you hfsa for the wonderful and supportive program and for giving me a chance to explore new environment.
7/3/2025 16:01:10	3	5	yes, it helped me very much	5	5	5	5	5	5	5	radiography and nursing. For radiography i just find it interesting and nursing is something that i'm actually insipired by my aunt.	5	that it's not always the case for a person to study in a university even though universities are great instituions.	4	yes and I ended up joining the bank	4	5	5	5	engaging with my fellow hfsas in group activities, sharing ideas getting to know one another on a greater level, that felt good and I would trade anything for moments like these.	I don't because I had the best time	Most weeks	4	3	life sciences	Yes	4	Slightly more confident	Yes	8	strength through unity and unity through pride, from me to HFSA, I thank you.
7/3/2025 16:01:16	3	5	yes	5	5	5	5	5	5	5	Being a paramedic	5	That you need go marks and focus if you want to enter a universities	5	yes, they helped me to being able to be able to manage my own bank	5	5	5	5	I finally got hope to improve on my June marks	More food:)	Every week	3	3	Trigonometry and analytical geometry	Yes	5	Much more confident	Yes	10	no
7/3/2025 16:01:18	4	5	yes	5	5	5	5	5	5	5	Paramedic, it showed one of my traits and that's helping people	4	That you must push and give up and they won't reject you. There is always a chance. 	5	yes	5	5	5	5	Getting Opportunities always pays off	Nothing, I enjoyed everything, and I am truly grateful	Every week	3	3	Trig and Geometry	Yes	5	Much more confident	Yes	10	Keep Up the good work and hope l can join one day
7/3/2025 16:01:19	4	5	Yes	5	5	5	5	5	5	5	I'm not interested in health science 	4		5		5	5	5	5	team work is the key and hardwork	more food we need it as a take away	Every week	4	3	chemical equilibrium	Yes	5	Much more confident	Yes	10	no
7/3/2025 16:01:20	3	4	yes , it made me feel abit confident going into the test	4	5	4	4	4	4	5	for me it was medicine and paramedic, it resonated will me 	4	how many opportunities there is for one	3	somehow , i personally feel like they could have enteracted with us more	4	4	2	4	learning more about medicine	having more 1 on 1 sessions	Most weeks	4		work energy and power , and trig 2D AND 3D	Yes	2	No change	Yes	6	THEY DOING GOOD SHAME
7/3/2025 16:01:25	4	5	yes, it was very helpful.	4	5	5	4	3	3	4	occupational therapy, i learned how wide the field is, and how each of the different roles of profession within the field of OT specialize.  	4	health science, is more the just the popular careers like being a doctor, destist, 	4	yes	3	5	5	5	the SHAWCO session	nothing	Most weeks	4	4	statistics	Yes	5	Much more confident	Yes	9	truly god sent
7/3/2025 16:01:37	3	4	yes	5	5	5	5	5	5	5	physiothrapy it is my dream career	4	choose a career you are passionate about	4	yes	3	4	5	5	i had a very good time it was a very good winter programme	nothing everything was perfect also the catering	Every week	3	3	vpm	Yes	4	Slightly more confident	Yes	8	the sessions helped me improve my marks
7/3/2025 16:02:00	3	4	yes it did	5	5	5	5	5	5	5	medicine, because it is my dream career	5	The requirements	4	yes	3	5	5	5	dancing the clap clap song	Nothing, it is fine as it is	Every week	4	4	Trigonometric and chemical equilibrium	Maybe	5	Much more confident	Yes	9	very effective
7/3/2025 16:02:09	3	4	Yes it helped tremendously	5	5	5	5	5	5	5	Paramedic (Jaimen Brown), the career interested me and he explained it so well that it inspired me to go into this career 	4	That there are a lot of optionsand oppurtunities, i learned that nothnig is impossoble ,and that hard work beats talent 	5		5	3	5	5	That nothing is impossible, that we should have a growth mindset, because it helps us take advantage of our situtions, and helps us see the good  	A longer lunch break ,atleast 45mins	Every week	4	3	momentum and chemisty	Yes	5	Much more confident	Yes	10	That this is an amazing program that helps you be ahead of other students and exposes you to different careers in depth. It also doesn't require you to pay, which beneifts those you might be disadvantage
7/3/2025 16:02:16	1	1	NO	2	2	5	5	5	5	5	OCCUPATION THERAPY	4	CAREER CHOICE	4	YES	4	4	4	4	RESPECT	FOOD	Every week	4	3	ACID AND BASES AND VPM	Yes	5	Much more confident	Yes	8	PORODUCTIVE AND HELPFUL
7/3/2025 16:02:41	3	4	yes	5	5	5	5	5	5	5	paramedic because i never knew anything about it		how they calculate the admission score and how they select students	4	yes	4	3	5	4	uct admissons	nothing	Every week	2	2					Yes	7	
7/3/2025 16:02:55	3	5	yes	5	5	3	3	4	5	5	paramedics. because it's easier to get into and its adventurous 	5	Everything about paramedics	5	yes	5	4	5	5	bertha center, admission session and nbt	more demonstrations with more activities to practice the knowledge shared 	Every week	5	1	chemistry : chemical equilibrium 	Yes	5	Much more confident	Yes	10	keep up the excellent quality work.
7/3/2025 16:03:44	3	5	yes	5	5	5	5	5	5	5	occupational therapy	3	you must be sure of the career you to do in university	5	yes	5	5	5	4	career education	nothing, everything was fine 	Every week	3	3	vpm,work energy,trigonometry	Yes	5	Slightly more confident	Yes	5	
7/3/2025 16:03:47	2	5	yes	4	3	2	4	3	3	4	Audiology. It was interesting to learn how hearing equipment works and the process of audiology.	5	informative	5	yes	5	4	3	5	Ms parker and TJs talk as well as the Bertha centers workshop 	getting learners to explore labs and education of what is in each lab. eg, health science tours of labs	Every week	2	2	impulse. proportionality, trigs, chemistry besides organic chemestry 	Maybe	5	Slightly more confident	Yes	9	
7/3/2025 16:04:22	3	5	YES	5	5	5	4	4	4	5	PARAMEDICS	5	TO CHOOSE THE CORRECT CAREER	5	YES	5	5	5	5	 PRESENTATIONS ABOUT HEALTH SCIENCE	NOTHING 	Every week	4	4	TRIGONOMETRY	Yes	5	Much more confident	Yes	10	THE SESSIONS ARE VERY EFFECTIVE 
7/3/2025 16:04:38	1	2	yes	5	5	3	3	2	2	5	paramedic	4	first check your aps 	5	yes	3	5	5	4	EVERYTHING IS POSSIBLE	nothing I LIKED EVERYTHINK	Most weeks	4	3	PHYSUCAL SCIENCE	Yes	5	Slightly more confident	Yes	7	NO 
7/3/2025 16:04:52	2	4	it just gave me 20% preparation of the real thing	4	5	3	3	2	2	3	paramedic	5	being a paramedic is not a bad thing	3	yes and no about life yes it did finance	5	4	4	4	it has been a great week taking nothing away, educational and fun 	food otherwise great week	Every week	3	3	because of time i can't say 	Yes	4	Slightly more confident	Yes	6	this program is phenomenon great people and good energy with positive impact but it could offer just a little more 
7/3/2025 16:06:13	3	4	Yes, a lot of the questions that were in the actual NBT were seen before in the worksheets and if we had not been exposed to those types of questions prior to writing, I doubt I would have known how to tackle the questions. I used a geometry trick I learnt from the worksheet memos to answer 3 or 4 questions in the actual NBT and I think I would have likely left out if not for the practice.	3	5	3	3	5	4	5	Physiotherapy as I never really knew much about it and from the presentation, it is actually a very interesting career. Speech-language pathology as well. It involves SO MUCH MORE than I thought. I initially thought it was just about helping people to speak better. It definitely needs a new name	4	more about being an OT	4	Yes	5	4	5	4	The Bertha Centre workshop 	Luch times should be a bit earlier	Every week	2	2	WEP	Maybe	4	Slightly more confident	Yes	8	THANK YOU SO MUCH FOR THE OPPORTUNIYU!!
7/3/2025 16:06:15	3	5	Yes, absolutely	5	5	5	5	5	5	5	Paramedic, it is something that I always wanted to do and I applied for the course at CPUT	4	That you can always reroute for your dream career	5	Yes	5	5	5	5	Shawco presentation, I honestly needed it	Nothing, everything is absolitely satisfying	Most weeks	4	4	Trigonometry	Yes	5	Slightly more confident	Yes	10	Honestly, I have nothing to wish to add or remove about HFSA
7/3/2025 16:06:18	1	5	Yes	5	5	5	5	5	5	5	Audiology	3	That it will be hard if i'm not working hard	5	Yes , alot	5	5	5	5	That I need to work hard in order to accepted	Bring more programmes or career presentation not only focusing on health science	Every week	4	4	Trigonometry and Analytica geometry 	Yes	5	Much more confident	Yes	10	
7/3/2025 16:06:31	3	5	yes, they provided similarly structure of NBT & how they are in reality 	3	4	3	3	4	5	4	I'm not interested in any 		high academic & professionalism  competition 	3	yes	4	4	4	4	 university application 	add relaxation sessions	Every week	3	3	Euclidean Geometry, Trigonometry & rate of reaction 	No	4	Slightly more confident	Yes	10	they're so  helpful & more actively on our academics
7/3/2025 16:06:45	4	4	yes	5	5	5	5	5	5	5	none	5	health science demand too much marks	5	yes	5	5	5	5	learning is important	food	Most weeks	5	5	none	Yes	5	Much more confident	Yes	10	none
7/3/2025 16:07:24	3	4	Yes , it made it clear on what type of questions are asked how how i had to be for the NBTs	4	4	5	5	4	3	5	Paramedic, because am i love being able to help give help and rescue to people whose lives are in danger	5	That in order to get to my dream career i need to work as much hard as i can	2		2	5	5	5	I took the greatest step further towards reaching my dream of studying at a university 	Foo	Every week	3	5	am struggling with acids and basics in physical science and geometry in maths	Yes	4	Slightly more confident	Yes	9	The sessions are 
7/3/2025 16:07:58	5	5	yes	5	5	5	5	5	5	5	PARAMEDIC, AUDIOLOGY	5	I learnt that it takes a lot of effort to get into the university. So i have to work harder in order to enter	4	yes	5	5	5	5	Learning more about the faculty of health science	more food	Most weeks	5	4	trigonometry,chemichal equilibrium,euclidean	Yes	5	Much more confident	Yes	10	Thank for the opportunity that you gave me and others as at HFSA, i m thank full to the tutors and program director Dr PATTI .THank for this chance 
7/3/2025 16:08:04	2	5	Yes	4	5	4	5	4	4	4	nursing	4		3	yes	4	5	5	5	university applications	time spent at uct	Every week	3	3	chemical reactions	Yes	5	Slightly more confident		9	
7/3/2025 16:08:09	3	3		4	5	5	5	4	4	5		4		4		4	4	4	5			Every week	5	4		Yes	4	Much more confident	Yes	8	
7/3/2025 16:08:57	3	4	boost perfomance 	5	4	4	3	4	5	5	medicine , i love to interact with people and help them out 	5	to always stay focused on what you have to achieve .	5	yes	4	5	5	5	be prepared for writing 	bus pickups 	Every week	4	4	euclidian and chemistry 	Yes	4	Slightly more confident	Yes	8	keep up hleping future leaders in our local schools 
7/3/2025 16:09:59	4	5	yes	5	5	5	5	5	5	5	audiology , i love it	5	i learnt new things i never knew before	5	yes	5	5	5	5	getting new information about health science	food	Every week	3	4	euclidean	Yes	5	Slightly more confident	Yes	9	
7/3/2025 17:00:01	1	5	Yes it did help to know how it's done and what to expect even though I wasn't prepared 	5	5	4	5	5	5	5	It is the paramedic because I do meet the requirements and it was also my first learning more about parademics because I always took and saw it as nothing.	4	I learned the difference between Traditional University and University of Technology. I also learnt about the different careers that put effort in just making a small earphones.						5	Believing in yourself cause no one else will but yourself	So far nothing 	Most weeks	3	2	In Mathematics it's Trigonometry(especially functions , 2D-3D) . In Physical Science it's chemical Equilibrium 	Yes	5	Much more confident	Yes	10	Maybe new tutor can help`;

  // Parse the tab-separated data
  const lines = rawDataString.trim().split('\n');
  const headers = [
    'timestamp', 'nbt_preparation', 'nbt_organization', 'nbt_worksheets_helpful',
    'prof_naledi', 'paramedic', 'occupational_therapy', 'audiology', 
    'speech_therapy', 'disability_studies', 'medicine', 'career_interest',
    'careers_relevance', 'takeaway', 'capitec_engaging', 'capitec_helpful',
    'bertha_workshop', 'shawco_informative', 'admissions_clarity', 'overall_rating',
    'highlight', 'improvements', 'attendance', 'math_improvement', 'physics_improvement',
    'struggling_topics', 'online_tutoring', 'mentor_support', 'confidence_level',
    'recommend_hfsa', 'hopefulness', 'final_comments'
  ];

  const parsedData = lines.map(line => {
    const values = line.split('\t');
    const entry = {};
    
    headers.forEach((header, index) => {
      entry[header] = values[index] || '';
    });
    
    return entry;
  });

  return parsedData;
};

// Data processing functions for dashboard metrics

export const getOverallMetrics = (data) => {
  const totalResponses = data.length;
  
  // Calculate average ratings (1-5 scale)
  const avgOverallRating = data.reduce((sum, item) => {
    const rating = parseInt(item.overall_rating) || 0;
    return sum + rating;
  }, 0) / totalResponses;

  // NBT preparation effectiveness
  const nbtHelpful = data.filter(item => 
    item.nbt_worksheets_helpful && 
    (item.nbt_worksheets_helpful.toLowerCase().includes('yes') || 
     item.nbt_worksheets_helpful.toLowerCase().includes('lot'))
  ).length;

  // Confidence improvement
  const confidenceImproved = data.filter(item => 
    item.confidence_level && 
    item.confidence_level.toLowerCase().includes('more confident')
  ).length;

  // Recommendation rate
  const wouldRecommend = data.filter(item => 
    item.recommend_hfsa && 
    item.recommend_hfsa.toLowerCase().includes('yes')
  ).length;

  return {
    totalResponses,
    avgOverallRating: avgOverallRating.toFixed(1),
    nbtHelpfulPercentage: Math.round((nbtHelpful / totalResponses) * 100),
    confidenceImprovedPercentage: Math.round((confidenceImproved / totalResponses) * 100),
    recommendationRate: Math.round((wouldRecommend / totalResponses) * 100)
  };
};

export const getCareerInterests = (data) => {
  const careerCounts = {};
  
  data.forEach(item => {
    if (item.career_interest && item.career_interest.trim()) {
      const career = item.career_interest.toLowerCase();
      
      // Extract main career interests
      if (career.includes('paramedic')) careerCounts.Paramedic = (careerCounts.Paramedic || 0) + 1;
      else if (career.includes('medicine') || career.includes('mbchb')) careerCounts.Medicine = (careerCounts.Medicine || 0) + 1;
      else if (career.includes('occupational therapy')) careerCounts['Occupational Therapy'] = (careerCounts['Occupational Therapy'] || 0) + 1;
      else if (career.includes('physiotherapy')) careerCounts.Physiotherapy = (careerCounts.Physiotherapy || 0) + 1;
      else if (career.includes('audiology')) careerCounts.Audiology = (careerCounts.Audiology || 0) + 1;
      else if (career.includes('nursing')) careerCounts.Nursing = (careerCounts.Nursing || 0) + 1;
      else if (career.includes('radiography')) careerCounts.Radiography = (careerCounts.Radiography || 0) + 1;
      else if (career.includes('not interested')) careerCounts['Not Interested'] = (careerCounts['Not Interested'] || 0) + 1;
      else careerCounts.Other = (careerCounts.Other || 0) + 1;
    }
  });

  return Object.entries(careerCounts).map(([name, value]) => ({ name, value }));
};

export const getSessionRatings = (data) => {
  const sessions = [
    { name: 'NBT Prep', key: 'nbt_preparation' },
    { name: 'Prof Naledi', key: 'prof_naledi' },
    { name: 'Paramedic', key: 'paramedic' },
    { name: 'Occupational Therapy', key: 'occupational_therapy' },
    { name: 'Audiology', key: 'audiology' },
    { name: 'Medicine', key: 'medicine' },
    { name: 'SHAWCO', key: 'shawco_informative' },
    { name: 'Admissions', key: 'admissions_clarity' }
  ];

  return sessions.map(session => {
    const ratings = data.map(item => parseInt(item[session.key]) || 0).filter(rating => rating > 0);
    const avgRating = ratings.length > 0 ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length : 0;
    
    return {
      session: session.name,
      rating: Number(avgRating.toFixed(1)),
      responses: ratings.length
    };
  });
};

export const getStruggleAreas = (data) => {
  const struggles = {};
  
  data.forEach(item => {
    if (item.struggling_topics && item.struggling_topics.trim()) {
      const topics = item.struggling_topics.toLowerCase();
      
      // Count occurrences of common struggle areas
      if (topics.includes('trigonometry') || topics.includes('trig')) 
        struggles.Trigonometry = (struggles.Trigonometry || 0) + 1;
      if (topics.includes('work') && topics.includes('energy')) 
        struggles['Work Energy Power'] = (struggles['Work Energy Power'] || 0) + 1;
      if (topics.includes('equilibrium') || topics.includes('chemical')) 
        struggles['Chemical Equilibrium'] = (struggles['Chemical Equilibrium'] || 0) + 1;
      if (topics.includes('geometry') || topics.includes('euclidean')) 
        struggles['Geometry'] = (struggles.Geometry || 0) + 1;
      if (topics.includes('physics') && !topics.includes('chemical')) 
        struggles['Physics (General)'] = (struggles['Physics (General)'] || 0) + 1;
      if (topics.includes('chemistry') && !topics.includes('equilibrium')) 
        struggles['Chemistry (General)'] = (struggles['Chemistry (General)'] || 0) + 1;
      if (topics.includes('calculus')) 
        struggles.Calculus = (struggles.Calculus || 0) + 1;
    }
  });

  return Object.entries(struggles)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8); // Top 8 struggle areas
};

export const getAttendanceData = (data) => {
  const attendance = {};
  
  data.forEach(item => {
    if (item.attendance && item.attendance.trim()) {
      const level = item.attendance.toLowerCase();
      if (level.includes('every week')) attendance['Every Week'] = (attendance['Every Week'] || 0) + 1;
      else if (level.includes('most weeks')) attendance['Most Weeks'] = (attendance['Most Weeks'] || 0) + 1;
      else attendance['Occasionally'] = (attendance['Occasionally'] || 0) + 1;
    }
  });

  return Object.entries(attendance).map(([name, value]) => ({ name, value }));
};

export const getConfidenceDistribution = (data) => {
  const confidence = {};
  
  data.forEach(item => {
    if (item.confidence_level && item.confidence_level.trim()) {
      const level = item.confidence_level.toLowerCase();
      if (level.includes('much more confident')) confidence['Much More Confident'] = (confidence['Much More Confident'] || 0) + 1;
      else if (level.includes('slightly more confident')) confidence['Slightly More Confident'] = (confidence['Slightly More Confident'] || 0) + 1;
      else if (level.includes('no change')) confidence['No Change'] = (confidence['No Change'] || 0) + 1;
      else if (level.includes('less confident')) confidence['Less Confident'] = (confidence['Less Confident'] || 0) + 1;
      else confidence['Not Specified'] = (confidence['Not Specified'] || 0) + 1;
    }
  });

  return Object.entries(confidence).map(([name, value]) => ({ name, value }));
};

export const getHopefulnessData = (data) => {
  const hopefulness = data.map(item => {
    const score = parseInt(item.hopefulness) || 0;
    return score;
  }).filter(score => score > 0);

  const avgHopefulness = hopefulness.length > 0 ? 
    hopefulness.reduce((sum, score) => sum + score, 0) / hopefulness.length : 0;

  const distribution = {};
  hopefulness.forEach(score => {
    if (score >= 9) distribution['Very Hopeful (9-10)'] = (distribution['Very Hopeful (9-10)'] || 0) + 1;
    else if (score >= 7) distribution['Hopeful (7-8)'] = (distribution['Hopeful (7-8)'] || 0) + 1;
    else if (score >= 5) distribution['Somewhat Hopeful (5-6)'] = (distribution['Somewhat Hopeful (5-6)'] || 0) + 1;
    else distribution['Less Hopeful (1-4)'] = (distribution['Less Hopeful (1-4)'] || 0) + 1;
  });

  return {
    average: Number(avgHopefulness.toFixed(1)),
    distribution: Object.entries(distribution).map(([name, value]) => ({ name, value }))
  };
};

export const getImprovementSuggestions = (data) => {
  const suggestions = {};
  
  data.forEach(item => {
    if (item.improvements && item.improvements.trim() && 
        !item.improvements.toLowerCase().includes('nothing')) {
      const suggestion = item.improvements.toLowerCase();
      
      if (suggestion.includes('food')) suggestions['More/Better Food'] = (suggestions['More/Better Food'] || 0) + 1;
      if (suggestion.includes('break') || suggestion.includes('lunch')) 
        suggestions['Longer Breaks'] = (suggestions['Longer Breaks'] || 0) + 1;
      if (suggestion.includes('session') || suggestion.includes('time')) 
        suggestions['Session Duration'] = (suggestions['Session Duration'] || 0) + 1;
      if (suggestion.includes('activit')) suggestions['More Activities'] = (suggestions['More Activities'] || 0) + 1;
      if (suggestion.includes('career')) suggestions['More Career Options'] = (suggestions['More Career Options'] || 0) + 1;
      if (suggestion.includes('bursary') || suggestion.includes('financial')) 
        suggestions['Financial Info'] = (suggestions['Financial Info'] || 0) + 1;
      if (suggestion.includes('transport') || suggestion.includes('bus')) 
        suggestions['Transport'] = (suggestions['Transport'] || 0) + 1;
    }
  });

  return Object.entries(suggestions)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);
};