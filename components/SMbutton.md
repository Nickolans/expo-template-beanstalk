# SMbutton

## Description

A small button component that will adapt style to inversion indicator and display given text. This button will also execute given method.

## File

`/src/Shared/Components/SMbutton/SMbutton.jsx`

## Usage

SMbutton example:

```jsx

// Default button
<SMbutton
text={"press me"}
onPress={() => console.log("Pressed!")}
/>

// Inverted button
<SMbutton
text={"press me"}
onPress={() => console.log("Pressed!")}
inverted={true}
/>
```

## Props

- text: String
- onPress: function
- inverted: Boolean
