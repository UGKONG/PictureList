/* eslint-disable */
import Styled from 'styled-components';

export default ({logo, searchInput, setImgSearch}) => {
    const logoClick = () => {
        location.reload();
    }

    const imgSearch = (e) => {
      let val = e.currentTarget.value;
      setImgSearch(val);
    }

    return (
      <Header>
        <Logo onClick={logoClick}>
          <img src={logo} />
        </Logo>
        <SearchBox 
          ref={searchInput}
          onChange={imgSearch}
          placeholder="검색어를 입력하세요." 
        />
      </Header>
    )
}

const Header = Styled.header`
    height: 134px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
`;
const Logo = Styled.h1`
    width: 200px;
    margin-bottom: 10px;
    cursor: pointer;
    img {
        width: 100%;
    }
`
const SearchBox = Styled.input`
    width: 90%;
    height: 30px;
    border: 1px solid #aaaaaa50;
    border-radius: 4px;
    padding: 0 6px;
    outline: 0;
    
    &:focus {

    }
`;