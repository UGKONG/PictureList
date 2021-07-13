/* eslint-disable import/no-anonymous-default-export */
import Styled from 'styled-components';
import Picture from './Picture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default ({list, searchValue, loadding, setLoadding}) => {
    return (
        <PictureList>
            {list.map((data, idx) => {
                if(data.tags.search(searchValue.replaceAll(' ', '')) > -1){
                    return <Picture data={data} key={idx} />
                }
            })}

            {
                loadding ? 
                <Loadding><FontAwesomeIcon icon={faSpinner} size="2x" spin /></Loadding> : 
                ''
            }
        </PictureList>
    )
}

const PictureList = Styled.section`
    width: 100%;
    column-width: 20rem;
    column-gap: 10px;
    text-align: center;
    padding: 10px;
`;

const Loadding = Styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    margin-top: 30px;

    span {
        width: 10px;
        height: 10px;
        margin: 0 3px;
        border: 1px solid #aaa;
        border-radius: 50%;
        display: block;
        transition: .3s;
        animation: loaddingAni infinite 3s;
    }
    @keyframes loaddingAni {
        0%  {
            span {background-color: none;}
            span:nth-of-type(1) {
                background-color: #aaa;
            }
        }
        33.33%  {
            span {background-color: none;}
            span:nth-of-type(2) {
                background-color: #aaa;
            }
        }
        66.66%  {
            span {background-color: none;}
            span:nth-of-type(3) {
                background-color: #aaa;
            }
        }
        100%  {
            span {background-color: none;}
            span:nth-of-type(1) {
                background-color: #aaa;
            }
        }
    }
`;