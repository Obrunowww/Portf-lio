
export const temas =  {
    claro: {
        corDoTexto: '#000000',
        corDoTextoInfos: "white" ,
        headerColor: "#ffffff",
        background: "#bdd1de",
        background2: "#4180ab",
        background3: "#8ab3cf",
        corPrincipal: "#3206d3ab",
        corSecundaria: "#4b1cf7",
        corTerciariaEscura: "#170129bb",
        corTerciariaClara: "#8ab3cf",
        corDeDestaque: "red",
        corDeDestaqueClaro: "white",
        lineargradient: ""
    },
    escuro: {
        corDoTexto: 'white',
        corDoTextoInfos: "white" ,
        headerColor: "#1F1F1F",
        background: "#242424",
        background2: "#00000055",
        background3: "#ffffff86",
        corPrincipal: "#8333c5bb",
        corSecundaria: "#760bce53",
        corTerciariaEscura: "#170129bb",
        corTerciariaClara: "#adabab",
        corDeDestaque: "#5FE5FA",
        corDeDestaqueClaro: "#5FE5FA",
        linearGradient: "",
    }
}

export let corTema = "escuro";
export let temaAtual = corTema == "claro" ?  temas.claro : temas.escuro
