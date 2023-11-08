export function addElem (tab, oneTask) {
    if (oneTask.label.trim() === ''){
        throw new Error("Impossible d'add une tache vide")
    }
    if (oneTask.completed){
        throw new Error("Impossible d'add une tache terminé")
    }
    tab.push(oneTask)
    return tab;

}

export function modifyElem (tab, indexo, newLab) {
    indexElem(tab, indexo)
    tab[indexo].label = newLab
}

export function suppElem (tab, indexo) {
    indexElem(tab, indexo)
    tab.splice (indexo, 1)
    return tab;
}

export function doneElem (tab, indexo, newStat) {
    indexElem(tab, indexo)
    tab[indexo].completed = newStat
    return tab;
}

export function indexElem (tab, indexo) {
    if (indexo < 0 || indexo > tab.length){
        throw new Error("L'index sélectionné est introuvable ou n'existe pas")
    }

    return indexo;
}

