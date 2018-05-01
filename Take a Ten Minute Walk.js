const yes = ['n','s','n','s','n','s','n','s','n','s']
const no = ['n','n','n','s','n','s','n','s','n','s']

function isValidWalk(walk) {
    let vertical = 0
    let horizontal = 0
    for (i=0; i<walk.length; i++) {
        walk[i] == 'n' ? vertical++ :
        walk[i] == 's' ? vertical-- :
        walk[i] == 'w' ? horizontal++ :
        horizontal--
    }
    if (walk.length === 10 && vertical === 0 && horizontal === 0) {
        return true
    } else return false
  }

console.log(isValidWalk(no))