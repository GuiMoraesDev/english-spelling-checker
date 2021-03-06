import styled from "styled-components";

export const AudioContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: ${({ theme }) => theme.sizes.partition["x1/1"]};

  margin: ${({ theme }) => theme.sizes.common.x2};
`;
interface AudioPlayerWrapperProps {
  isPlaying: boolean;
}

export const AudioPlayerWrapper = styled.label<AudioPlayerWrapperProps>`
  display: flex;

  align-items: center;
  justify-content: center;

  width: ${({ theme }) => theme.sizes.common.x9};
  height: ${({ theme }) => theme.sizes.common.x9};

  border: ${({ theme }) => theme.borders.solid};
  border-color: ${({ theme }) => theme.themeColors.borderInverted};
  border-radius: ${({ theme }) => theme.rounded.full};

  cursor: pointer;

  transition: all ${({ theme }) => theme.transition.normal};

  audio.audio-tag {
    display: none;
  }

  svg.icon {
    width: 40%;
    height: 40%;
  }

  :hover,
  :focus-within,
  :focus {
    border-color: ${({ theme, isPlaying }) =>
      isPlaying ? theme.colors.error["600"] : theme.colors.info["600"]};
    box-shadow: ${({ theme }) => theme.shadows.regular};

    svg.icon {
      &.play path,
      &.stop rect {
        stroke: ${({ theme, isPlaying }) =>
          isPlaying ? theme.colors.error["600"] : theme.colors.info["600"]};
      }
    }
  }
`;
