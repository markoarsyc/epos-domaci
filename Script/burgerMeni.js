$("#BURGER").click(()=>{
    $(".vertikalni-meni").toggle("slow");
})

$("#BURGER").mouseenter(()=>{
    $("#BURGER").css("opacity","70%");
})

$("#BURGER").mouseleave(()=>{
    $("#BURGER").css("opacity","100%");
})