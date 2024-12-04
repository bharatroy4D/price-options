import { useEffect, useState } from "react";

const Phones = () => {
    const [phones, setPhones] = useState([])
    console.log(phones)
    useEffect( () =>{
        fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(res => res.json())
        .then(data => setPhones(data))
    },[])
    return (
        <div>
            <h3 className="text-5xl">
                Phones :{phones.length}
            </h3>
        </div>
    );
};

export default Phones;