export class Ui {
    constructor(){

    };

    display(data){
        let cartona = "";
        for(var i = 0; i < data.length; i++){
            let shortDescription = data[i].short_description.split(" ").slice(0, 8).join(" ");
            cartona += `
                <div class="col-3 py-3">
                    <div class="item text-center card-details" data-id="${data[i].id}">
                        <div class="item-content">
                            <img src="${data[i].thumbnail}" class="w-100 p-3" alt="">
                            <div class="d-flex justify-content-between px-3">
                                <h3 class="h6 text-white">${data[i].title}</h3>
                                <span class="badge bg p-2">Free</span>
                            </div>

                            <p class="p-c text-center mt-3">${shortDescription}</p>

                            <div class="card-f d-flex justify-content-between p-2">
                                <span class="badge badge-color">${data[i].genre}</span>
                                <span class="badge badge-color">${data[i].platform}</span>
                            </div>
                        </div>
                    </div>
                </div>`
        }
        document.getElementById("myRow").innerHTML = cartona
    }

    displayDetails(data){
        const detailsBox = `                
        <div class="col-4">
                    <img src="${data.thumbnail}" class="mt-3" alt="">
                </div>
                <div class="col-8">
                    <h3>Title: Tarisland</h3>
                    <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
                    <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
                    <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
                    <p class="small">${data.description}</p>
                    <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
        </div>`

        document.getElementById("details-row").innerHTML = detailsBox
    }
}
