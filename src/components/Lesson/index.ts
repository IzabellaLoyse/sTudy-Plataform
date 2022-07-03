/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import rem from '../../utils/pixelToRem';

export const Link = styled.a`
  text-decoration: none;
`;

export const Text = styled.span`
  color: var(--color-gray-300);
`;

export const BoxContent = styled.div`
  border-radius: 4px;
  border: 1px solid var(--color-gray-500);
  margin-top: var(--spacing-02);
  padding: var(--spacing-04);
`;

export const BoxHeader = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const BoxText = styled.span`
  align-items: center;
  color: var(--color-sky-400);
  display: flex;
  font-size: var(--font-sm);
  font-weight: 500;
  gap: var(--spacing-04);
`;

export const BoxTextLesson = styled(BoxText)`
  color: var(--color-blue-600);
`;

export const SupportingText = styled.span`
  border: var(--border-size) solid var(--color-sky-500);
  color: var(--color-sky-50);
  font-size: ${rem(12)};
  font-weight: 700;
  padding: ${rem(2)} var(--spacing-02);
`;

export const Description = styled.strong`
  color: var(--color-gray-200);
  display: block;
  margin-top: var(--spacing-05);
`;
