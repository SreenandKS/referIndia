class S16{
    constructor (){
       this.title = createElement('h1');
       
      
    }

    display(){
        gs=16;
        this.title.position(650,30);
        this.title.html("MEGHALAYA");
        this.opt1 = createElement('h1.5');
        this.opt1.position(460,150);
        this.opt1.html("MEGHALAYA'S CAPITAL IS SHILLONG");
        this.opt2 = createElement('h1.5');
        this.opt2.position(460,250);
        this.opt2.html("ITS OFFICIAL LANGUAGE IS ENGLISH");
        this.opt3 = createElement('h1.5');
        this.opt3.position(460,350);
        this.opt3.html("ITS AREA IS 22,720 km²");
        this.opt4 = createElement('h1.5');
        this.opt4.position(460,450);
        this.opt4.html("ITS POPULATION IS ABOUT 26.5 LAKHS");
        this.opt5 = createElement('h1.5');
        this.opt5.position(460,550);
        this.opt5.html("FESTIVAL CELEBRATED IS WANGALA");
        this.opt6 = createElement('h1.5');
        this.opt6.position(460,650);
        this.opt6.html("NONGKREM DANCE IS FAMOUS DANCE FORM AT MEGHALAYA");
        back.show();
        
        
    }
}