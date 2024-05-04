const name1 = document.getElementById("name");
const saveprofile1 = document.getElementById("saveprofile1");
const saveprofile2 = document.getElementById('saveprofile2')
const summary = document.getElementById("summary");


saveprofile1?.addEventListener("click", function() {
    if (name1.value === "") {
        alert("Please enter your name");
    } else {
        const valuen = name1.value;  // Corrected variable name
        localStorage.setItem('name', valuen);
        location.reload();
        window.location.href="summary.html"

    }
});

saveprofile2?.addEventListener("click", function() {
    if (summary.value === "") {
        alert("Please enter the field");
    } else {
        const valuesummary = summary.value;  // Corrected variable name
        localStorage.setItem('summary', valuesummary);
        location.reload();
        window.location.href="techskills.html"

    }
});




///techstacks techskills
const techskills1 = document.getElementById("techskills1")
const techskills2 = document.getElementById("techskills2")
const techskills3 = document.getElementById("techskills3")
const techskills4 = document.getElementById("techskills4")

const savetechstack = document.getElementById("savetechstack");

savetechstack?.addEventListener("click", function()
{
    if(techskills1.value==="" || techskills2.value==="" || techskills3.value==="" || techskills4.value===""){
        alert("Enter all details")
    }

    else{

        const techskills1n = techskills1.value;
        localStorage.setItem('techskill1',techskills1n)
        const techskills2n = techskills2.value;
        localStorage.setItem('techskill2',techskills2n)
        const techskills3n = techskills3.value;
        localStorage.setItem('techskill3',techskills3n)
        const techskills4n = techskills4.value;
        localStorage.setItem('techskill4',techskills4n)
     
        location.reload();
        window.location.href="project.html"

    }
})


///save project 
const project1title = document.getElementById("project1title")
const project1summary = document.getElementById("project1summary")
const project2title = document.getElementById("project2title")
const project2summary = document.getElementById("project2summary")
const project3title = document.getElementById("project3title")
const project3summary = document.getElementById("project3summary")



const saveproject = document.getElementById("saveproject");

saveproject?.addEventListener("click", function()
{
    if(project1title.value==="" ){
        alert("Enter all details")
    }

    else{

        const project1titlen = project1title.value;
        localStorage.setItem('project1title',project1titlen)
        const project2titlen = project2title.value;
        localStorage.setItem('project2title',project2titlen)
        const project3titlen = project3title.value;
        localStorage.setItem('project3title',project3titlen)

        const project1summaryn = project1summary.value;
        localStorage.setItem('project1summary',project1summaryn)
        
        const project2summaryn = project2summary.value;
        localStorage.setItem('project2summary',project2summaryn)
        
        const project3summaryn = project3summary.value;
        localStorage.setItem('project3summary',project3summaryn)
        
     
        location.reload();
        window.location.href="contact.html"

    }
})
///save contact
const email = document.getElementById("email")
const github = document.getElementById("github")




const savecontact = document.getElementById("savecontact");

savecontact?.addEventListener("click", function()
{
    if(email.value==="" || github.value ==="" ){
        alert("Enter all details")
    }

    else{

        const emailn = email.value;
        localStorage.setItem('email',emailn)
        const githubn = github.value;
        localStorage.setItem('github',githubn)
       
        
     
        location.reload();
        window.location.href="downloadresume.html"

    }
})















//////////////////////////////////

const resumename = document.getElementById("resumename");
const resumesummary = document.getElementById("resumesummary");

function functiontodownload(){

    const valuen = localStorage.getItem("name");
    const valuesummary = localStorage.getItem("summary")
    const techskill1n = localStorage.getItem("techskill1"); 
    const techskill2n = localStorage.getItem("techskill2"); 
    const techskill3n = localStorage.getItem("techskill3"); 
    const techskill4n = localStorage.getItem("techskill4"); 
    
    const project1titlen = localStorage.getItem("project1title"); 
    const project2titlen = localStorage.getItem("project2title"); 
    const project3titlen = localStorage.getItem("project3title"); 

    const project1summaryn = localStorage.getItem("project1summary"); 
    const project2summaryn = localStorage.getItem("project2summary"); 
    const project3summaryn = localStorage.getItem("project3summary"); 


    const emailn = localStorage.getItem("email"); 
    const githubn = localStorage.getItem("github"); 



    resumename.innerHTML= `${valuen}`
    resumesummary.innerHTML=`${valuesummary}`

    techskills1.innerHTML=`${techskill1n}`
    techskills2.innerHTML=`${techskill2n}`
    techskills3.innerHTML=`${techskill3n}`
    techskills4.innerHTML=`${techskill4n}`

    project1title.innerHTML=`${project1titlen}`
    project2title.innerHTML=`${project2titlen}`
    project3title.innerHTML=`${project3titlen}`

    project1summary.innerHTML=`${project1summaryn}`
    project2summary.innerHTML=`${project2summaryn}`
    project3summary.innerHTML=`${project3summaryn}`


    email.innerHTML=`${emailn}`
    github.innerHTML=`${githubn}`

    

  
    
}


