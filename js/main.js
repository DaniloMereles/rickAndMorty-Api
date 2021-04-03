const getCharacter = ()=>{
    const main = document.getElementById('main')

    fetch('https://rickandmortyapi.com/api/character').then(rest => rest.json()).then((rest)=>{
        const results = rest.results
        results.forEach(CharacterData => {
            main.innerHTML += `
                <article class="character">
                    <img src="${CharacterData.image}" alt="RickAndMorty" class="character__bg">

                    <div class="character__texts">
                        <div class="character__header">
                            <h2 class="character__texts-title">
                                ${CharacterData.name}
                            </h2>
    
                            <p class="character__text-info">
                                <span class="${CharacterData.status}"></span> ${CharacterData.status} - ${CharacterData.species}
                            </p>
                        </div>

                        <div class="character__info">
                            <h3 class="character__info-title">
                                Last known location:
                            </h3>

                            <p class="charcter__info-texts">
                                ${CharacterData.location.name}
                            </p>
                        </div>

                        <div class="character__info">
                            <h3 class="character__info-title">
                                First seen in:
                            </h3>

                            <p class="charcter__info-texts">
                                ${CharacterData.origin.name}
                            </p>
                        </div>
                    </div>
                </article>
            ` 
        });
    })
}

getCharacter()