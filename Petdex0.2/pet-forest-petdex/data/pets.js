export const pets = [
  {
    id: 'mischief-maiden',
    name: 'Mischief Maiden',
    image: '/mischief-maiden.png',
    type: 'Nature Magic',
    race: 'No',
    maxLevel: 100,
    rarity: 'Perfect',
    intimacy: 5,
    attributes: [
      { name: 'STR', label: 'Strength', value: 386, growth: 228 },
      { name: 'CON', label: 'Constitution', value: 1017, growth: 608 },
      { name: 'AGI', label: 'Agility', value: 958, growth: 562 },
      { name: 'INT', label: 'Intelligence', value: 958, growth: 562 },
      { name: 'SPI', label: 'Spirit', value: 797, growth: 471 },
      { name: 'DEX', label: 'Dexterity', value: 484, growth: 289 }
    ],
    combat: [
      { name: 'HP', value: '41,856 / 41,856' },
      { name: 'MP', value: '11,817 / 11,817' },
      { name: 'Attack', value: '628' },
      { name: 'Defense', value: '1,220' },
      { name: 'Magic', value: '3,352' },
      { name: 'Magic Defense', value: '1,355' },
      { name: 'Physical', value: '435' },
      { name: 'Spell', value: '1,356' },
      { name: 'Avoidance', value: '387' },
      { name: 'Target Hit', value: '387' },
      { name: 'Battle Effectiveness', value: '2,677,551' }
    ],
    skills: [
      { name: "Maiden's Mercy", level: 6, innate: true, icon: "/maidens-mercy-icon.png", description: "Description not provided yet." },
      { name: "Maiden's Absolution", level: 4, innate: true, icon: "/maidens-absolution-icon.png", description: "Description not provided yet." },
      { name: "Guardian's Power", level: 4, innate: false }
    ],
    notes: 'Initial sample entry transcribed from the supplied Pet Info screenshots. Verify values against the game before treating this record as final.'
  }
];
