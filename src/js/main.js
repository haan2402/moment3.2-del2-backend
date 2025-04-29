//javascript för startsida
"use strict";

document.addEventListener('DOMContentLoaded', () => {
    getExperience();
});

const api = "http://localhost:3000/api/experiences"

//funktion för att hämta API
async function getData() {
    try {
        const response = await fetch(api);
        if(!response.ok) {
            throw new Error('Problem med anslutning')
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Fel vid anslutning", error);
    }
}

//funktion som visar datan från REST-webbtjänsten
async function getExperience() {
    const experiences = await getData();
    const experienceList = document.getElementById('list-experience');

    if(!experienceList) {
        console.error("Listan hittades inte");
        return;
    }
    //rensar i formläret innan nytt läggs in
    experienceList.innerHTML = "";

    experiences.forEach(experience => {
        //för att datumet ska synas såhär: 29 april 2025
        const showStartDate = new Date(experience.startdate).toLocaleDateString("sv-SE", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        const showEndDate = new Date(experience.enddate).toLocaleDateString("sv-SE", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        //hur utskriften ser ut på startsidan
        const li = document.createElement('li');
        li.innerHTML = `
        <div class="experience-box">
        <div class="top">
        <h2><strong>Företag: </strong>${experience.company}</h2>
        <h3><strong>Titel: </strong>${experience.jobtitle}</h3>
        </div>
        <p><strong>När: </strong>${showStartDate} - ${showEndDate}</p>
        <p><strong>Beskrivning: </strong>${experience.description}</p>
        <button class="delete-Button">Radera</button>
        </div>
        `;

        //händelselyssnare för radera knappen
        const deleteBtn = li.querySelector('.delete-Button');
        deleteBtn.addEventListener('click', () => removeExperience(experience._id));
    
        experienceList.appendChild(li);
    });    
}

//funktion för att radera en erfarenhet
async function removeExperience(id) {
    try {
        const response = await fetch(`${api}/${id}`, {
            method: 'DELETE',
    });
    getExperience();
    } catch (err) {
        console.log("Gick inte att radera erfarenhet..", err);
    }
} 
