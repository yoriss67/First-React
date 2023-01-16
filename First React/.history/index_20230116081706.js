const root = document.getElementById('root')

ReactDOM.render(<h1>Hello, root!</h1>, root)

// Try to write that 1-liner of React code again! This time,
// see if you can figure out how to render an <ul> with 2+ <li>s inside*/
ReactDOM.render(<ul>
    <li>Thing 1</li>
    <li>Thing 2</li>
    </ul>, root
    )
