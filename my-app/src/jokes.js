import React, {useState, useEffect}  from 'react';

const Jokes = props => {
    const [joke, setJoke] = useState(null);
    const [isJokeLame, setIsJokeLame] = useState(false);
    
    const fetchJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
            if (!response.ok){
                setJoke("Jokes on you.. Failed to get jokes using API...")
            }

            return response.json();
        })
        .then(data => {
            setJoke(data.value);
        });
    }

    useEffect(() => {
        fetchJoke();
        setIsJokeLame(false);
    }, [isJokeLame]);

    return <h1>{joke}</h1>
} 

export default Jokes;