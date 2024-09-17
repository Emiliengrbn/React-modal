# React Modal Component

This package use react and vite

## Installation

`npm i grbn-react-modal`

## Usage

```react
import {Modal} from '../lib/main'
import { useState } from 'react'

function App() {
  const [active, setActive] = useState(false)

  const handleSubmit = () => {
    setActive(true)
  }

  const close = () => {
    setActive(false)
  }

  return (
    <>
        <button type="submit" onClick={handleSubmit}>Save</button>
        {active &&
          <Modal onClose={close} modalText="Employee created!"/>
        }
    </>
  )
}

export default App
```

## Custom

To style your modal you just have to going in your css file and use css class

### For the container

```css
.react-modal-container {
  ...;
}
```

### For the modal

```css
.react-modal-modal {
  ...;
}
```

### For the text

```css
.react-modal-text {
  ...;
}
```

### For the cross

```css
.react-modal-cross {
  ...;
}

.react-modal-cross::before,
.react-modal-cross::after {
  ...;
}
```
