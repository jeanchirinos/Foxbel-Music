import styled, { css } from 'styled-components'
import { TFlex } from 'types'

export const Flex = styled.div(
  (props: TFlex) => css`
    display: flex;
    flex-direction: ${props.column && 'column'};
    justify-content: ${props.justifyCenter && 'center'};
    align-items: ${props.alignCenter && 'center'};
    justify-content: ${props.justify};
    align-items: ${props.align};
    flex-wrap: ${props.$wrap && 'wrap'};
    gap: ${props.gap && `${props.gap}rem`};
    column-gap: ${props.columnGap && `${props.columnGap}rem`};
    row-gap: ${props.rowGap && `${props.rowGap}rem`};

    ${props.fullCenter &&
    css`
      justify-content: center;
      align-items: center;
    `}
  `
)
