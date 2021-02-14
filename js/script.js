const date = new Date();
/*############## show side bar #########*/
$('#showSidebar').on('click', function () {
    $('#sidebar-ii .sidebar-inner').removeClass('d-none');
    $('#sidebar-ii .sidebar-inner').addClass('animate__slideInLeft');
    $('#my-sticky-top').removeClass('my-white-bg');

    $('.overlay').addClass('active');

});

$('#hideSidebar, .overlay').on('click', function () {
    $('#sidebar-ii .sidebar-inner').addClass('d-none');
    $('#my-sticky-top').addClass('my-white-bg');
    $('.overlay').removeClass('active');
});

const renderCalender = () => {
    date.setDate(1);
    let monthDays = document.querySelector(".days");
    const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.querySelector(".date p").innerHTML = months[date.getMonth()] + " " + date.getFullYear();
    const firstDay = date.getDay();
    console.log(firstDay);

    let days = "";
    for(let x=firstDay; x>0; x-- ) {
        days += `<div style="background-color: #fff;
        border-radius: 0;
        cursor: default;"></div>`;
    }
    for(let i=1; i<=lastDay; i++) {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            days += `<div class="today">${i}</div>`; 
        } else {
            days += `<div>${i}</div>`;
        }
        monthDays.innerHTML = days
    }
}
document.querySelector(".prev").addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalender()
});
document.querySelector(".next").addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalender()
});
renderCalender()