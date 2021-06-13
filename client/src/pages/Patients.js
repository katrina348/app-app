import React from 'react'
import ErrorMessage from '../components/ErrorMessage'
import List from '../components/List'
import Spinner from '../components/Spinner'
import useAxiosOnMount from '../customHooks/useAxiosOnMount'


const Patients = ()=>{
    // about the useState hook
    const {data,loading,error} = useAxiosOnMount('/api/patients')
    // const {data,loading,error} = useAxiosOnMount('https://rasdfeqres.in/api/users?delay=3')

    if(loading) return <Spinner />
    if(error) return <ErrorMessage error={error}/>
    return (
        <div>
            <List 
            renderData={(patient)=>{
              return (
              <div>
                <h1>{patient.name}</h1>
              </div>
              )
            }}
            data={data} 
            name='Patients'/>
        </div>
    )
}

export default Patients