/// <reference types="Cypress" />
describe('Testing Offer With Value', () => {
      //Testing Send Offer With Value
      it("Send Offer With Value", () => {
        cy.visit("https://monstercat-test.netlify.app/");
        cy.get(".offer-button").click();
        cy.get("input").type(344);
        cy.get(".offer-button").click();   
      })

  })