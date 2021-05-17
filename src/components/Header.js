/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>
          <a>
            <img src="/images/home-icon.svg" alt="home-icon" />
            <span>HOME</span>
          </a>
          <a>
            <img src="/images/search-icon.svg" alt="search-icon" />
            <span>SEARCH</span>
          </a>
          <a>
            <img src="/images/watchlist-icon.svg" alt="watchlist-icon" />
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src="/images/original-icon.svg" alt="originals-icon" />
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src="/images/movie-icon.svg" alt="movies-icon" />
            <span>MOVIES</span>
          </a>
          <a>
            <img src="/images/series-icon.svg" alt="series-icon" />
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImg src="https://lh3.googleusercontent.com/fife/ABSRlIp9GjxPZeaP9_2anHsvjkOMr87Q29uPaL839LoH3uB1Uh7Y2mmE6lM2p6cCVIcJNZaIgYa_fSpP853eDtx7CpEg5ynvAHQYz3GqbxNyr657KZR7Gjk1U4Lc69fkYKLdE8M3I4OUX-vZdKY8mYW2pht6afS5xm7tFnu1ZLJ0yFGNMyW9n4aA1-5gof68AC8weoZJ7KdY2HTcKTi0qInKUS4jUULC9m1BUNWEMpuMcTKhJ0WVDgL24P-nnoA_yZczl2gByuXbtH4bRMjwpCGcSxyZ5oc3uuVZtwdRBLoSZ0J8SqUX4flUAj3YwZzCHdfFxPVClV5bZF8duJiFiHNqbqF2vIKdikJrdwVli5v9rAVPaKGaegEM0VNpVSN_azmazGWTAMCW07x5FeIEUDNQBijRKHs4ZSh5oyt-rFJ9omxVNbOk32A__6yDukHO7wBTjUVHWg24OJ_nEx-fume18cX6aUI_t9irhWFSPpteJgeMUzWbDyUmvoJOenrU1gbx7Wn-JhIbhv9HQQ0Jrewj-hBGYEocIbjbzmX4rJY7IyF5KDufUQGeMSPgWSpOMar067TpGHjAgjGr0-0Jr0cHYDwn3_iv-nJxUJaTAYDDT3Quv7rbP88oN742-57D8IMhfsFSVdTDQ-_IheWvp8v2ctV0MGRJH25_z_zQembEa4CKz0KbRPPMddB6mQjE0a4yc620uJIJIvbGDRYnz6Nl5PDwB_BCPEbvz9UPWorfrcaMpQ=s64-c"/>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`
const Logo = styled.img`
    width: 80px;

`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    padding: 0 36px;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;
        }

        span {
          font-size: 13px;
          letter-spacing: 1.42px;
          position: relative;

          &:after {
            content: "";
            height: 2px;
            background: white;
            position: absolute;
            left: 0;
            right:0;
            bottom: -6px;
            opacity: 0;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,0.94) 0s;
            transform: scaleX(0);
          }
        }

        &:hover{
          span:after{
            transform: scaleX(1);
            opacity: 1;
          }
          
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
`