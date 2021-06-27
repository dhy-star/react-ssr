
import Person from './components/Person'
import ReactIndex from './components/reactIndex'
const routers = [

    {
        path:'/person',
        component:Person
    },
    {
        path:'/',
        component:ReactIndex
    },
]
export default routers