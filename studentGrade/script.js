function getMarks(){
    var maths = Number(document.getElementById("maths").value);
    var physics = Number(document.getElementById("physics").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var english = Number(document.getElementById("english").value);
    var physical_education = Number(document.getElementById("physical_education").value);
    var total = 500;
    var marksObtained = maths+physics+chemistry+english+physical_education;
    var percentage = (marksObtained / total) * 100;
    var grade = "";

    document.getElementById("percentage").innerHTML = percentage + "%";

    if(percentage >= 90){
        grade = "A+";
    }else if(percentage < 90 && percentage>= 80){
        grade = "A";
    }else if(percentage < 80 && percentage >= 70){
        grade = "B+";
    }else if(percentage < 70 && percentage >= 60){
        grade = "B";
    }else if(percentage < 60 && percentage >= 50){
        grade = "C+";
    }else if(percentage < 50 && percentage >= 40){
        grade = "C";
    }else if(percentage < 40){
        grade = "F";
    }
    document.getElementById("grade").innerHTML = grade;
    if(percentage < 40){
        document.getElementById("pass").innerHTML = "Sorry! you failed!. please try next time";
    }else{
        document.getElementById("pass").innerHTML = "Congratulate! You passed!.";
    }
}
