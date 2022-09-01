const user = [
    {
        item: "skippy peanut butter 160z",
        date: "07 nov,8:35pm",
        type: "discarded",
        estcost: "$40.27",
        last: "18 aug",
        list: "grocery",
        auto: "no",
        buynow: "",
    }
    ,
    {
        item: "wkippy peanut butter 160z",
        date: "07 nov,8:35pm",
        type: "discarded",
        estcost: "$40.27",
        last: "18 aug",
        list: "grocery",
        auto: "no",
        buynow: "",
    }
    ,
    {
        item: "skippy peanut butter 160z",
        date: "07 nov,8:35pm",
        type: "discarded",
        estcost: "$40.27",
        last: "18 aug",
        list: "grocery",
        auto: "no",
        buynow: "",
    }
    ,
    {
        item: "wkippy peanut butter 160z",
        date: "07 nov,8:35pm",
        type: "discarded",
        estcost: "$40.27",
        last: "18 aug",
        list: "grocery",
        auto: "no",
        buynow: "",
    }
    ,
    {
        item: "skippy peanut butter 160z",
        date: "07 nov,8:35pm",
        type: "discarded",
        estcost: "$40.27",
        last: "18 aug",
        list: "grocery",
        auto: "no",
        buynow: "",
    }
    ,
    {
        item: "skippy peanut butter 160z",
        date: "07 nov,8:35pm",
        type: "discarded",
        estcost: "$40.27",
        last: "18 aug",
        list: "grocery",
        auto: "no",
        buynow: "",
    }
    ,
    {
        item: "skippy peanut butter 160z",
        date: "07 nov,8:35pm",
        type: "discarded",
        estcost: "$40.27",
        last: "18 aug",
        list: "grocery",
        auto: "no",
        buynow: "",
    }
    ,
    {
        item: "skippy peanut butter 160z",
        date: "07 nov,8:35pm",
        type: "discarded",
        estcost: "$40.27",
        last: "18 aug",
        list: "grocery",
        auto: "no",
        buynow: "",
    }
]
const tdata = document.getElementById("tbody");
const table = document.querySelector("table");


function getdata(data) {
    data.forEach((data) => {
        const tr = document.createElement('tr');
        console.log(tr);
        for (i in data) {
            const td = document.createElement('td');
            td.textContent = data[i];
            tr.appendChild(td);
            console.log(tr);
        }
        tdata.appendChild(tr);
        console.log(tdata); 
    })
}
getdata(user);



function filterData() {
    const userTableBody = document.querySelector('#tbody'); /** get user tbody */
    const searchTerm = document.querySelector('#searchbar');
    // const noRecordDiv = document.querySelector('.no-records');
    const userTable = document.querySelector('.table');
    userTableBody.textContent = '';
    let filteredData = [];

    filteredData = searchTerm.value !== '' ? user.filter(item => item.name.toLowerCase().includes(searchTerm.value.toLowerCase())) : user;
    
    if (!filteredData.length) {
      userTable.classList.add(['d-none']);
      noRecordDiv.classList.remove(['d-none']);
    } else {
      userTable.classList.remove(['d-none']);
      noRecordDiv.classList.add(['d-none']);
    }
    
}