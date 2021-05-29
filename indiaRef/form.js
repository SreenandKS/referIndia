class Form{
    constructor(){
        this.title1 = createElement('h1');
        this.title2 = createElement('h1');
        this.opt1 = createElement('h3');
        this.opt2 = createElement('h3');
        this.opt3 = createElement('h3');
        this.opt4 = createElement('h3');
        this.opt5 = createElement('h3');
        this.opt6 = createElement('h3');
        this.opt7 = createElement('h3');
        this.opt8 = createElement('h3');
        this.opt9 = createElement('h3');
        this.opt10 = createElement('h3');
        this.next = createButton('NEXT');
        this.next1 = createButton('NEXT');
        this.next2 = createButton('NEXT');
        this.next3 = createButton('NEXT');
        this.next4 = createButton('NEXT');
        this.next5 = createButton('NEXT');
        this.next6 = createButton('NEXT');
        this.next7 = createButton('NEXT');
        this.next7.hide();
        this.next6.hide();
        this.next5.hide();
        this.next4.hide();
        this.next2.hide();
        this.next1.hide();
        this.next3.hide();

        this.state = createButton('STATES');
        this.ut = createButton('UNION TERRITORIES');
    }

    display(){
       
        this.title1.position(displayWidth/2+500,displayHeight/2-350);
        this.title1.html("PROUD TO BE ");
        this.title1.style('color','orange');
        this.title2.position(displayWidth/2+600,displayHeight/2-250);
        this.title2.html("AN INDIAN");
        this.title2.style('color','lightGreen');
        this.opt1.position(displayWidth-600,300);
        this.opt2.position(displayWidth-600,320);
        this.opt3.position(displayWidth-600,340);
        this.opt4.position(displayWidth-600,360);
        this.opt5.position(displayWidth-600,380);
        this.opt6.position(displayWidth-600,400);
        this.opt7.position(displayWidth-600,420);
        this.opt8.position(displayWidth-600,440);
        this.opt9.position(displayWidth-600,460);
        this.opt10.position(displayWidth-600,480);
        this.opt1.html("India (Hindi: Bhārat), officially the Republic of India (Hindi: Bhārat Gaṇarājya), is");
        this.opt2.html(" a country in South Asia. It is the second-most populous country, the seventh-largest");
        this.opt3.html(" country by land area, and the most populous democracy in the world. India is one of");
        this.opt4.html(" the oldest civilizations in the world with a kaleidoscopic variety and rich cultural");
        this.opt5.html(" heritage. It has achieved all-round socio-economic progress since Independence. As");
        this.opt6.html(" the 7th largest country in the world, India stands apart from the rest of Asia, marked ");
        this.opt7.html("off as it is by mountains and the sea, which give the country a distinct geographical ");
        this.opt8.html("entity. Bounded by the Great Himalayas in the north, it stretches southwards and at");
        this.opt9.html(" the Tropic of Cancer, tapers off into the Indian Ocean between the Bay of Bengal on ");
        this.opt10.html("the east and the Arabian Sea on the west");
        this.next.position(displayWidth/2+1000,700);
        this.next.style('background','lightGreen');
        this.next1.position(displayWidth/2+1000,700);
        this.next1.style('background','lightGreen');
        this.next2.position(1000,630);
        this.next2.style('background','lightGreen');
        this.next3.position(1000,660);
        this.next3.style('background','lightGreen');
        this.next4.position(1000,660);
        this.next4.style('background','lightGreen');
        
        this.next5.position(1000,660);
        this.next5.style('background','lightGreen');
        this.next6.position(1000,660);
        this.next6.style('background','lightGreen');
        this.next7.position(1000,660);
        this.next7.style('background','lightGreen');
        


        this.next.mousePressed(()=>{
            this.title1.hide();
            this.title2.hide();
            this.opt1.hide();
            this.opt2.hide();
            this.opt3.hide();
            this.opt4.hide();
            this.opt5.hide();
            this.opt6.hide();
            this.opt7.hide();
            this.opt8.hide();
            this.opt9.hide();
            this.opt10.hide();
            this.next.hide();
            this.next1.show();

            this.o1 = createElement('h3');
            this.o1.position(displayWidth-600,130);
            this.o1.html("India is a great country");
            this.o1.style('fontSize','21px')

            this.o2 = createElement('h3');
            this.o2.position(displayWidth-600,200);
            this.o2.html("It has a Population of about 138 crore and second most populated country");
            this.o2.style('fontSize','21px')


            this.o3 = createElement('h3');
            this.o3.position(displayWidth-600,270);
            this.o3.html("India has an area about 3.287 million km square and seventh largest country ");
            this.o3.style('fontSize','21px')

          
            this.o4 = createElement('h3');
            this.o4.position(displayWidth-600,340);
            this.o4.html("India have 28 states and 9 union territories");
            this.o4.style('fontSize','21px')


            this.o5 = createElement('h3');
            this.o5.position(displayWidth-600,410);
            this.o5.html("India's capital is at New Delhi");
            this.o5.style('fontSize','21px')


            this.o6 = createElement('h3');
            this.o6.position(displayWidth-600,480);
            this.o6.html("There are about 22 different languages in India");
            this.o6.style('fontSize','21px')

            this.next1.mousePressed(()=>{
                this.o1.hide();
                this.o2.hide();
                this.o3.hide();
                this.o4.hide();
                this.o5.hide();
                this.o6.hide();
                this.next1.hide();
                this.next2.show();
                
                
                this.op = createElement('h1');
                this.op.position(displayWidth/2+100,30);
                this.op.html("Interesting Facts about India");

                this.op1 = createElement('h3');
                this.op1.position(displayWidth-600,100);
                this.op1.html("•	India never invaded any country in her last 100000 years of history");

                this.op2 = createElement('h3');
                this.op2.position(displayWidth-600,130);
                this.op2.html("•	When many cultures were only nomadic forest dwellers over 5000 years ago,Indians ");

                this.op2half = createElement('h3');
                this.op2half.position(displayWidth-600,160);
                this.op2half.html("established Harappan culture in Sindhu Valley (Indus Valley Civilization)");

                this.op3 = createElement('h3');
                this.op3.position(displayWidth-600,190);
                this.op3.html("•	The name 'India' is derived from the River Indus,the valleys around which were the  ");

                this.op3half = createElement('h3');
                this.op3half.position(displayWidth-600,220);
                this.op3half.html("home of the early settlers. The Aryan worshippers referred to the river Indus as the  ");

                this.op3half2 = createElement('h3');
                this.op3half2.position(displayWidth-600,250);
                this.op3half2.html("Sindhu.");

                this.op4 = createElement('h3');
                this.op4.position(displayWidth-600,280);
                this.op4.html("•	The Persian invaders converted it into Hindu. The name 'Hindustan' combines ");

                this.op4half = createElement('h3');
                this.op4half.position(displayWidth-600,310);
                this.op4half.html("Sindhu and Hindu and thus refers to the land of the Hindus.");

                this.op5 = createElement('h3');
                this.op5.position(displayWidth-600,340);
                this.op5.html("•	Chess was invented in India.");

        
                this.op6 = createElement('h3');
                this.op6.position(displayWidth-600,370);
                this.op6.html("•	Algebra, Trigonometry and Calculus are studies, which originated in India.");

                this.op7 = createElement('h3');
                this.op7.position(displayWidth-600,400);
                this.op7.html("•	The Place Value System and the Decimal System were developed in India in 100 BC");

                this.op8 = createElement('h3');
                this.op8.position(displayWidth-600,430);
                this.op8.html("•	The World's First Granite Temple is the Brihadeswara Temple at Tanjavur, Tamil");

                this.op8h1 = createElement('h3');
                this.op8h1.position(displayWidth-600,460);
                this.op8h1.html(" Nadu. The shikhara of the temple is made from a single 80-tonne piece of granite. ");

                this.op8h2 = createElement('h3');
                this.op8h2.position(displayWidth-600,490);
                this.op8h2.html("This magnificent temple was built in just five years, (between 1004 AD and 1009 AD)");

                this.op8h3 = createElement('h3');
                this.op8h3.position(displayWidth-600,520);
                this.op8h3.html("during the reign of Rajaraja Chola.");

                this.op9 = createElement('h3');
                this.op9.position(displayWidth-600,550);
                this.op9.html("•	India is the largest democracy in the world, the 7th largest Country in the world,");

                this.op9h1 = createElement('h3');
                this.op9h1.position(displayWidth-600,580);
                this.op9h1.html(" and one of the most ancient civilizations.");

               this.next2.mousePressed(()=>{
                   this.op1.hide();
                   this.op2.hide();
                   this.op3.hide();
                   this.op4.hide();
                   this.op5.hide();
                   this.op6.hide();
                   this.op7.hide();
                   this.op8.hide();
                   this.op9.hide();
                   this.op2half.hide();
                   this.op3half.hide();
                   this.op3half2.hide();
                   this.op4half.hide();
                   this.op8h1.hide();
                   this.op8h2.hide();
                   this.op8h3.hide();
                   this.op9h1.hide();
                   this.next3.show();
                   this.next2.hide();

                   this.op10 = createElement('h3');
                   this.op10.position(displayWidth-600,100);
                   this.op10.html("•	The game of Snakes & Ladders was created by the 13th century poet saint Gyandev. ");

                   this.op11 = createElement('h3');
                   this.op11.position(displayWidth-600,130);
                   this.op11.html("It was originally called 'Mokshapat'. The ladders in the game represented virtues and ");

                   

                   this.op12 = createElement('h3');
                   this.op12.position(displayWidth-600,160);
                   this.op12.html("the snakes indicated vices. The game was played with cowrie shells and dices. In time,");

                   this.op13 = createElement('h3');
                   this.op13.position(displayWidth-600,190);
                   this.op13.html(" the game underwent several modifications, but its meaning remained the same, i.e. ");

                   this.op14 = createElement('h3');
                   this.op14.position(displayWidth-600,220);
                   this.op14.html("good deeds take people to heaven and evil to a cycle of re-births.");

                   this.op15 = createElement('h3');
                   this.op15.position(displayWidth-600,250);
                   this.op15.html("•	The world's highest cricket ground is in Chail, Himachal Pradesh. Built in 1893 ");

                   this.op16 = createElement('h3');
                   this.op16.position(displayWidth-600,280);
                   this.op16.html("after leveling a hilltop, this cricket pitch is 2444 meters above sea level.");

                   this.op17 = createElement('h3');
                   this.op17.position(displayWidth-600,310);
                   this.op17.html("•	India has the largest number of Post Offices in the world.");

                   this.op18 = createElement('h3');
                   this.op18.position(displayWidth-600,340);
                   this.op18.html("•	The largest employer in India is the Indian Railways, employing over a million people.");

                   this.op19 = createElement('h3');
                   this.op19.position(displayWidth-600,370);
                   this.op19.html("•	The world's first university was established in Takshila in 700 BC. More than ");

                   this.op20 = createElement('h3');
                   this.op20.position(displayWidth-600,400);
                   this.op20.html("10,500 students from all over the world studied more than 60 subjects. The University ");

                   this.op21 = createElement('h3');
                   this.op21.position(displayWidth-600,430);
                   this.op21.html("of Nalanda built in the 4th century was one of the greatest achievements of ancient ");

                   this.op22 = createElement('h3');
                   this.op22.position(displayWidth-600,460);
                   this.op22.html("India in the field of education.");

                   this.op23 = createElement('h3');
                   this.op23.position(displayWidth-600,490);
                   this.op23.html("•	Ayurveda is the earliest school of medicine known to mankind. The Father of");
                   
                   this.op24 = createElement('h3');
                   this.op24.position(displayWidth-600,520);
                   this.op24.html(" Medicine, Charaka, consolidated Ayurveda 2500 years ago.");

                   this.op25 = createElement('h3');
                   this.op25.position(displayWidth-600,550);
                   this.op25.html("•	India was one of the richest countries till the time of British rule in the early 17th ");

                   this.op26 = createElement('h3');
                   this.op26.position(displayWidth-600,580);
                   this.op26.html("Century. Christopher Columbus, attracted by India's wealth, had come looking for ");

                   this.op27 = createElement('h3');
                   this.op27.position(displayWidth-600,610);
                   this.op27.html("sea route to India when he discovered America by mistake.");

                   this.next3.mousePressed(()=>{
                       this.op10.hide();
                       this.op11.hide();
                       this.op12.hide();
                       this.op13.hide();
                       this.op14.hide();
                       this.op15.hide();
                       this.op16.hide();
                       this.op17.hide();
                       this.op18.hide();
                       this.op19.hide();
                       this.op20.hide();
                       this.op21.hide();
                       this.op22.hide();
                       this.op23.hide();
                       this.op24.hide();
                       this.op25.hide();
                       this.op26.hide();
                       this.op27.hide();
                       this.next4.show();
                       this.next3.hide();

                       this.op28 = createElement('h3');
                       this.op28.position(displayWidth-600,100);
                       this.op28.html("•	The Art of Navigation & Navigating was born in the river Sindh over 6000 years ");

                       this.op29 = createElement('h3');
                       this.op29.position(displayWidth-600,130);
                       this.op29.html("ago. The very word Navigation is derived from the Sanskrit word 'NAVGATIH'. The ");

                       this.op30 = createElement('h3');
                       this.op30.position(displayWidth-600,160);
                       this.op30.html("word navy is also derived from the Sanskrit word 'Nou'.");

                       this.op31 = createElement('h3');
                       this.op31.position(displayWidth-600,190);
                       this.op31.html("•	Bhaskaracharya rightly calculated the time taken by the earth to orbit the Sun ");

                       this.op32 = createElement('h3');
                       this.op32.position(displayWidth-600,220);
                       this.op32.html("hundreds of years before the astronomer Smart. According to his calculation, the ");

                       this.op33 = createElement('h3');
                       this.op33.position(displayWidth-600,250);
                       this.op33.html("time taken by the Earth to orbit the Sun was 365.258756484 days.");

                       this.op34 = createElement('h3');
                       this.op34.position(displayWidth-600,280);
                       this.op34.html("•	The value of pi was first calculated by the Indian Mathematician Budhayana, and ");

                       this.op35 = createElement('h3');
                       this.op35.position(displayWidth-600,310);
                       this.op35.html("he explained the concept of what is known as the Pythagorean Theorem. He ");

                       this.op36 = createElement('h3');
                       this.op36.position(displayWidth-600,340);
                       this.op36.html("discovered this in the 6th century, long before the European mathematicians.");

                       this.op37 = createElement('h3');
                       this.op37.position(displayWidth-600,370);
                       this.op37.html("•	Algebra, Trigonometry and Calculus also originated in India.Quadratic Equations ");

                       this.op38 = createElement('h3');
                       this.op38.position(displayWidth-600,400);
                       this.op38.html("were used by Sridharacharya in the 11th century. The largest numbers the Greeks ");

                       this.op39 = createElement('h3');
                       this.op39.position(displayWidth-600,430);
                       this.op39.html("and the Romans used were 106 whereas Hindus used numbers as big as 10*53 (i.e. 10 ");

                       this.op40 = createElement('h3');
                       this.op40.position(displayWidth-600,460);
                       this.op40.html("to the power of 53) with specific names as early as 5000 B.C.during the Vedic period.");

                       this.op41 = createElement('h3');
                       this.op41.position(displayWidth-600,490);
                       this.op41.html("Even today, the largest used number is Terra: 10*12(10 to the power of 12).");

                       this.op42 = createElement('h3');
                       this.op42.position(displayWidth-600,520);
                       this.op42.html("•	Until 1896, India was the only source of diamonds in the world(Source: Gemological ");

                       this.op43 = createElement('h3');
                       this.op43.position(displayWidth-600,550);
                       this.op43.html("Institute of America).");

                       this.op44 = createElement('h3');
                       this.op44.position(displayWidth-600,580);
                       this.op44.html("•	The Baily Bridge is the highest bridge in the world. It is located in the Ladakh valley");

                       this.op45 = createElement('h3');
                       this.op45.position(displayWidth-600,610);
                       this.op45.html(" between the Dras and Suru rivers in the Himalayan mountains. It was built by the ");

                       this.op46 = createElement('h3');
                       this.op46.position(displayWidth-600,640);
                       this.op46.html("Indian Army in August 1982.");
                   })

                   this.next4.mousePressed(()=>{
                       this.op28.hide();
                       this.op29.hide();
                       this.op30.hide();
                       this.op31.hide();
                       this.op32.hide();
                       this.op33.hide();
                       this.op34.hide();
                       this.op35.hide();
                       this.op36.hide();
                       this.op37.hide();
                       this.op38.hide();
                       this.op39.hide();
                       this.op40.hide();
                       this.op41.hide();
                       this.op42.hide();
                       this.op43.hide();
                       this.op44.hide();
                       this.op45.hide();
                       this.op46.hide();
                       this.next4.hide();
                       this.next5.show();

                       this.op47 = createElement('h3');
                       this.op47.position(displayWidth-600,100);
                       this.op47.html("•	Sushruta is regarded as the Father of Surgery. Over2600 years ago Sushrata & his ");

                       this.op48 = createElement('h3');
                       this.op48.position(displayWidth-600,130);
                       this.op48.html("team conducted complicated surgeries like cataract, artificial limbs, cesareans, ");

                       this.op49 = createElement('h3');
                       this.op49.position(displayWidth-600,160);
                       this.op49.html("fractures, urinary stones, plastic surgery and brain surgeries.");

                       this.op50 = createElement('h3');
                       this.op50.position(displayWidth-600,190);
                       this.op50.html("•	Usage of anaesthesia was well known in ancient Indian medicine. Detailed ");

                       this.op51= createElement('h3');
                       this.op51.position(displayWidth-600,220);
                       this.op51.html("knowledge of anatomy, embryology, digestion, metabolism,physiology, etiology, ");

                       this.op52= createElement('h3');
                       this.op52.position(displayWidth-600,250);
                       this.op52.html("genetics and immunity is also found in many ancient Indian texts.");

                       this.op53= createElement('h3');
                       this.op53.position(displayWidth-600,280);
                       this.op53.html("•	The four religions born in India - Hinduism, Buddhism, Jainism, and Sikhism, are ");
             
                       this.op54= createElement('h3');
                       this.op54.position(displayWidth-600,310);
                       this.op54.html("followed by 25% of the world's population.");

                       this.op55= createElement('h3');
                       this.op55.position(displayWidth-600,340);
                       this.op55.html("•	Jainism and Buddhism were founded in India in 600 B.C. and 500 B.C. respectively.");

                       this.op56= createElement('h3');
                       this.op56.position(displayWidth-600,370);
                       this.op56.html("•	Islam is India's and the world's second largest religion.");

                       this.op57= createElement('h3');
                       this.op57.position(displayWidth-600,400);
                       this.op57.html("•	The oldest European church and synagogue in India are in the city of Cochin. They ");

                       this.op58= createElement('h3');
                       this.op58.position(displayWidth-600,430);
                       this.op58.html("were built in 1503 and 1568 respectively.");

                       this.op59= createElement('h3');
                       this.op59.position(displayWidth-600,460);
                       this.op59.html("•	Jews and Christians have lived continuously in India since 200 B.C. and 52 A.D. ");

                       this.op60= createElement('h3');
                       this.op60.position(displayWidth-600,490);
                       this.op60.html("respectively.");

                       this.op61= createElement('h3');
                       this.op61.position(displayWidth-600,520);
                       this.op61.html("•	The largest religious building in the world is Angkor Wat, a Hindu Temple in  ");

                       this.op62= createElement('h3');
                       this.op62.position(displayWidth-600,550);
                       this.op62.html("Cambodia built at the end of the 11th century.");

                       this.op63= createElement('h3');
                       this.op63.position(displayWidth-600,580);
                       this.op63.html("•	Sikhism originated in the Holy city of Amritsar in Punjab. Famous for housing the");

                       this.op64 = createElement('h3');
                       this.op64.position(displayWidth-600,610);
                       this.op64.html(" Golden Temple, the city was founded in 1577.");

                     
                   })

                   this.next5.mousePressed(()=>{
                       this.op47.hide();
                       this.op48.hide();
                       this.op49.hide();
                       this.op50.hide();
                       this.op51.hide();
                       this.op52.hide();
                       this.op53.hide();
                       this.op54.hide();
                       this.op55.hide();
                       this.op56.hide();
                       this.op57.hide();
                       this.op58.hide();
                       this.op59.hide();
                       this.op60.hide();
                       this.op61.hide();
                       this.op62.hide();
                       this.op63.hide();
                       this.op64.hide();
                       this.next5.hide();
                       this.next6.show();

                       	  this.op65 = createElement('h3');
	                      this.op65.position(displayWidth-600,100);
	                      this.op65.html("•    Varanasi, also known as Benaras, was called the Ancient City when Lord Buddha ");

                          this.op66 = createElement('h3');
	                      this.op66.position(displayWidth-600,130);
	                      this.op66.html("	visited it in 500 B.C., and is the oldest, continuously inhabited city in the world today.");

                          this.op67 = createElement('h3');
	                      this.op67.position(displayWidth-600,160);
	                      this.op67.html("•	His Holiness, the Dalai Lama, the exiled spiritual leader of Tibetan Buddhists, runs ");

                          this.op68 = createElement('h3');
	                      this.op68.position(displayWidth-600,190);
	                      this.op68.html("his government in exile from Dharmashala in northern India.");

                          this.op69 = createElement('h3');
	                      this.op69.position(displayWidth-600,220);
	                      this.op69.html("•	Martial Arts were first created in India, and later spread to Asia by Buddhist ");

                          this.op70 = createElement('h3');
	                      this.op70.position(displayWidth-600,250);
	                      this.op70.html("missionaries.");

                          this.op71 = createElement('h3');
	                      this.op71.position(displayWidth-600,280);
	                      this.op71.html("•	Yoga has its origins in India and has existed for over 5,000 years.");

                        

                   })

                   this.next6.mousePressed(()=>{
                    //    image(back1,displayWidth/2,displayHeight/2,100,100);
                    this.img1 = document.createElement("img");
                    this.img1.setAttribute("src","india.jpg");
                    this.img1.setAttribute("width","600");
                    this.img1.setAttribute("height","200");
                    this.img1.setAttribute("alt","indiaImg");
                    document.body.appendChild(this.img1);
                       this.op65.hide();
                       this.op66.hide();
                       this.op67.hide();
                       this.op68.hide();
                       this.op69.hide();
                       this.op70.hide();
                       this.op71.hide();
                       this.next6.hide();
                       this.op.hide();
                       this.next7.show();

                       this.op72 = createElement('h1');
                       this.op72.position(650,30);
                       this.op72.html("States and Union Territories");

                       this.op73 = createElement('h3');
                       this.op73.position(displayWidth-600,200);
                       this.op73.html("India, a union of states, is a Sovereign, Secular, Democratic Republic with a ");

                       this.op74 = createElement('h3');
                       this.op74.position(displayWidth-600,230);
                       this.op74.html("Parliamentary system of Government. The President is the constitutional head of ");

                       this.op75 = createElement('h3');
                       this.op75.position(displayWidth-600,260);
                       this.op75.html("Executive of the Union. In the states, the Governor, as the representative of the");

                       this.op76 = createElement('h3');
                       this.op76.position(displayWidth-600,290);
                       this.op76.html(" President, is the head of Executive. The system of government in states closely ");

                       this.op77 = createElement('h3');
                       this.op77.position(displayWidth-600,320);
                       this.op77.html("resembles that of the Union. There are 28 states and 8 Union territories in the ");

                       this.op78 = createElement('h3');
                       this.op78.position(displayWidth-600,350);
                       this.op78.html("country. Union Territories are administered by the President through an ");

                       this.op79 = createElement('h3');
                       this.op79.position(displayWidth-600,380);
                       this.op79.html("Administrator appointed by him/her. From the largest to the smallest, each State/UT ");

                       this.op80 = createElement('h3');
                       this.op80.position(displayWidth-600,410);
                       this.op80.html("of India has a unique demography, history and culture, dress, festivals, language etc. ");

                       this.op81 = createElement('h3');
                       this.op81.position(displayWidth-600,440);
                       this.op81.html("This section introduces you to the various States/UTs in the Country and urges you to ");

                       this.op82 = createElement('h3');
                       this.op82.position(displayWidth-600,470);
                       this.op82.html("explore their magnificent uniqueness.");
                   })

                   this.next7.mousePressed(()=>{
                       this.op72.hide();
                       this.op73.hide();
                       this.op74.hide();
                       this.op75.hide();
                       this.op76.hide();
                       this.op77.hide();
                       this.op78.hide();
                       this.op79.hide();
                       this.op80.hide();
                       this.op81.hide();
                       this.op82.hide();
                       this.next7.hide();
                       this.next.hide();
        this.state.position(displayWidth/2+10,displayHeight/2);
                this.state.style('background','orange');

                
                this.ut.position(displayWidth/2-100,displayHeight/2);
                this.ut.style('background','lightGreen');
                
              this.state.mousePressed(()=>{
                  this.state.hide();
                  this.ut.hide();
                  state = new State();
                  state.display();
              })
              this.ut.mousePressed(()=>{
                this.state.hide();
                this.ut.hide();
                ut = new UT();
                ut.display();
            })

                   })

               })
        
            })
            
        })
    }
}