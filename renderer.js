document.getElementById('test1').addEventListener('click', function(){
    console.log("test mother fucker");
});

document.getElementById('test2').addEventListener('click', (e) => {
    e.preventDefault();
    window.getHotelInfo();
});