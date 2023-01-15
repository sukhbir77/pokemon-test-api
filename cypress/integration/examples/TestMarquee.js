/// <reference types="Cypress" />
describe('Marquee Click Test', () => {
    //Test For Selecting Different Pokemon.
    it('Testing Select', () => {
        cy.visit("https://monstercat-test.netlify.app/");
        cy.wait(2000);
        cy.get(":nth-child(6) > img").click();
        cy.get(".heading > p").should('have.text', "You've chosen Charizard!");
      })
  })
