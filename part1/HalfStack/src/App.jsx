const Header = (props) => {
    return ( <>
          <h1>{props.course}</h1>
    </>)
}

const Contents = (props) => {
    return ( <>
      <p>
        {props.part.name} {props.part.exercises}
      </p>    </>)
}

const Total = (props) => {
  var sum = 0
  for (let exercice of props.ExercicesCounts) {
    sum += exercice 
  }
  return (
    <>
      <p>Number of exercises {sum}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  return (
    <div>
      <Header course={course}/>
      <Contents part={parts[0]}/>
      <Contents part={parts[1]}/>
      <Contents part={parts[2]}/>
      <Total ExercicesCounts={[parts[0].exercises,parts[1].exercises,parts[2].exercises]}/>
      </div>
  )
}

export default App