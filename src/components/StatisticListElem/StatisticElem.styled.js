import styled from 'styled-components'

export const ListStatistic = styled.ul`
padding: 0;
list-style: none;
display: ${({$statusStatistic: {good,bad,neutral}}) =>{
    if (good || bad || neutral) {
        return 'block'
    }else{
        return 'none'
    }
}};
`