import { DiscordLogo, Lightning } from 'phosphor-react';
import {
  Container,
  ContainerPlayer,
  DescriptionVideo,
  Details,
  DetailsContent,
  DetailsVideo,
  LinkChallenge,
  LinkDiscord,
  LinksContent,
  TitleVideo,
  Video,
} from '.';

export default function Player() {
  return (
    <Container>
      <ContainerPlayer>
        <Video>Video</Video>
      </ContainerPlayer>

      <Details>
        <DetailsContent>
          <DetailsVideo>
            <TitleVideo>Astro: A Primeira Meia Hora</TitleVideo>
            <DescriptionVideo>
              O Tarcio Zemel mostra nesse vídeo o poder do ASTRO e como ele
              ajuda a fazer sites INCRIVELMENTE RÁPIDOS para a Web moderna.{' '}
            </DescriptionVideo>
          </DetailsVideo>

          <LinksContent>
            <LinkDiscord href="">
              <DiscordLogo size={24} />
              Discord
            </LinkDiscord>

            <LinkChallenge href="">
              <Lightning size={24} />
              Desafio da aula
            </LinkChallenge>
          </LinksContent>
        </DetailsContent>
      </Details>
    </Container>
  );
}
