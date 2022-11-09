
//Q2)using fat arrow function
class Student{
    constructor(name,age,marks)
    {
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setPlacementAge(minPlacementAge){
        console.log(this);
        return (minMarks) => {
            console.log('inside egligibleforCurrentCompany',this);
            if(this.marks > minMarks && this.age > minPlacementAge){
                console.log(this.name + " is ready for placement")
            }
            else{
                console.log(this.name + " is not ready for placements")
            }
        }
        }
}
let Tanu=new Student('Tanu',25,35);
let Chetan=new Student('Chetan',24,50);
 Tanu.setPlacementAge(18)(40);
 Chetan.setPlacementAge(18)(40);



