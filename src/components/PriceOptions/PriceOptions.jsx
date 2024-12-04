import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 19.99,
            "features": [
                "Access to gym equipment",
                "Locker facilities",
                "Open gym hours only"
            ]

        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 39.99,
            "features": [
                "Access to gym equipment",
                "Locker facilities",
                "Access to group fitness classes",
                "One guest pass per month",
                "Open gym and extended hours"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 59.99,
            "features": [
                "Access to gym equipment",
                "Locker facilities with towel service",
                "Unlimited group fitness classes",
                "5 guest passes per month",
                "Free personal training session (1 per month)",
                "24/7 gym access"
            ]
        },
        {
            "id": 4,
            "name": "Elite Plan",
            "price": 79.99,
            "features": [
                "All Premium Plan features",
                "Dedicated locker with private key",
                "Monthly fitness assessments",
                "Unlimited guest passes",
                "Priority booking for fitness classes",
                "Exclusive access to spa and sauna"
            ]
        }
    ]

    return (
        <div>
            <h2 className="text-4xl text-center font-bold mt-3">Best prices in the town</h2>
            <div className="grid md:grid-cols-3">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;