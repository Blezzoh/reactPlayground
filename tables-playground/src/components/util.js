const sortBy = (type, field, descOrAsc) =>{
    switch(type){
        case 'date':
            if(descOrAsc === 'asc'){
                return (a, b) => new Date(a[field]) - new Date(b[field])
            }
            else{
                return (a,b) => new Date(b[field]) - new Date(a[field])
            }
        case 'string':
            if(descOrAsc === 'asc'){
                return (a, b) => (a[field] < b[field]) ? -1 : 1
            }
            else{
                return (a,b) => (a[field] < b[field]) ? 1 : -1
            }
        case 'number': // deals with number and string number
            if(descOrAsc === 'asc'){
                return (a, b) => Number(a[field]) - Number( b[field])
            }
            else{
                return (a,b) => Number(b[field]) - Number( a[field])
            }
        default:
            if(descOrAsc === 'asc'){
                return (a, b) => a[field] - b[field]
            }
            if(descOrAsc === 'desc'){
                return (a,b) => b[field] - a[field]
            }
            // default is ascending
            return (a, b) => a[field] - b[field]
    }
}
const sortSubgroup = (data, start, length, type, field, descOrAsc) => {
    const end = start + length
    const newData = data.slice(start, end)
    const typeOfRowData = type? type : 'somethingElse'
    return newData.sort(sortBy(typeOfRowData,field, descOrAsc)) 
}
const sortGroup = (data, groupLengths, independentHeaders, type, field, descOrAsc) =>{
    let start = 0
    let sorted = []
    if(!independentHeaders || !independentHeaders.length){
        return sortSubgroup(data, 0, data.length, type, field, descOrAsc)
    }
    else{
        for (let i = 0; i < independentHeaders.length; i++) {
            if( i === independentHeaders.length -1){
                sorted = [...sorted, ...sortSubgroup(data,start, data.length - start, type, field, descOrAsc)]
            }
            else{
                console.log('else', sortSubgroup(data, start, groupLengths[i], type, field, descOrAsc))
                sorted =[...sorted, ...sortSubgroup(data,start, groupLengths[i], type, field, descOrAsc)]
            }
            start += groupLengths[i]
        }
    }
    return sorted
}

export const sortFn = (data, type, field, descOrAsc) =>{
    return data.map(
        (d) => ({
            ...d,
            data: sortGroup(d.data, d.groupLength, d.independentSubheaders, type, field, descOrAsc)
        })
    )
}
