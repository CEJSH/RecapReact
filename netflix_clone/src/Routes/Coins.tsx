import { Helmet } from "react-helmet";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

interface ICoinsProps {
  toggleDark: () => void
}
const Container = styled.div`
max-width: 480px;
margin:0 auto;
padding:0px 20px;
`

const Header = styled.header`
height: 10vh;
display: flex;
justify-content:center;
align-items:center;
`
const CoinsList = styled.ul``;

const Coin = styled.li`
  background-color: ${(props) => props.theme.cardBgColor};;
  color: ${(props) => props.theme.textColor};
  border: 1px solid white;
  border-radius: 15px ;
  margin-bottom: 10px;
  a {
    display: flex;
    padding: 20px;
    transition: color 0.2s ease-in;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor}; 
    }
  }
`;
const Img = styled.img`
    width:25px;
    height:25px;
    margin-right:10px;
`
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
    text-align:center;
    display: block;
`
interface ICoin {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

function Coins({ toggleDark }: ICoinsProps) {

  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins)
  return (
    <Container>
      <Helmet>
        <title>코인</title>

      </Helmet>
      <Header>
        <Title>코인</Title>
        <button onClick={toggleDark}>Toggle Dark Mode</button>
      </Header>
      {isLoading ? (<Loader>loading...</Loader>) : <CoinsList>
        {data?.slice(0, 100).map(coin =>
          <Coin key={coin.id}>
            <Link to={{ pathname: `/${coin.id}`, state: { name: coin.name } }}>
              <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />{coin.name} &rarr;
            </Link>
          </Coin>)}
      </CoinsList>}
    </Container>
  )
}

export default Coins;