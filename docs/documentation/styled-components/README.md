---
title: "Styled-components" 
---

# Styled components


## Get started

First we need to go into our project root folder and install our npm package

```
npm install --save styled-components
```

Then we need to import the package in our frontend

```js
import styled from "styled-components"
```

<!-- Other features we also can import from the package is

```
// Can be used to create a single css variable which we can re-use trough out the project
import { css } from "styled-components"


``` -->

## Create a component

```js
import styled from "styled-components"

const Button = styled.button`
    background: blue;
    padding: 1rem 2rem;
    ...
`
```

Something that is also important to know is that you can inherit styling from a component of the same kind. This means that we do not have to repeat styling for similar components.

```js
import styled from "styled-components"

const StyledButton = styled.button`
    background: blue;
    padding: 1rem 2rem;
    border-radius: 3px;
    border: none;
    color: white;
    ...
`

const RedButton = styled(Button)`
    background: red;
`
```
::: danger
- Always remember semicolon after each row (otherwise the styling usually crashes your application)
:::

::: tip
-  [Download VS code extension to get css highlighting](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components) 
::: 

### Pass props 

```js
import styled from "styled-components"

const Button = styled.button`
    background: ${props => props.background};
    padding: 1rem 2rem;
    border-radius: 3px;
    border: none;
    color: white;
    ...
`

render(
    <Button background="red">Demo button</Button>
)
```

:::tip
- Remember that you can deconstruct props to the individual value so you do not have to use "props" everywhere.
::: 


## Helpers 

### ThemeProvider

A helper component for theming. Injects the theme into all styled components anywhere beneath it in the component tree, via the context API.

```js
import styled, { ThemeProvider } from 'styled-components'

const Box = styled.div`
  color: ${props => props.theme.color};
`

render(
  <ThemeProvider theme={{ color: 'mediumseagreen' }}>
    <Box>I'm mediumseagreen!</Box>
  </ThemeProvider>
)
```

### CreateGlobalStyle

A helper function to generate a special StyledComponent that handles global styles. Normally, styled components are automatically scoped to a local CSS class and therefore isolated from other components. In the case of createGlobalStyle, this limitation is removed and things like CSS resets or base stylesheets can be applied.

```js
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.color};
    overflow-x: hidden;
  }
  
`;

// Wrapping your app 
const theme = {
    color: "white"
}

<ThemeProvider theme={theme}>
    <GlobalStyle />
    <Navigation /> 
</ThemeProvider>
```

### Css

Can be used to create a single css variable which we can re-use trough out the project

```js
import {css} from "styled-components"

const ButtonStyle = css`
    background: blue;
    padding: 1rem 2rem;
    ...
`

const Button = styled.button`
    ${ButtonStyle};
`

render (
    <Button>Demo button</Button>
)

```


