import PropTypes from 'prop-types';
import React from 'react';
import { HeaderWrapper } from './style';

const SectionHeader = ({ title, subtitle }) => {
    return <HeaderWrapper>
        <div className="title">{title}</div>
        {
            subtitle && <div className="subtitle">{subtitle}</div>
        }
    </HeaderWrapper>;
};

SectionHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
};

export default SectionHeader;