const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Test para ExplorerController", () =>{
    test("Requerimiento 1: Calcular todos los explorers en una missión determinada", ()=>{
        const explorersInNode = ExplorerController.getExplorersByMission("node");
        const explorer1= {"githubUsername": "ajolonauta1", "mission": "node", "name": "Woopa1", "score": 1, "stacks": ["javascript", "reasonML", "elm"]}
        expect(explorersInNode[0]).toEqual(explorer1);
        
    }),
    test("Requerimiento 2: Obtener el total de explorers en una missión determinada", ()=>{
        const amountOfExplorersInNode = ExplorerController.getExplorersAmonutByMission("node");
        expect(amountOfExplorersInNode).toBe(10);
    }),
    test("Requerimiento 3: Obtener los usernames de los explorers en una missión determinada", ()=>{
        const explorersUsernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersUsernames).toContain("ajolonauta1");
    }),
    test("Requerimiento 4: Obtener el score de validación a partir de un número", ()=>{
        const score = ExplorerController.applyValidationInNumber(3);
        expect(score).toBe("FIZZ");
    })
});