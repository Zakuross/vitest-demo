import {describe, expect, test, vi} from 'vitest'
import {addElem, modifyElem, suppElem, doneElem, indexElem} from './toto'


test("Ajout Test 1", () => {
    const lab = 'Task 1'
    const tab = []
    const oneTask = {label: lab, completed: false}
    addElem(tab, oneTask)

    expect(tab).toHaveLength(1)
    expect(tab).toContainEqual(oneTask)

})

test("Ajout Test s/o label", () => {
    const lab = 'Task 1.5'
    const tab = []
    const oneTask = {label: undefined, completed: false}
    expect(() => addElem(tab, oneTask)).toThrowError()


})

test("Mod Test", () => {
    const lab = 'Task 2'
    const tab = [{label: lab, completed: false}]
    // const oneTask =

    let newTask = "New Task"
    let indexo = 0

    modifyElem(tab, indexo, newTask)
    expect(tab[indexo].label).toBe(newTask)
})

test("Mod Test Error", () => {
    const lab = 'Task 2.5'
    const tab = [{label: lab, completed: false}]
    // const oneTask =

    let indexo = 5
    expect(() => modifyElem(tab, indexo)).toThrowError()
})

test("Suppression Test", () => {
    const lab = 'Task 3'
    const tab = [{label: lab, completed: false}, {
        label: lab, completed: false
    }]
    // const oneTask =

    let indexo = 0
    suppElem(tab, indexo)

    expect(tab).toHaveLength(1)

})

test("Suppression Test Error", () => {
    const lab = 'Task 3.5'
    const tab = [{label: lab, completed: false}, {
        label: lab, completed: false
    }]
    // const oneTask =

    let indexo = 5

    expect(() => suppElem(tab, indexo)).toThrowError()

})

// test("Test permettant de valider la suppression d'un élément", () => {
//     const lab = 'Task 3.5.5'
//     const tab = [{label: undefined, completed: true}, {
//         label: lab, completed: false
//     }]
//     // const oneTask =
//
//     let indexo = 0
//     const result = suppElem(tab, indexo)
//
//     expect(result).toHaveLength(1)
//     expect(() => result.rejects.toThrowError('FAUX'))
//
// })

test("Done Test", () => {
    const lab = 'Task 4'
    const tab = [{label: lab, completed: false}]
    let newStat = true
    let indexo = 0

    doneElem(tab, indexo, newStat)
    expect(tab[indexo].completed).toBe(newStat)


})

test("Done Test Error", () => {
    const lab = 'Task 4.5'
    const tab = []
    const oneTask = {label: lab, completed: false}
    let newStat = true
    let indexo = 4


    expect(() => doneElem(tab, newStat, indexo)).toThrowError()


})

// test("Done Test Reverse", () => {
//     const lab = 'Task 4.5.5'
//     const tab = []
//     const oneTask = {label: lab, completed: true}
//     let newStat = false
//     doneElem(tab, newStat)
//
//
//     expect(tab).toHaveProperty('completed', newStat)
//
//
// })

test("Index Test", () => {
    const lab = 'Task 5'
    const oneTask = {label: lab, completed: true}
    const tab = [oneTask]
    let indexo = 0
    const result = indexElem(tab, indexo)


    expect(result).toEqual(indexo)

})

test("Index Test Error", () => {
    const lab = 'Task 5.5'
    const tab = []
    const oneTask = {label: lab, completed: true}
    let indexo = 4


    expect(() => indexElem(tab, indexo)).toThrowError()

})

