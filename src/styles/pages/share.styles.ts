import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: ${({ theme }) => theme.sizes.partition["x1/1"]};
  max-width: ${({ theme }) => theme.sizes.common.x96};
  height: ${({ theme }) => theme.sizes.partition["x1/1"]};
  min-height: 100vh;

  margin: auto;
  padding: ${({ theme }) => theme.sizes.common.x6};
`;

export const ContentWrapper = styled.div`
  display: flex;

  flex-direction: column;

  width: ${({ theme }) => theme.sizes.partition["x1/1"]};

  gap: ${({ theme }) => theme.sizes.common.x1};

  color: ${({ theme }) => theme.themeColors.text};
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.variants.heading2};

  text-align: center;

  margin: ${({ theme }) => theme.sizes.common.x2} 0;

  color: ${({ theme }) => theme.themeColors.text};
`;

export const Text = styled.p`
  ${({ theme }) => theme.typography.variants.body1};

  color: ${({ theme }) => theme.themeColors.text};
`;

export const SocialMediaLinksWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-around;

  a.icon {
    width: ${({ theme }) => theme.sizes.common.x6};
    height: ${({ theme }) => theme.sizes.common.x6};

    color: ${({ theme }) => theme.themeColors.text};

    transition: transform ${({ theme }) => theme.transition.fast};

    svg {
      width: ${({ theme }) => theme.sizes.partition["x1/1"]};
      height: ${({ theme }) => theme.sizes.partition["x1/1"]};
    }

    :hover,
    :focus-within,
    :focus {
      transform: scale(1.1);

      svg.twitter path {
        stroke: ${({ theme }) => theme.colors.info[400]};
      }

      svg.facebook {
        line,
        circle,
        path {
          stroke: ${({ theme }) => theme.colors.error[600]};
        }
      }

      svg.linkedin {
        rect:not(:first-of-type),
        line,
        path,
        circle {
          stroke: ${({ theme }) => theme.colors.info[700]};
        }

        circle:last-of-type {
          fill: ${({ theme }) => theme.colors.info[700]};
        }
      }
    }
  }
`;
