import axios from 'axios'

 let api = axios.create({
    baseURL : 'http://localhost:3000'
})

//get 

export const getData = ()=>{
    return api.get('/contacts')
}

//post 

export const postData = (data)=>{
    return api.post('/contacts',data)
}

//delete 

export const deleteData = (id)=>{
    return api.delete(`/contacts/${id}`)
}

//edit

export const editData = (id,newData)=>{
    return api.patch(`/contacts/${id}`,newData)
}