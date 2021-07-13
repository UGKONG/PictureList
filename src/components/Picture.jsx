/* eslint-disable import/no-anonymous-default-export */
import React, { createElement } from 'react';
import Styled from 'styled-components';

export default ({data}) => {

    const imgClick = (id, url) => {
        let a = document.createElement('a');
            a.setAttribute('target', '_blank');
            a.setAttribute('download', id);
            a.setAttribute('href', url);
            a.click();
            a.remove();
    }

    return (
        <Picture>
            <img
                src = {data.webformatURL} 
                alt = {data.tags}
                onClick = {() => imgClick(data.id, data.largeImageURL)}
            />
        </Picture>
    )
}

const Picture = Styled.article`
    display: inline-block;
    border: 1px solid #00000020;
    margin: 0;
    margin-bottom: 10px;
    padding: 6px;
    box-shadow: 2px 2px 5px #00000040;

    &:hover {
        background-color: #fd8726;
    }
    img {
        width: 100%;
        display: block;
        cursor: pointer;
        background-color: #fff;
    }
`;