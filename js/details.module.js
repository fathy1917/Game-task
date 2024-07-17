import { Ui } from "./ui.module.js";

export class Details {
    constructor(id){
        document.getElementById("close").addEventListener("click", function(){
            document.getElementById("section-details").classList.add("d-none")
            document.getElementById("nav").classList.remove("d-none")
            document.getElementById("home").classList.remove("d-none")
        })
        
        this.ui = new Ui();
        this.loading = document.querySelector(".loading")
        this.getDetails(id);

    };

    async getDetails(id){
        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8dfdcf90cemshbb6e5d7332c56f5p1de838jsn28e7312718ef',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
        const data = await api.json()
        // console.log(data);
        
        new Ui().displayDetails(data);
        this.loading.classList.add("d-none")

    }
}