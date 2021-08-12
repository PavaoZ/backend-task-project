exports.combine = (data1, data2) => {
    for(let i = 0; i < data1.length; ++i)
        data1[i].phoneNumber = JSON.stringify(data2[i].phoneNumbers)
        
    return data1
}
