/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import rem from '../../utils/pixelToRem';

export const SidebarRight = styled.aside`
  background-color: var(--color-gray-700);
  padding: var(--spacing-06);
  width: ${rem(348)};
  border-left: var(--border-size) solid var(--color-gray-600);
`;

export const Title = styled.h2`
  border-bottom: var(--border-size) solid var(--color-gray-500);
  display: block;
  font-size: var(--font-lg);
  font-weight: 700;
  margin-bottom: var(--spacing-06);
  padding-bottom: var(--spacing-06);
`;

export const ContentLesson = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${rem(32)};
`;
