var data=[]

function add(){
    var item_id = document.getElementById("id").value
    var item_name = document.getElementById("name").value
    var item_age = document.getElementById("age").value

    var item={
        Id:item_id,
        Name:item_name,
        Age:item_age
    }

    let index = data.findIndex((c)=>c.Id==item.Id)

    if(index>=0){
        data.splice(index,1,item)
    }else{
        data.push(item)
    }





    render()
    clear()
}

function render(){
    table = `
    <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
        </tr>`

        for(let i=0;i<data.length;i++){
            table += `
            <tr>
                    <th>${data[i].Id}</th>
                    <th>${data[i].Name}</th>
                    <th>${data[i].Age}</th>
                    <th><button onclick="deleteItem(${data[i].Id})">Delete</button></th>
                    <th><button onclick="editItem(${data[i].Id})">Update</button></th>
                </tr>`        
        }
        document.getElementById("render").innerHTML= table
}
function clear(){
    document.getElementById("id").value="";
    document.getElementById("name").value="";
    document.getElementById("age").value="";
}
function deleteItem(x){
    for(let i=0;i<data.length;i++){
        if(data[i].Id==x){
            data.splice(i, 1)

            render()
        }
    }
}
function editItem(x){
    for(let i=0;i<data.length;i++){
        if(data[i].Id==x){
            document.getElementById("id").value = data[i].Id;
            document.getElementById("name").value = data[i].Name;
            document.getElementById("age").value = data[i].Age;
        }
    }
}