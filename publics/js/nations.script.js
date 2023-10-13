function deleteNation(id_nation){
    const t = confirm("Confirm Delete?");
    if (t){
        //thực hiện xóa
        fetch("/nations/" + id_nation, {
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(result => { 
            window.location.href = "http://localhost:5000/nations"
        })
        .catch(error=>{
            alert(error.message)
        })
    }
}

 