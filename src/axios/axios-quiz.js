import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-950fe-default-rtdb.firebaseio.com/'
})