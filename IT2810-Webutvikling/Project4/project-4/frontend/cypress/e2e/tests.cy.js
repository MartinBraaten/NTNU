beforeEach(() => {
  cy.visit('http://it2810-19.idi.ntnu.no/project4_ms/frontend/#/')
})

describe('Open champion page', () => {
  it('Click on champion and open page', () => {
    cy.contains('Aatrox').click()
    cy.url().should('include', '/Aatrox')
    cy.contains('the Darkin Blade')
  })
})

describe('Check content on champion page', () => {
  it('Check that champion page contains correct information', () => {
    cy.contains('Braum').click()
    cy.contains("the Heart of the Freljord")
    cy.contains('Tag:Support, Tank')
    cy.contains("Blessed with massive biceps and an even bigger heart, Braum is a beloved hero of the Freljord.")
    cy.contains('Work with your allies to stack Concussive Blows, encourage them to basic attack marked targets.')
    cy.contains("Braum must land Winter's Bite or a basic attack")
  })
  it('Check that abilities work', () => {
    cy.contains('Braum').click()
    cy.contains('Concussive Blows')

    cy.get('#qTab').click()
    cy.contains("Winter's Bite")

    cy.get('#wTab').click()
    cy.contains('Stand Behind Me')

    cy.get('#eTab').click()
    cy.contains('Unbreakable')

    cy.get('#rTab').click()
    cy.contains('Glacial Fissure')

    cy.get('#passiveTab').click()
    cy.contains('Concussive Blows')
  })
})

describe('Navigate to homepage', () => {
  it('Test that navigating back to homepage works', () => {
    cy.contains('Annie').click()
    cy.contains('the Dark Child')
    cy.get('#backArrow').click()
    cy.url().should('include', '/#/')
    cy.contains('Aatrox')
    cy.contains('Akshan')
    cy.contains('the Dark Child').should('not.exist')
    cy.get('#outlined-basic')
  })
})

describe('Search for champions', () => {
  it('Test that name filter shows the correct champions', () => {
    cy.get('#outlined-basic')
      .type('Ja')
      .should('have.value', 'Ja')

    cy.contains('Janna')
    cy.contains('Jax')
    cy.contains('Jarvan IV')
    cy.contains('Jayce')

    cy.contains('Zac').should('not.exist')
    cy.contains('Jinx').should('not.exist')
    cy.contains('Jhin').should('not.exist')
  })
})

describe('Use tags filter', () => {
  it('Test that writing in field works', () => {
    cy.get('#tagSelect')
      .type('Support')
      .should('have.value', 'Support')
  })
  it('Test that autocomplete works', () => {
    cy.get('#tagSelect').click()
    cy.contains('Marksman')
    cy.contains('Support')
    cy.contains('Assassin')
    cy.contains('Mage')
    cy.contains('Fighter')
    cy.contains('Tank')
  })
  it('Test that tag filter works for "Support"', () => {
    cy.get('#tagSelect').click()
    cy.contains('Support').click({force: true})

    cy.contains('Alistar')
    cy.contains('Janna')
    cy.contains('Senna')
    cy.contains('Rell')

    cy.contains('Caitlyn').should('not.exist')
    cy.contains('Yorick').should('not.exist')
  })
  it('Test that tag filter works for "Assassin"', () => {
    cy.get('#tagSelect').click()
    cy.contains('Assassin').click({force: true})

    cy.contains('Katarina')
    cy.contains('Akali')
    cy.contains('Pyke')

    cy.contains('Seraphine').should('not.exist')
    cy.contains('Janna').should('not.exist')
    cy.contains('Zac').should('not.exist')
  })
})

describe('Use resource filter', () => {
  it('Test that writing in field works', () => {
    cy.get('#resourceField')
      .type('Mana')
      .should('have.value', 'Mana')
  })
  it('Test that autocomplete works', () => {
    cy.get('#resourceField').click()
    cy.contains('Blood Well')
    cy.contains('Mana')
    cy.contains('Fury')
    cy.contains('Shield')
    cy.contains('Flow')
    cy.contains('None')
  })
  it('Test that filter works for "Mana', () => {
    cy.get('#resourceField').click()
    cy.contains('Mana').click({force: true})

    cy.contains('Elise')
    cy.contains('Corki')
    cy.contains('Camille')

    cy.contains('Katarina').should('not.exist')
    cy.contains('Zac').should('not.exist')
    cy.contains('Kled').should('not.exist')
    cy.contains('Tryndamere').should('not.exist')
  })
  it('Test that filter works for "Health Cost"', () => {
    cy.get('#resourceField').click()
    cy.contains('Health Cost').click({force: true})

    cy.contains('Zac')
    cy.contains('Dr. Mundo')

    cy.contains('Katarina').should('not.exist')
    cy.contains('Janna').should('not.exist')
    cy.contains('Kled').should('not.exist')
    cy.contains('Tryndamere').should('not.exist')
  })
})

describe('Use sorting', () => {
  it('Test text field', () => {
    cy.get('#championsSort').click()
      .type('Attack')
      .should('have.value', 'Attack')
  })
  it('Test autocomplete', () => {
    cy.get('#championsSort').click()
    cy.contains('Alphabetical')
    cy.contains('Attack range')
  })
  it('Test sorting by attack range', () => {
    cy.get('#championsSort').click()
    cy.contains('Attack range').click({force: true})

    cy.get('#championsContainer').children().first().should('contain', 'Camille')
    cy.get('#championsContainer').children().first().should('not.contain', 'Aatrox')
  })
  it('Test alphabetical sorting', () => {
    cy.get('#championsSort').click()
    cy.contains('Alphabetical').click({force: true})
    
    cy.get('#championsContainer').children().first().should('not.contain', 'Akali')
    cy.get('#championsContainer').children().first().should('contain', 'Aatrox')

    // Since alphabetical is default, check that it still works afte change of filter
    cy.get('#championsSort').click()
    cy.contains('Attack range').click({force: true})
    cy.get('#championsSort').click()
    cy.contains('Alphabetical').click({force: true})
    cy.get('#championsContainer').children().first().should('not.contain', 'Akali')
    cy.get('#championsContainer').children().first().should('contain', 'Aatrox')
  })
})

describe('Test page buttons', () => {
  it('Tests that only certain champions are on first page', () => {
    cy.contains('Aatrox')
    cy.contains('Diana')
    cy.contains('Bard')

    cy.contains('Zyra').should('not.exist')
    cy.contains('Dr. Mundo').should('not.exist')
  })
  it('Tests that "Next" button works', () => {
    cy.get("#nextButton").click()
    cy.contains('Dr. Mundo')
    cy.contains('Jax')

    cy.contains('Aatrox').should('not.exist')
    cy.contains('Diana').should('not.exist')
  })
  it('Tests that "Prev" button works', () => {
    cy.get('#nextButton').click()
    cy.contains('Draven')
    cy.contains('Aatrox').should('not.exist')

    cy.get("#prevButton").click()
    cy.contains('Aatrox')
    cy.contains('Diana')

    cy.contains('Janna').should('not.exist')
    cy.contains('Zoe').should('not.exist')
  })
  it('Tests that "Prev" button is disabled on page 1', () => {
    cy.contains('Page 1')
    cy.get('#prevButton').should('be.disabled')

    cy.get('#nextButton').click()
    cy.get('#prevButton').should('not.be.disabled')
  })
})