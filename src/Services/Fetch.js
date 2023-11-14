const backendurl = "http://localhost:3001";
//const backendurl = ""; //Atras del proxy

export async function POST(url, data){
    return await fetch(backendurl + url, {
    method: 'POST',
    mode: 'cors',
    headers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
};

export async function GET(url, data){
    const objString = '?' + new URLSearchParams(data).toString();

    return await fetch(backendurl + url + objString)
    .then((res) => res.json())
    .then((res) => res);
};

export async function PATCH(url, data){
    return await fetch(backendurl + url, {
        method:'PATCH',
        mode: 'cors',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
}

export async function DELETE(url, data){
    const objString = '?' + new URLSearchParams(data).toString();

    return await fetch(backendurl + url + objString, {
        method:'DELETE',
        mode:'cors'
    })
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => console.log(err));
}
