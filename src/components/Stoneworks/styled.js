import styled from 'styled-components';
import media from 'styled-media-query';

export const StoneworksStyle = styled.h1`
  line-height: 140%;
  font-size: 3rem;
  font-weight: bold;
  margin: var(--space);
  color: var(--stone-purple);

  ${media.greaterThan('medium')`
    line-height: 1.1;
    font-size: 4rem;
  `}

  ${media.greaterThan('large')`
    line-height: 1.1;
    font-size: 5rem;
  `}
`;