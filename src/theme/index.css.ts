import { createGlobalTheme, globalStyle } from "@vanilla-extract/css"
import { createSprinkles } from "@vanilla-extract/sprinkles"
import palette from "./palette.css"

const sprinkles = createSprinkles(
  palette,
)

const colorThemed = sprinkles({
  backgroundColor: 'black',
  color: 'white',
})

const vars = createGlobalTheme(':root', {
  color: {
    
  }
})

globalStyle('html, body', {
  backgroundColor: 'black',
  color: 'white',
  margin: 0,
  
})

export type Sprinkles = Parameters<typeof sprinkles>[0]

export {
  vars,
  sprinkles,
  colorThemed,
}