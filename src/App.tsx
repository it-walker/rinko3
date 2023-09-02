import './App.css'
import { Button, ThemeProvider } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'

const theme = {
  name: 'custom-button-theme',
  tokens: {
    components: {
      button: {
        // this will affect the font weight of all Buttons
        fontWeight: { value: '{fontWeights.black.value}' },
        // this will only style Buttons which are the "primary" variation
        primary: {
          backgroundColor: { value: 'rebeccapurple' },
          _hover: {
            backgroundColor: { value: 'hotpink' },
          },
        },
      },
    },
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variation="primary"
      >
        Add to Cart
      </Button>
    </ThemeProvider>
  )
}

export default App;
