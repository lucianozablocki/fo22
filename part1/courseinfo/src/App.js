const PART_1 = 'part1' 
const PART_2 = 'part2' 
const PART_3 = 'part3'

const infoIdxs = new Map();
infoIdxs.set(PART_1, 0)
infoIdxs.set(PART_2, 1)
infoIdxs.set(PART_3, 2)

const Header = props =>
  <div>
    <h1>{props.title}</h1>
  </div>

const Part = props => {
  return <div>
    <p>
      {props.name} {props.exercises}
    </p>
  </div>

}

const Content = props => {
  return <div>
    <Part name={props.info[infoIdxs.get(PART_1)].name} exercises={props.info[infoIdxs.get(PART_1)].exercises}/>
    <Part name={props.info[infoIdxs.get(PART_2)].name} exercises={props.info[infoIdxs.get(PART_2)].exercises}/>
    <Part name={props.info[infoIdxs.get(PART_3)].name} exercises={props.info[infoIdxs.get(PART_3)].exercises}/>
  </div>
}
const Total = props =>
  <div>
    <p>Number of exercises {props.info[infoIdxs.get(PART_1)].exercises + props.info[infoIdxs.get(PART_2)].exercises + props.info[infoIdxs.get(PART_3)].exercises}</p>
  </div>

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
  <>
    <Header title={course.name} />
    <Content info={course.parts}/>
    <Total info={course.parts} />
  </> 
  )
}

export default App;
