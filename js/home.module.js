import { Details } from "./details.module.js"
import { Ui } from "./ui.module.js"

export class Home {
    constructor(){
        document.querySelectorAll('.nav-link').forEach(link=>{
            link.addEventListener("click", ()=> {
                document.querySelector(".navbar-nav .active").classList.remove("active")
                link.classList.add("active")
                this.getGames(link.textContent)
            })
        })

        this.loading = document.querySelector(".loading")
        this.ui = new Ui();
        this.details = new Details()
        this.getGames("MMORPG")
    };

    
    async getGames(category){

        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '8dfdcf90cemshbb6e5d7332c56f5p1de838jsn28e7312718ef',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

        const responsve = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
        const data = await responsve.json()

        // console.log(data);
        this.ui.display(data)


        document.querySelectorAll(".card-details").forEach(card=>{
            card.addEventListener("click", function(){
                document.getElementById("section-details").classList.remove("d-none")
                document.getElementById("nav").classList.add("d-none")
                document.getElementById("home").classList.add("d-none")
                new Details(card.dataset.id)
                
            })
        })
        this.loading.classList.add("d-none")
        
        


    
    }



}




