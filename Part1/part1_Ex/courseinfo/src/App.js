const App = () => {
  
  const course = {
    name : 'Half Stack application development',
    parts : [ 
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
  

const Header = (props)=>{
  
  return (
    <h1>{props.course.name}</h1>
    
  )
  
}
const Content = (props)=>{
  return (
    <>
      <Part part = {props.course.parts[0].name} excercises= {props.course.parts[0].exercises}/>
      <Part part = {props.course.parts[1].name} excercises= {props.course.parts[1].exercises}/>
      <Part part = {props.course.parts[2].name} excercises= {props.course.parts[2].exercises}/>
    </>
  )
}
const Total = (props)=> (<p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>)

  return (
    <>
      <Header course = {course}/>
      <Content course={course}/>
      <Total course={course}/>
    </>
  )
}

//sub components. Part=>Content

const Part = (props)=>{
  return(
    <p>{props.part} {props.excercises}</p>
  )
}

export default App