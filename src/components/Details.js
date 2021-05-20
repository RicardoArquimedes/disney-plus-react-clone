import React from 'react';
import styled from 'styled-components';


function Details() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0D20E549227FFDC3B1207DBA9F5F94C2EB53783E7CAE0BF8E37ECEE899F03087/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="wandavision-cover"/>
            </Background>
            <ImageTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AC446487B02CDADEACEFEC36EAA9F618DD0895058B0F84E954276C0F7E203A7D/scale?width=1440&aspectRatio=1.78" alt="wandavision-title" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="play" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="play" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                        <img src="/images/group-icon.png" alt="group-icon"/>
                </GroupWatchButton>
            </Controls>
            <Subtitle>

            </Subtitle>
        </Container>
    )
}

export default Details;

const Container = styled.div `
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div `
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

`
const ImageTitle = styled.div `
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
`

const Controls = styled.div`
    display: flex;
    align-items: center;

`

const PlayButton = styled.div`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: #fff;
    color: #000;
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
   
`

const AddButton = styled.div`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        margin-top: -5px;
        color: white;
 
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);

`

const Subtitle = styled.div``