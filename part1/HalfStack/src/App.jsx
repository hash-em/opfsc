const Header = (props) => {
    return ( <>
          <h1>{props.course}</h1>
    </>)
}

const Content = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}
const Contents = (props) => {
    return ( <>
    <Content part={props.parts[0]}/>
    <Content part={props.parts[1]}/>
    <Content part={props.parts[2]}/>
    </>
    )
}

const Total = (props) => {
  var sum = 0
  for (let part of props.parts) {
    sum += part.exercises 
  }
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name}/>
      <Contents parts={course.parts}/>
      <Total parts={course.parts}/>
      </div>
  )
}

export default App