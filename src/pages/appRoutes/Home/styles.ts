import styled from 'styled-components/native';

export const StatusBar = styled.StatusBar.attrs(props=>({
    barStyle: props.theme.isDark ? 'light-content' : 'dark-content',
    backgroundColor: props.theme.colors.primary
 }))`
 `;

export const Container = styled.View`
   flex: 1;
`;
