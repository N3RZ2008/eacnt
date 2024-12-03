const modal = document.getElementById("modal");
const pModal = document.getElementById("pModal");
const texts = [
    "O acúmulo massivo de lixo no filme reflete a ausência de uma gestão sustentável de resíduos, alinhando-se ao ODS 12, que busca a redução do impacto ambiental por meio da reciclagem e da adoção de práticas sustentáveis. Em WALL-E, vemos o resultado de décadas de negligência ambiental, destacando a importância de estratégias de reaproveitamento e descarte consciente para evitar um cenário semelhante.",
    "A sociedade representada no filme é um retrato extremo de consumismo irresponsável, onde os humanos são retratados como dependentes de produtos e serviços automatizados, resultando em devastação ambiental. Essa abordagem destaca a urgência do ODS 12, que propõe repensar padrões de consumo e produção para torná-los mais sustentáveis e equilibrados.",
    "O filme enfatiza a importância de pequenas mudanças que levam a impactos significativos. A mensagem ressoa com os ODSs 7 e 12 ao sugerir o uso eficiente de recursos, reciclagem, e a transição para energias limpas, promovendo uma convivência mais harmônica com o meio ambiente.",
    "A tecnologia desempenha um papel dual no filme: enquanto possibilita o conforto humano a bordo da nave, ela também contribui para a degradação ambiental devido ao mau uso. Por outro lado, WALL-E e EVA representam o uso positivo da inovação para regenerar o planeta, alinhando-se aos ODSs 7 e 12 ao demonstrar como a tecnologia pode ser direcionada para práticas mais sustentáveis.",
    "O filme destaca que mudanças significativas começam com ações individuais e coletivas. WALL-E nos lembra que hábitos mais conscientes, como reciclar, reduzir o consumo desnecessário e valorizar os recursos naturais, são essenciais para alcançar os ODS, particularmente o ODS 12, que promove o consumo e produção sustentáveis.",
    "As cenas de uma Terra devastada são um alerta direto sobre as consequências de práticas irresponsáveis. Esse retrato reforça a necessidade de adotar metas como as do ODS 7 e 12, enfatizando energias renováveis e consumo responsável para evitar que a degradação ambiental atinja um ponto irreversível.",
    "O ODS 7 aborda a necessidade de garantir energia para todos, com foco na energia limpa, aquelas que são renováveis. Esse objetivo conecta vários aspectos da nossa vida, já que a energia é fundamental tanto no cotidiano quanto na produção e na prestação de serviços.",
    "O ODS 12 enfatiza a importância de assegurar padrões sustentáveis de consumo e produção, promovendo o uso eficiente de recursos, a redução de resíduos e a reciclagem. Esse objetivo visa minimizar os impactos ambientais e incentivar práticas responsáveis em todas as etapas da cadeia de consumo."
]
const srcs = [
    "https://masterdica.com/wp-content/uploads/2023/06/wall-e-md-2.jpg", 
    "https://omundodewalle.wordpress.com/wp-content/uploads/2013/12/em1.jpg", 
    "https://ulbra-to.br/encena/uploads/wall-e-screenshot-8.jpg", 
    "https://dentrodachamine.files.wordpress.com/2015/01/09.png", 
    "https://ulbra-to.br/encena/uploads/walle-eve-army-sm.jpg", 
    "https://assets.mubicdn.net/images/artworks/556332/images-original.png?1686643082", 
    "https://upload.wikimedia.org/wikipedia/commons/7/79/Objetivo_Desenvolvimento_Sustent%C3%A1vel_7_PT.webp", 
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSzmqAtcKakJ67ibPQ-jskxjjh-bFeMGOpg&s" 
]
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

function loadModal(index) {
    pModal.innerHTML = texts[index];
    imgModal.src = srcs[index];
    modal.style.display = "flex";
}
