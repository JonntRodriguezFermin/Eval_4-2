
/*************************** ESTABLECER PERSONAJES ****************************/

if (document.querySelector("#template-card") != null) {

    document.addEventListener("DOMContentLoaded", () => {
        fetchData();
    });

    const cards = document.querySelector("#card-dinamica");
    const templateCard = document.querySelector("#template-card").content;

    const fetchData = async () => {
        try {

            const res = await fetch("https://rickandmortyapi.com/api/character");
            const data = await res.json();

            pintarDatos(data);
        } catch (error) {
            console.log(error);
        } finally {
  
        }
    };

    const pintarDatos = (data) => {
        const cards = document.getElementById("card-dinamicas");
        const templateCard = document.getElementById("template-card").content;
        const fragment = document.createDocumentFragment();


        data.results.forEach((item) => {
            const clone = templateCard.cloneNode(true);
            clone.querySelector("h5").textContent = item.name;
            clone.querySelector("p").textContent = item.species;
            clone.querySelector("img").setAttribute("src", item.image);
            clone.querySelector("a").setAttribute("character-id", item.id);

            fragment.appendChild(clone);
        });
        cards.appendChild(fragment);
    };

    //------------------------------------/

    const fetchDataPerson = async (personId) => {
            try {


                const resPerson = await fetch("https://rickandmortyapi.com/api/character/"+personId);
                const dataPerson = await resPerson.json();

                pintarPersonaje(dataPerson);
            } catch (error) {
                console.log(error);
            } finally {

            }
        };


    var modal = document.getElementById('detallesModal');

    modal.addEventListener('show.bs.modal', function () {
      const persons = document.getElementsByClassName("buscarPerson");
      var  executed = false;

      for (let per of persons) {
 
        per.addEventListener("click", function (){

            if (!executed) {
                let personID = per.getAttribute("character-id");
                fetchDataPerson(personID);
                executed = true;
            }

        });
        
      }

    });


    const pintarPersonaje = (data) => {

        //const cards_Persons = document.getElementById("card-modal");
        let templateCardPerson = document.getElementById("template-card-modal");
  
        //const fragmentPer = document.createDocumentFragment();

        //const clonePer = templateCardPerson.cloneNode(true);
        templateCardPerson.querySelector("h5").innerHTML = data.name;
        templateCardPerson.querySelector("img").setAttribute("src", data.image);
        if (data.type == "") {
           templateCardPerson.querySelector("ul li#tipo").innerHTML = "Oops. There's no Info"; 
        } else {
            templateCardPerson.querySelector("ul li#tipo").innerHTML = data.type;
        }
        templateCardPerson.querySelector("ul li#gender").innerHTML = data.gender;
        templateCardPerson.querySelector("ul li#species").innerHTML = data.species;
        //clonePer.querySelector("a").setAttribute("id", item.id);

        //fragmentPer.appendChild(clonePer);

        //const primero = document.getElementById("card-modal").childNodes[1];
    };


      modal.addEventListener('hide.bs.modal', function () {
        const templateCardPerson = document.getElementById("template-card-modal");

        templateCardPerson.querySelector("h5").textContent = "";
        templateCardPerson.querySelector("img").setAttribute("src", "");
        templateCardPerson.querySelector("ul li#tipo").textContent = ""; 
        templateCardPerson.querySelector("ul li#gender").textContent = "";
        templateCardPerson.querySelector("ul li#species").textContent = "";

      });
  

};



/*************************** ESTABLECER LOCATIONS ****************************/

if (document.querySelector("#template-card-locations") != null) {

    document.addEventListener("DOMContentLoaded", () => {
        fetchDataLocations();
    });

    const cards_locations = document.querySelector("#card-dinamicas-locations");
    const templateCard_locations = document.querySelector("#template-card-locations").content;

    const fetchDataLocations = async () => {
        try {
            //loadingData(true);

            const res_l = await fetch("https://rickandmortyapi.com/api/location");
            const data_l = await res_l.json();

            pintarLocations(data_l);
        } catch (error) {
            console.log(error);
        } finally {
            //loadingData(false);
        }
    };


    const pintarLocations = (data_locations) => {
        const cards_locations = document.getElementById("card-dinamicas-locations");
        const templateCard_locations = document.getElementById("template-card-locations").content;
        const fragment_locations = document.createDocumentFragment();


        data_locations.results.forEach((item) => {
            const clone_locations = templateCard_locations.cloneNode(true);
            clone_locations.querySelector("h5").textContent = item.name;
            clone_locations.querySelector("p").textContent = item.type;
            clone_locations.querySelector("a").setAttribute("location-id", item.id);

            fragment_locations.appendChild(clone_locations);
        });
        cards_locations.appendChild(fragment_locations);
    };

    /*--------------------------------------------------*/

     const fetchDataSingleLocations = async (locationId) => {
            try {


                const resLocation = await fetch("https://rickandmortyapi.com/api/location/"+locationId);
                const dataLocation = await resLocation.json();

                pintarLocation(dataLocation);
            } catch (error) {
                console.log(error);
            } finally {

            }
        };


    var modalLugar = document.getElementById('lugaresModal');

    modalLugar.addEventListener('show.bs.modal', function () {
      const locations = document.getElementsByClassName("detalleLugar");
      var  executed = false;

      for (let loca of locations) {
 
        loca.addEventListener("click", function (){

            if (!executed) {
                let locationID = loca.getAttribute("location-id");
                fetchDataSingleLocations(locationID);
                executed = true;
            }

        });
        
      }

    });


    const pintarLocation = (data) => {

        let templateCardLocation = document.getElementById("template-card-modal-location");
  
        templateCardLocation.querySelector("h5").innerHTML = data.name;
        if (data.type == "") {
           templateCardLocation.querySelector("ul li#type").innerHTML = "Oops. There's no Info"; 
        } else {
            templateCardLocation.querySelector("ul li#type").innerHTML = data.type;
        }
        templateCardLocation.querySelector("ul li#dimension").innerHTML = data.dimension;

    };


      modalLugar.addEventListener('hide.bs.modal', function () {
        const templateCardLocation = document.getElementById("template-card-modal-location");

        templateCardLocation.querySelector("h5").textContent = "";
        templateCardLocation.querySelector("ul li#type").textContent = ""; 
        templateCardLocation.querySelector("ul li#dimension").textContent = "";

      });
  

}

/*************************** ESTABLECER EPISODIOS ****************************/

if (document.querySelector("#template-card-episodes") != null) {

    document.addEventListener("DOMContentLoaded", () => {
        fetchDataEpisodes();
    });

    const cards_episodes = document.querySelector("#card-dinamicas-episodes");
    const templateCard_episodes = document.querySelector("#template-card-episodes").content;

    const fetchDataEpisodes = async () => {
        try {
            //loadingData(true);

            const res_e = await fetch("https://rickandmortyapi.com/api/episode");
            const data_e = await res_e.json();

            pintarEpisodes(data_e);
        } catch (error) {
            console.log(error);
        } finally {
            //loadingData(false);
        }
    };


    const pintarEpisodes = (data_episodes) => {
        const cards_episodes = document.getElementById("card-dinamicas-episodes");
        const templateCard_episodes = document.getElementById("template-card-episodes").content;
        const fragment_episodes = document.createDocumentFragment();


        data_episodes.results.forEach((item) => {
            const clone_episodes = templateCard_episodes.cloneNode(true);
            clone_episodes.querySelector("h5").textContent = item.name;
            clone_episodes.querySelector("p").textContent = item.air_date;
            clone_episodes.querySelector("a").setAttribute("episode-id", item.id);

            fragment_episodes.appendChild(clone_episodes);
        });
        cards_episodes.appendChild(fragment_episodes);
    };

    /*-----------------------------------------------------*/

    const fetchDataSingelEpisode = async (episodeId) => {
            try {


                const resEpisode = await fetch("https://rickandmortyapi.com/api/episode/"+episodeId);
                const dataEpisode = await resEpisode.json();

                pintarEpisodio(dataEpisode);
            } catch (error) {
                console.log(error);
            } finally {

            }
        };


    var episodioModal = document.getElementById('modalEpisodio');

    episodioModal.addEventListener('show.bs.modal', function () {
      const episodes = document.getElementsByClassName("detalleEpisodio");
      var  executed = false;

      for (let cap of episodes) {
 
        cap.addEventListener("click", function (){

            if (!executed) {
                let capituloID = cap.getAttribute("episode-id");
                fetchDataSingelEpisode(capituloID);
                executed = true;
            }

        });
        
      }

    });


    const pintarEpisodio = (data) => {

        let templateCardEpisode = document.getElementById("template-card-modal-episode");
  
        templateCardEpisode.querySelector("h5").innerHTML = data.name;
        templateCardEpisode.querySelector("ul li#fecha").innerHTML = data.air_date; 
        templateCardEpisode.querySelector("ul li#abrev").innerHTML = data.episode;

    };


      episodioModal.addEventListener('hide.bs.modal', function () {
        const templateCardEpisode = document.getElementById("template-card-modal-episode");

        templateCardEpisode.querySelector("h5").textContent = "";
        templateCardEpisode.querySelector("ul li#fecha").innerHTML = ""; 
        templateCardEpisode.querySelector("ul li#abrev").innerHTML = "";

      });
  

}
