import fs from 'fs-extra'
import getTheme from './theme'

console.log('starting')

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/menhera-light.json',
      getTheme({
        color: 'light',
        name: 'menhera light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/menhera-dark.json',
      getTheme({
        color: 'dark',
        name: 'menhera dark',
      }),
      { spaces: 2 },
    ),
  ]))

console.log('finished')
