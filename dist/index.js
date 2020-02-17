document.addEventListener('DOMContentLoaded', function () {
   const app = new Vue({
      el: '#app',
      data: {
         interactions: new Array(),
         uri: "https://rxnav.nlm.nih.gov/REST/interaction/interaction.json"
      },
      mounted: function () {
         let $vm = this;
         fetch(`${$vm.uri}?rxcui=88014`)
         .then(response => { return response.json(); })
         .then(returnObj => {
            $vm.interactions = returnObj.interactionTypeGroup[0].interactionType[0].interactionPair;
            //console.log(returnObj);
         });
      },
      methods: {

      }
   });
});

if('serviceWorker' in navigator) {
   navigator.serviceWorker.register('sw.js');
};