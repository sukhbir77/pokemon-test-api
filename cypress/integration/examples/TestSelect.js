/// <reference types="Cypress" />
describe('Test Case For Select', () => {
    //Test For Selecting Different Pokemon.
    it('Testing Select', () => {
        cy.visit("http://localhost:3000/")
        cy.get("select").select("Ivysaur");
        cy.get(".heading > p").should('have.text', "You've chosen Ivysaur!");
      })
  })