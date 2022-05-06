# Input

## Description

This is a reusable input component

## File

`/src/Shared/Components/Input.jsx`

## Usage

Input: Initial value of the input field is blank until
changed but will display the placeholder text. Add the
prop "secure" to set the value true to hide passwords

```jsx
<Input
  value={"email"}
  label={"Email"}
  setValue={onEmailChange}
  secure={false}
/>
```

## Props

- value: string
- setValue: function
- label: string
- secure: bool
