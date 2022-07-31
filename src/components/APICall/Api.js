import React, { useState, useEffect }  from 'react';
const id = Math.floor(Math.random() * (27 - 1 + 1)) + 1;

const ApiComponent = () => {
const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [emojis, setEmojis] = useState([]);

    useEffect(() => {
        fetch(`https://14r92n.deta.dev/get-by-id/${id}`)
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setEmojis(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      })
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } 
    
    
    if (emojis){
        return (

<h1 key = {emojis.code}>{emojis.emoji} {emojis.name}</h1>


            
        );
    }
}
export default ApiComponent;