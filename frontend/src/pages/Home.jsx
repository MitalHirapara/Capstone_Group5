import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/user/Navbar';
import MainSection from '../components/user/MainSection';
import Footer from '../components/user/Footer';

export default function Home() {

    const [data, setData] = useState(null);
    const [number, setNumber] = useState(1);

    const handleSubmit = () => {
        fetch(`http://127.0.0.1:8000/api/user-number/${number}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    // useEffect(() => {
    //     // Example with fetch API
    //     fetch(`http://127.0.0.1:8000/api/user-number/3`)
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    //         .catch(error => console.error('Error fetching data:', error));

    //     // Example with axios (if using axios)
    //     //     axios.get('http://127.0.0.1:8000/api/hello/')
    //     //       .then(response => setData(response.data))
    //     //       .catch(error => console.error('Error fetching data:', error));
    // }, []);


    return (
        <>

        <MainSection/>
           
        </>

    )
}
