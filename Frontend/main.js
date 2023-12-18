
function refresh() {
    axios.get("http://localhost:3000/getExpense")
        .then((res) => {
            for (let i = 0; i < res.data.all_users.length; i++) {
                detailsOnScreen(res.data.all_users[i]);
            }
        })
        .catch((err) => {
            console.log(err);
        })
}

refresh();

function Submit(event) {
    event.preventDefault(); //to avoid refreshing the site

    let amount = document.getElementById("amount").value;
    let description = Details.value;
    let options = inputGroupSelect02.value;

    let obj = {
        amount,
        description,
        options
    }

    storeUserDetails(obj);
}

function storeUserDetails(obj) {
    axios.post("http://localhost:3000/PostExpense", obj).then((res) => {
        detailsOnScreen(res.data.expense);
    }).catch((err) => {
        console.log(err)
    })
}


function detailsOnScreen(obj) {
    let childEle = document.createElement("li");
    let parentEle = document.getElementById("Options");

    childEle.textContent = obj.amount + " " + obj.description + " " + obj.options + " " + obj.id;
    childEle.setAttribute("hidden-id", obj.id);
    parentEle.appendChild(childEle);

    let editBtn = document.createElement("input");
    editBtn.value = "EDIT";
    editBtn.type = "button";

    let deleBtn = document.createElement("input");
    deleBtn.value = "DELETE";
    deleBtn.type = "button";

    childEle.appendChild(editBtn);
    childEle.appendChild(deleBtn);

    deleBtn.onclick = () => {
        Delete_fun(obj.id);
    }
    editBtn.onclick = () => {
        Edit_fun(obj);
        Delete_fun(obj.id);
    }

    // function Delete_fun() {
    //     localStorage.removeItem("details");
    //     parentEle.removeChild(childEle);
    // }

    function Edit_fun(obj) {
        amount.value = obj.amount;
        Details.value = obj.description;
        inputGroupSelect02.value = obj.options;
    }
}

async function Delete_fun(id) {
    let parent = document.getElementById('Options');
    for (let i = 0; i < parent.children.length; i++) {
        let child = parent.children[i];
        console.log(child.getAttribute('hidden-id'))
        if (child.textContent.includes(id)) {
            parent.removeChild(child);
            break;
        }
    }
    try {
        let result = await axios.delete("http://localhost:3000/deleteExpense" + `/${id}`);
        console.log(result);
        console.log("DELETED");

    } catch (error) {
        console.log(error);
    }
}