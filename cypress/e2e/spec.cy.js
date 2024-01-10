describe("Valid Search Test", () => {
  it("performs a valid search and verifies search results", () => {
    const searchQuery = "Cypress UI testing";

    cy.visit("https://www.google.com");
    cy.get("#APjFqb").click().type(searchQuery).type("{enter}");

    // Add assertions to validate search results page
    cy.url().should("include", "search");
    cy.get("#search").should("exist"); // Assuming search results container has the id 'search'
  });
});

describe("Search Result Navigation Test", () => {
  it("clicks on a search result and verifies redirection", () => {
    const searchQuery = "Cypress UI testing";

    cy.visit("https://www.google.com");
    cy.get("#APjFqb").click().type(searchQuery).type("{enter}");

    // Click on the first search result link
    cy.get("#search a").first().click();

    // Add assertions to validate the redirected page
    cy.url().should("not.include", "search"); // Assuming the redirected URL is different
  });
});
