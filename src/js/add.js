   //javascript kod för add-sidan
   "use strict";

   //hanterar formuläret på add-sidan
    document.addEventListener('DOMContentLoaded', () => {

        const form = document.getElementById('experience-form');
        if(form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                await addExperience();
            });
        }
    });
    
    //funktion som lägger till ny erfarenhet från fromulär
    async function addExperience() {
        const formMessage = document.getElementById('message');
        formMessage.textContent = '';
    
        //gör variabler för att hämta in värden för fälten
        const companyname = document.getElementById('company').value;
        const jobtitle = document.getElementById('jobtitle').value;
        const startdate = document.getElementById('startdate').value;
        const enddate = document.getElementById('enddate').value;
        const description = document.getElementById('description').value;
    
        //objekt för ny erfarenhet
        const experience = {company, jobtitle, startdate, enddate, description}
    
        //validering av fält, alla fält måste fyllas i för att kunna skicka formulär
        if(!company || !jobtitle || !startdate || !enddate || !description) {
            formMessage.textContent = "Alla fält måste fyllas i!";
            formMessage.style.color = 'red';
            return; 
        } 
    
        let response = await fetch('http://localhost:3000/api/experiences', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(experience)
        });
    
        //om response är ok lägger till grön text 
        if(response.ok) {
            formMessage.textContent = 'Erfarenhet är tillagd i listan!';
            formMessage.style.color = 'green';
            document.getElementById('experience-form').reset();
        } else {
            formMessage.textContent = 'Något gick fel, försök igen...'
        }
    }