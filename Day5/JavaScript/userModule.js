export let user_data = []
export const addUser = (new_user)=>{
    user_data.push(new_user)
}

export const editUser = (id,key,new_data) => {
    user_data.forEach((i)=>{
        if(i.id==id){
            i[key]=new_data
        }
    })
}

export const deleteUser = (id)=>{
    /*for(i in user_data){
        if(user_data[i].id==id){
            user_data.splice(i,1);
        }
    }*/
    const index = user_data.findIndex((i)=>i.id===id)
    if(index!=-1){
        user_data.splice(index,1)
    }

}

 export const editMultipleParam = (id,updateValue) => {
    /*user_data.forEach((i) => {
        if(id==i.id){
            for(j in updateValue){
                i[j]=updateValue[j]
            }
        }
    })*/
    const index = user_data.findIndex((i)=> i.id===id)
    if(index!=-1){
        user_data[index]={
            ...user_data[index],
            ...updateValue
        }
    }
}