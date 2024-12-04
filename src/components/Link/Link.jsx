import { proptype } from 'postcss/lib/previous-map';
import PropTypes from 'prop-types';

const Link = ({ route }) => {
    return (
        <div>
            <li className="ml-5 hover:bg-blue-800 md:text-xl text-white">
                <a href={route.path}> {route.name}</a>
            </li>
        </div>
    );
};
Link.propTypes = {
    route: PropTypes.object
}
export default Link;