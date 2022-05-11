const StudentService = require("../../lib/services/ExplorerService");
const explorers = [
    {
        "name": "Woopa15",
        "githubUsername": "ajolonauta15",
        "score": 15,
        "mission": "node",
    }
];
describe("Test para StudentService", () =>{
    test("Requerimiento 1: Calcular todos los visual partners", ()=>{
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    }),
    test("Requerimiento 2: Obtener el total de visual partners que tengan una certificación", ()=>{
        const amountOfExplorersInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(amountOfExplorersInNode).toBe(1);
    }),
    test("Requerimiento 3: Obtener los visual partners que tengan credits >500 ", ()=>{
        const explorersUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersUsernames[0]).toBe("ajolonauta15");
    });
});