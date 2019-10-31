document.getElementById('aa').addEventListener('click', addData);
let arr = [];
let num = 0;
data();

function data() {
    const myheaders = new Headers();
    myheaders.append('Authorization', 'Bearer ETnS0SprqU6-h4vaPmVUxO0SJ4bOZGyqO7QU');
    fetch('https://gorest.co.in/public-api/photos', {
            method: 'GET',
            headers: myheaders,
        })
        .then(Response =>
            Response.json())
        .then(result => {
            arr.push(result.result);
            addData();
            num++;
            console.log(arr);
        });
}


function addData() {
    const arr1 = arr[num];

    const html = arr1.map((item, index) => {
        console.log(item.thumbnail);
        return '<img class="img1" src="' + item.thumbnail + '" data-id="' + index + '" onClick="togglePhoto(event)">';
    });
const div = document.createElement("DIV");
const bigdiv = document.getElementById('add1');
console.log(html);
div.setAttribute('id','small'+num);   
bigdiv.appendChild(div);
document.getElementById('small'+num).innerHTML = html.join('');
}

function togglePhoto(event) {
    console.log(num);
    console.log(arr);
    document.getElementById("aa").style.visibility = "visible"
    const index = event.target.getAttribute('data-id');
    console.log(index)
    document.getElementById("add").innerHTML = '<div class= "imgDiv"><img   src="' + arr[index].url + '" class="img3"><div class="text-block">' + arr[index].title + ' </div></div>';
}
document.getElementById("close").addEventListener('click', close);

function close() {
    document.getElementById("aa").style.visibility = "hidden";
}
