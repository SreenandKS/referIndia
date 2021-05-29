class U3{
    constructor(){
        this.title = createElement('h2');
    }
    display(){
        gs = 31;
        this.title.position(500,30);
        this.title.html("DADRA AND NAGAR HAVELI AND DAMAN AND DIU");
        this.opt1 = createElement('h1.5');
        this.opt1.position(460,150);
        this.opt1.html("ITS CAPITAL IS DAMAN");
        this.opt2 = createElement('h1.5');
        this.opt2.position(460,250);
        this.opt2.html("ITS OFFICIAL LANGUAGE ARE GUJARATI,MARATHI,HINDI AND ENGLISH");
        this.opt3 = createElement('h1.5');
        this.opt3.position(460,350);
        this.opt3.html("ITS AREA IS 603 km²");
        this.opt4 = createElement('h1.5');
        this.opt4.position(460,450);
        this.opt4.html("ITS POPULATION IS ABOUT 5.9 LAKHS");
        this.opt5 = createElement('h1.5');
        this.opt5.position(460,550);
        this.opt5.html("THERE ARE 3 DISTRICTS");
        this.opt6 = createElement('h1.5');
        this.opt6.position(460,650);
        this.opt6.html("IT IS ESTABLISHED AT 26 JANUARY 2020");
        back.show();
    }
}