class UT{
    constructor(){
        this.title1 = createElement('h1');
        this.title2 = createElement('h1');
        this.button1 = createButton('ANDAMAN AND NICOBAR ISLANDS');
        this.button1.style('background','transparent');
        this.button2 = createButton('CHANDIGARH');
        this.button2.style('background','transparent');
        this.button3 = createButton('DADRA AND NAGAR HAVELI AND DAMAN AND DIU');
        this.button3.style('background','transparent');
        this.button4 = createButton('DELHI');
        this.button4.style('background','transparent');
        this.button5 = createButton('JAMMU AND KASHMIR');
        this.button5.style('background','transparent');
        this.button6 = createButton('LADAKH');
        this.button6.style('background','transparent');
        this.button7 = createButton('LAKSHADWEEP');
        this.button7.style('background','transparent');
        this.button8 = createButton('PUDUCHERRY');
        this.button8.style('background','transparent');
        this.back  = createButton('BACK');
        this.back.position(900,670);
        this.back.style('background','skyBlue');
        this.back.style('width','200px');
        this.back.style('height','20px');
    }
    display(){
        this.title1.position(500,30);
        this.title2.position(700,80);
        this.title1.html("UNION");
        this.title2.html("TERRITORIES");
        this.button1.position(500,230);
        this.button2.position(900,230);
        this.button3.position(500,330);
        this.button4.position(900,330);
        this.button5.position(500,430);
        this.button6.position(900,430);
        this.button7.position(500,530);
        this.button8.position(900,530);

        this.back.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.back.hide();
            this.title1.hide();
            this.title2.hide();
            form.state.show();
            form.ut.show();
        })

        this.button1.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.back.hide();
            this.title1.hide();
            this.title2.hide();

            ut1 = new U1();
            ut1.display();

            back.mousePressed(()=>{
                ut1.opt1.hide();
                ut1.opt2.hide();
                ut1.opt3.hide();
                ut1.opt4.hide();
                ut1.opt5.hide();
                ut1.opt6.hide();
                ut1.title.hide();
                back.hide();

                this.button1.show();
                this.button2.show();
                this.button3.show();
                this.button4.show();
                this.button5.show();
                this.button6.show();
                this.button7.show();
                this.button8.show();
                this.back.show();
                this.title1.show();
                this.title2.show();
                gs=0;
            })
        })
        this.button2.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.back.hide();
            this.title1.hide();
            this.title2.hide();

            ut2 = new U2();
            ut2.display();

            back.mousePressed(()=>{
                ut2.opt1.hide();
                ut2.opt2.hide();
                ut2.opt3.hide();
                ut2.opt4.hide();
                ut2.opt5.hide();
                ut2.opt6.hide();
                ut2.title.hide();
                back.hide();

                this.button1.show();
                this.button2.show();
                this.button3.show();
                this.button4.show();
                this.button5.show();
                this.button6.show();
                this.button7.show();
                this.button8.show();
                this.back.show();
                this.title1.show();
                this.title2.show();
                gs=0;
            })
        })
        this.button3.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.back.hide();
            this.title1.hide();
            this.title2.hide();

            ut3 = new U3();
            ut3.display();

            back.mousePressed(()=>{
                ut3.opt1.hide();
                ut3.opt2.hide();
                ut3.opt3.hide();
                ut3.opt4.hide();
                ut3.opt5.hide();
                ut3.opt6.hide();
                ut3.title.hide();
                back.hide();

                this.button1.show();
                this.button2.show();
                this.button3.show();
                this.button4.show();
                this.button5.show();
                this.button6.show();
                this.button7.show();
                this.button8.show();
                this.back.show();
                this.title1.show();
                this.title2.show();
                gs=0;
            })
        })
        this.button4.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.back.hide();
            this.title1.hide();
            this.title2.hide();

            ut4 = new U4();
            ut4.display();

            back.mousePressed(()=>{
                ut4.opt1.hide();
                ut4.opt2.hide();
                ut4.opt3.hide();
                ut4.opt4.hide();
                ut4.opt5.hide();
                ut4.opt6.hide();
                ut4.title.hide();
                back.hide();

                this.button1.show();
                this.button2.show();
                this.button3.show();
                this.button4.show();
                this.button5.show();
                this.button6.show();
                this.button7.show();
                this.button8.show();
                this.back.show();
                this.title1.show();
                this.title2.show();
                gs=0;
            })
        })
        this.button5.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.back.hide();
            this.title1.hide();
            this.title2.hide();

            ut5 = new U5();
            ut5.display();

            back.mousePressed(()=>{
                ut5.opt1.hide();
                ut5.opt2.hide();
                ut5.opt3.hide();
                ut5.opt4.hide();
                ut5.opt5.hide();
                ut5.opt6.hide();
                ut5.title.hide();
                back.hide();

                this.button1.show();
                this.button2.show();
                this.button3.show();
                this.button4.show();
                this.button5.show();
                this.button6.show();
                this.button7.show();
                this.button8.show();
                this.back.show();
                this.title1.show();
                this.title2.show();
                gs=0;
            })
        })
        this.button6.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.back.hide();
            this.title1.hide();
            this.title2.hide();

            ut6 = new U6();
            ut6.display();

            back.mousePressed(()=>{
                ut6.opt1.hide();
                ut6.opt2.hide();
                ut6.opt3.hide();
                ut6.opt4.hide();
                ut6.opt5.hide();
                ut6.opt6.hide();
                ut6.title.hide();
                back.hide();

                this.button1.show();
                this.button2.show();
                this.button3.show();
                this.button4.show();
                this.button5.show();
                this.button6.show();
                this.button7.show();
                this.button8.show();
                this.back.show();
                this.title1.show();
                this.title2.show();
                gs=0;
            })
        })
        this.button7.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.back.hide();
            this.title1.hide();
            this.title2.hide();

            ut7 = new U7();
            ut7.display();

            back.mousePressed(()=>{
                ut7.opt1.hide();
                ut7.opt2.hide();
                ut7.opt3.hide();
                ut7.opt4.hide();
                ut7.opt5.hide();
                ut7.opt6.hide();
                ut7.title.hide();
                back.hide();

                this.button1.show();
                this.button2.show();
                this.button3.show();
                this.button4.show();
                this.button5.show();
                this.button6.show();
                this.button7.show();
                this.button8.show();
                this.back.show();
                this.title1.show();
                this.title2.show();
                gs=0;
            })
        })
        this.button8.mousePressed(()=>{
            this.button1.hide();
            this.button2.hide();
            this.button3.hide();
            this.button4.hide();
            this.button5.hide();
            this.button6.hide();
            this.button7.hide();
            this.button8.hide();
            this.back.hide();
            this.title1.hide();
            this.title2.hide();

            ut8 = new U8();
            ut8.display();

            back.mousePressed(()=>{
                ut8.opt1.hide();
                ut8.opt2.hide();
                ut8.opt3.hide();
                ut8.opt4.hide();
                ut8.opt5.hide();
                ut8.opt6.hide();
                ut8.title.hide();
                back.hide();

                this.button1.show();
                this.button2.show();
                this.button3.show();
                this.button4.show();
                this.button5.show();
                this.button6.show();
                this.button7.show();
                this.button8.show();
                this.back.show();
                this.title1.show();
                this.title2.show();
                gs=0;
            })
        })
    }
}