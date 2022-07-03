/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import rem from '../../utils/pixelToRem';

export const Container = styled.section`
  flex: 1 1 0%;
`;

export const ContainerPlayer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const Video = styled.div`
  aspect-ratio: 16 / 9;
  height: 100%;
  max-height: 60vh;
  max-width: 1100px;
  width: 100%;
`;

export const Details = styled.section`
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
  padding: ${rem(32)};
`;

export const DetailsContent = styled.div`
  align-items: flex-start;
  display: flex;
  gap: ${rem(64)};
`;

export const DetailsVideo = styled.div`
  flex: 1 1 0%;
`;

export const TitleVideo = styled.h2`
  font-size: var(--font-lg);
  font-weight: 700;
`;

export const DescriptionVideo = styled.p`
  color: var(--color-gray-200);
  margin-top: var(--spacing-04);
`;

export const LinksContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-04);
`;

export const LinkDiscord = styled.a`
  align-items: center;
  background-color: var(--color-sky-500);
  border-radius: var(--border-size);
  color: var(--color-sky-50);
  display: flex;
  font-weight: 700;
  gap: var(--spacing-02);
  justify-content: center;
  padding: var(--spacing-04);
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.3s;

  &:hover,
  &:focus {
    background-color: var(--color-sky-700);
  }
`;

export const LinkChallenge = styled(LinkDiscord)`
  background-color: transparent;
  border: 2px solid var(--color-sky-500);

  &:hover,
  &:focus {
    background-color: var(--color-sky-500);
    color: var(--color-gray-900);
  }
`;
