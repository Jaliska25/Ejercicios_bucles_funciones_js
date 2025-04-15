/*Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no. Considera el caso de múltiples mutantes con el mismo poder.*/
const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' },
  { name: 'Psylocke', power: 'telepathy' },
  { name: 'Emma Frost', power: 'telepathy' }
]

function findMutantByPower(mutants, power) {
  const powerFound = mutants.filter((mutant) => mutant.power === power)

  if (powerFound.length > 0) {
    return `Se encontraron ${
      powerFound.length
    } mutantes con el poder ${power}: ${powerFound
      .map((mutant) => mutant.name)
      .join(', ')}`
  } else {
    return `No se encontraron mutantes con el poder ${power}`
  }
}
console.log(findMutantByPower(mutants, 'pyrokinesis'))
console.log(findMutantByPower(mutants, 'steel skin'))
console.log(findMutantByPower(mutants, 'telepathy'))
