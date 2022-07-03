import { Container, Main } from '.';
import Header from '../../components/Header/Header';
import Player from '../../components/Player/Player';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Classes() {
  return (
    <Container>
      <Header />

      <Main>
        <Player />
        <Sidebar />
      </Main>
    </Container>
  );
}
