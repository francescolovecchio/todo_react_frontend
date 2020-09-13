import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const filterlink = (props) => {
    let {activeFilter, actionType, children, action} = props;
    if (activeFilter === actionType) {
        return children;
    }
    return (
        <Link to="#"
            onClick={
                (e) => {
                    e.preventDefault();
                    action(actionType);
                }
        }>
            {children}</Link>
    )

};

export default filterlink;

filterlink.propTypes = {
    props: PropTypes.shape(
        {activeFilter: PropTypes.string.isRequired, actionType: PropTypes.string.isRequired, children: PropTypes.element.isRequired, action: PropTypes.func.isRequired}
    )
}
