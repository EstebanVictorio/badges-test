import { defineProperties } from "@vanilla-extract/sprinkles"


const colors = {
  black: '#1a1a1a',
  white: '#f5f5f5',
}

const palette = defineProperties({
  properties: {
    color: colors,
    backgroundColor: colors,
  },
})

export default palette