import axios from "axios";

export const getNewTask = (setTask) => {
  return axios(`https://dummyjson.com/todos/random`,
    {
      contentType: 'application/json'
    })
    .then(result => {
      setTask(result.data)
    }).catch((error) => {
      console.log(error)
    })
}