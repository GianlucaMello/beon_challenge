describe("search test", () => {
    it("search test", () => {
        /*search anything
        verify the search if is displayed corrected
        get the 3rd result
        verify if the user is redirected to the correct page when he clicks on it
        */
        cy.visit('/')
        cy.get('[type="search"]').type("What day is today?{enter}")
        cy.wait(5000)
        cy.get('#rso').children()
    })
})