
export const getFetch = async (endPoint) => {
    try {
        const BaseURL = `https://reqres.in/api/${endPoint}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                //'X-RapidAPI-Key': 'your-api-key',
                //'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
            },
        };
        const response = await fetch(BaseURL, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        return err;
    }
}

export const postFetch = async (endPoint,req) => {
    try {
        const BaseURL = `https://reqres.in/api/${endPoint}`;
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                //'X-RapidAPI-Key': 'your-api-key',
                //'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
            },
            body : JSON.stringify(req)
        };
        const response = await fetch(BaseURL, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        return err;
    }
}

export const DeleteFetch = async (endPoint) => {
    try {
        const BaseURL = `https://reqres.in/api/${endPoint}`;
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                //'X-RapidAPI-Key': 'your-api-key',
                //'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
            },
        };
        const response = await fetch(BaseURL, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        return err;
    }
}