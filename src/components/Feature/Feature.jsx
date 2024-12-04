import { FaRegCheckCircle } from "react-icons/fa";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center  gap-2">
                <FaRegCheckCircle></FaRegCheckCircle>{feature}</p>
        </div>
    );
};

export default Feature;