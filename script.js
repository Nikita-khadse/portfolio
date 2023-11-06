
var typed = new Typed(".typing",{
    strings:["Fresher","Web Designer","Web Developer","Frontent Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li");
      totalNavList = navList.length;
      for(let i=0;i<totalNavList;i++){
        // console.log(navList[i]);
        const a = navList[i].querySelector("a");
        // console.log(a);
        a.addEventListener("click", function()
        {
            // this.classList.add("active")
            for(let j=0;j<totalNavList;j++){
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active")
            showSection(this);
        })
      }

      function showSection(element){
        const target = console.log(element.getAttribute("href").split("#"));
        // target = href[1];
        // console.log(target);
        document.querySelector("#" + target).classList.add()
      }