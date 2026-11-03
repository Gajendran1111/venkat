class School {
    readonly stdname:string // readonly is use to if you want change the value for the student the readonly doesn't allow to chage the value like a final 
    stdclass:string; // regular property
    stdnumber?:number; // this is optional property when you use ?

    // constructor 

    constructor (stdname:string,stdclass :string,stdnumber?:number){
        this.stdname = stdname;
        this.stdclass = stdclass;
        this.stdnumber = stdnumber;
    }
    // method 

    stdDetails ():void{
        console.log("The Student Name is ",this.stdname);
        console.log("The class of the Student is ",this.stdclass );
        console.log("The Student number is ",this.stdnumber);
        
    }
 }
 let  execute = new School("Gajendran","7th Standed",9638527410);
  let  execute2 = new School("Gajendran","7th Standed");
  execute.stdDetails();
  execute2.stdDetails();
 execute.stdDetails();
//  execute.stdname="balaji"//  can't rename the stdname bcs its readonly property

