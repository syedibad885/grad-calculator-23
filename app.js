function cal() {
    let html = document.getelementByid("html").value
    css = document.getelementByid("css").value;
    phyton = document.getelementByid("phyton").value;
    designing =  document.getelementByid("graphic designing").value;

    let sum = parsefloat(html) + parseFloat(css) + parseFloat(phyton) + parseFloat(designing);

    document.getElementById("demo"),innerhtml = 'Total Marks =${sum}';
    let percentage = ( sum / 400) = 100;

    document.getAnimations("demo1").innerhtml = 'percentage is =$(percentage)%';


    if (percentage >= 100) {
        document.getElementById("demo2").innerHTML = 'Excelent';  
    } else if(percentage >= 80) {
        document.getElementById("demo2").innerHTML = 'Very Good Work';  
    } else if(percentage >= 60) {
        document.getElementById("demo2").innerHTML = 'Pass';  
    } else if(percentage >= 40) {
        document.getElementById(demo2).innerHTML = 'Need Work Hard';
    } else {
        document.getElementById(demo2).innerHTML = 'fail';
    }
}





