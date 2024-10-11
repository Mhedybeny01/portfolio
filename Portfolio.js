const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      moodeToggle = document.querySelector(".moode"),
      searchToggle = document.querySelector(".search"),
      input = document.querySelector(".inpuSh"),
      bar = document.querySelector(".bar"),
      barDop = document.querySelector(".barDop"),
      barlist = document.querySelector(".barlist");


      moodeToggle.addEventListener("click" ,()=> {
        moodeToggle.classList.toggle("active");
        body.classList.toggle("drak");
      })


      searchToggle.addEventListener("click" ,()=> {
        searchToggle.classList.toggle("active");
        input.classList.toggle("display");
        
      })


      barDop.addEventListener("click" , ()=>{
        barDop.classList.toggle("Act");
        barlist.classList.toggle("act2");


      })



    