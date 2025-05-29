async function getInsult() {
   var insult = 'ERROR WHILE FETCHING INSULT';
   const res = await fetch('https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent('https://evilinsult.com/generate_insult.php?lang=en&type=text'))

   if (res.ok) {
       insult = await res.text();
   }
   return insult;
}

(async () => {
    const insult = await getInsult();
    console.log(insult);
})();
