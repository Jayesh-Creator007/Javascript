const submitdata = document.querySelector("#submitdata")
submitdata.addEventListener('submit', (e) => {
    // console.log(e.target);
    e.preventDefault()
    // alert("Form................")
    class common {
        constructor(who, name, mobile) {
            this.who = who
            this.name = name
            this.mobile = mobile
        }
        getDetails() {
            return `${this.who}<br>Name = ${this.name}<br>Mobile = ${this.mobile}`;
        }
    }
    class student extends common {
        constructor(who, name, mobile, GrId) {
            super(who, name, mobile)
            this.GrId = GrId
        }
        getDetails() {
            super.getDetails()
            return super.getDetails() + `<br>GR ID = ${this.GrId}`;
        }
    }
    class parent extends common {
        constructor(who, name, mobile, Relation) {
            super(who, name, mobile)
            this.Relation = Relation
        }
        getDetails() {
            super.getDetails()
            return super.getDetails() + `<br>Relation = ${this.Relation}`;
        }
    }
    let allInput = document.querySelectorAll("#submitdata input")
    console.log(allInput);
    const std1 = new student("Student", allInput[0].value, allInput[2].value, allInput[1].value)
    document.getElementById("student").innerHTML = std1.getDetails()

    const p1 = new parent("Parent", allInput[3].value, allInput[5].value, allInput[4].value)
    document.getElementById("parent").innerHTML = p1.getDetails()
    submitdata.reset();
})