# NoClassName

Create component without classnames like styled-components. This package under development now.

# USAGE

```typescript
import styled from 'noclassname';
const MyButton = styled.button`
	background-color: blue;
	color: #fff;
	border: 1px solid blue;
`
const MyInput = styled.input`
	padding: 10px 20px;
`
const Container = styled.div`
	text-align: center;
`
// usage

function SomeComponent(){
	return (
	<Container>
		<MyInput />
		<MyButton onClick={() => alert('hello noclassname')))}>Click me</MyButton>
	</Container>
	)
}
```
