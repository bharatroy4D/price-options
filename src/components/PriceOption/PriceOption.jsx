import PropTypes from 'prop-types';
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
    const { id, name, features } = option;
    return (
        <div className='bg-stone-400 m-7 p-4 flex flex-col rounded-lg text-white'>
            <h2 className='text-center'>
                <span className='text-3xl'>{name}</span>
            </h2>
            <div className='mt-3 flex-grow '>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className='w-full mt-7 py-3 rounded-lg font-bold bg-blue-500 hover:bg-blue-800'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;