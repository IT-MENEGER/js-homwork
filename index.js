// // let text = prompt("key kiriting");
// var text = "id";

// const myObject = {
//   postId: 1,
//   id: 1,
//   name: "id labore ex et quam laborum",
//   email: "Eliseo@gardner.biz",
//   body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//   title:
//     "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   description:
//     "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   url: "https://via.placeholder.com/600/92c952",
//   thumbnailUrl: "https://via.placeholder.com/150/92c952",
//   completed: false,
// };

// switch (key) {
//     case id:{

//        break;
//     }

//     default:
//         break;
// }

let input = document.getElementById("search");
let wait = document.getElementById("wait");
let result = document.getElementById("result");

let arr = ["Eshshak","E Qovun", "Qovoq Kalla", ];
let arr2 = ["termin", "atama", "so'z" ];

var find = function() {
    
    wait.innerHTML = "Loading..."
    result.innerHTML = "";
    setTimeout(() => {
        wait.innerHTML = "";
        let randomIndex2 = Math.floor(Math.random() * arr2.length);
        result.innerHTML = arr[Math.floor(Math.random() * arr.length)] + " bunday " + arr2[Math.floor(Math.random() * arr2.length)] + " yo'q!";
    }, 2000);
};